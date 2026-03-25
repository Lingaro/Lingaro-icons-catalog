$ErrorActionPreference = "Stop"
$ppt = New-Object -ComObject PowerPoint.Application
$ppt.Visible = [Microsoft.Office.Core.MsoTriState]::msoTrue
Write-Host "PowerPoint connected"

$pres = $ppt.Presentations.Add($false)
Write-Host "Presentation created"

$vbp = $pres.VBProject

# Add main module
$mod = $vbp.VBComponents.Add(1)
$mod.Name = "LingaroIconsModule"

$moduleCode = @"
Public Const API_BASE As String = "https://lingaro-icons-catalog.azurewebsites.net/api"

Sub Auto_Open()
    On Error Resume Next
    Dim cb As CommandBar
    Set cb = Application.CommandBars("Lingaro Icons")
    If Not cb Is Nothing Then cb.Delete
    On Error GoTo 0
    Dim newBar As CommandBar
    Set newBar = Application.CommandBars.Add(Name:="Lingaro Icons", Position:=msoBarTop, Temporary:=True)
    Dim btn As CommandBarButton
    Set btn = newBar.Controls.Add(Type:=msoControlButton)
    btn.Caption = "Lingaro Icons"
    btn.Style = msoButtonCaption
    btn.OnAction = "ShowIconBrowser"
    btn.FaceId = 2031
    newBar.Visible = True
End Sub

Sub Auto_Close()
    On Error Resume Next
    Application.CommandBars("Lingaro Icons").Delete
End Sub

Sub ShowIconBrowser()
    LingaroIconsForm.Show vbModeless
End Sub

Function HttpGet(url As String) As String
    Dim http As Object
    Set http = CreateObject("MSXML2.XMLHTTP.6.0")
    http.Open "GET", url, False
    http.setRequestHeader "Content-Type", "application/json"
    http.send
    If http.Status = 200 Then
        HttpGet = http.responseText
    Else
        HttpGet = ""
    End If
    Set http = Nothing
End Function

Function DownloadToTemp(url As String, filename As String) As String
    Dim http As Object
    Set http = CreateObject("MSXML2.XMLHTTP.6.0")
    http.Open "GET", url, False
    http.send
    If http.Status <> 200 Then
        DownloadToTemp = ""
        Exit Function
    End If
    Dim tempPath As String
    tempPath = Environ("TEMP") & "\" & filename
    Dim stream As Object
    Set stream = CreateObject("ADODB.Stream")
    stream.Type = 1
    stream.Open
    stream.Write http.responseBody
    stream.SaveToFile tempPath, 2
    stream.Close
    DownloadToTemp = tempPath
    Set stream = Nothing
    Set http = Nothing
End Function

Sub InsertIconById(iconId As String, iconName As String, iconFilename As String)
    Dim url As String
    url = API_BASE & "/icons/" & iconId & "/file"
    Dim tempFile As String
    tempFile = DownloadToTemp(url, iconFilename)
    If tempFile = "" Then
        MsgBox "Failed to download icon.", vbExclamation
        Exit Sub
    End If
    Dim sld As Slide
    On Error Resume Next
    Set sld = Application.ActiveWindow.View.Slide
    On Error GoTo 0
    If sld Is Nothing Then
        MsgBox "No active slide.", vbExclamation
        Exit Sub
    End If
    Dim shp As Shape
    Set shp = sld.Shapes.AddPicture(filename:=tempFile, LinkToFile:=msoFalse, SaveWithDocument:=msoTrue, Left:=0, Top:=0, Width:=72, Height:=-1)
    shp.Left = (Application.ActivePresentation.PageSetup.SlideWidth - shp.Width) / 2
    shp.Top = (Application.ActivePresentation.PageSetup.SlideHeight - shp.Height) / 2
    shp.Select
    On Error Resume Next
    Kill tempFile
    On Error GoTo 0
End Sub

Function FindField(json As String, startPos As Long, fieldName As String) As Long
    Dim pat1 As String, pat2 As String, p1 As Long, p2 As Long
    pat1 = Chr(34) & fieldName & Chr(34) & ":" & Chr(34)
    pat2 = Chr(34) & fieldName & Chr(34) & ": " & Chr(34)
    p1 = InStr(startPos, json, pat1)
    p2 = InStr(startPos, json, pat2)
    If p1 = 0 And p2 = 0 Then
        FindField = 0
    ElseIf p1 = 0 Then
        FindField = p2
    ElseIf p2 = 0 Then
        FindField = p1
    ElseIf p1 < p2 Then
        FindField = p1
    Else
        FindField = p2
    End If
End Function

Function ReadFieldValue(json As String, fieldPos As Long) As String
    Dim p As Long
    p = InStr(fieldPos, json, ":")
    If p = 0 Then Exit Function
    p = p + 1
    Do While p <= Len(json) And (Mid(json, p, 1) = " " Or Mid(json, p, 1) = Chr(9))
        p = p + 1
    Loop
    If Mid(json, p, 1) <> Chr(34) Then Exit Function
    p = p + 1
    Dim e As Long
    e = InStr(p, json, Chr(34))
    If e > p Then ReadFieldValue = Mid(json, p, e - p)
End Function

Function ReadFieldByName(json As String, startPos As Long, fieldName As String) As String
    Dim fp As Long
    fp = FindField(json, startPos, fieldName)
    If fp = 0 Then Exit Function
    Dim nextObj As Long
    nextObj = FindField(json, startPos + 5, "id")
    If nextObj > 0 And fp > nextObj Then Exit Function
    ReadFieldByName = ReadFieldValue(json, fp)
End Function
"@

$mod.CodeModule.AddFromString($moduleCode)
Write-Host "Module code added"

# Add UserForm
$form = $vbp.VBComponents.Add(3)
$form.Name = "LingaroIconsForm"
$frm = $form.Designer

# Controls
$lbl = $frm.Controls.Add("Forms.Label.1", "lblSearch")
$lbl.Caption = "Search icons:"; $lbl.Left = 6; $lbl.Top = 6; $lbl.Width = 280; $lbl.Height = 14

$txt = $frm.Controls.Add("Forms.TextBox.1", "txtSearch")
$txt.Left = 6; $txt.Top = 22; $txt.Width = 210; $txt.Height = 20

$btnS = $frm.Controls.Add("Forms.CommandButton.1", "btnSearch")
$btnS.Caption = "Search"; $btnS.Left = 222; $btnS.Top = 22; $btnS.Width = 60; $btnS.Height = 20

$lbl2 = $frm.Controls.Add("Forms.Label.1", "lblCollection")
$lbl2.Caption = "Collection:"; $lbl2.Left = 6; $lbl2.Top = 48; $lbl2.Width = 280; $lbl2.Height = 14

$cmb = $frm.Controls.Add("Forms.ComboBox.1", "cmbCollection")
$cmb.Left = 6; $cmb.Top = 63; $cmb.Width = 276; $cmb.Height = 20

$lbl3 = $frm.Controls.Add("Forms.Label.1", "lblIcons")
$lbl3.Caption = "Icons:"; $lbl3.Left = 6; $lbl3.Top = 89; $lbl3.Width = 280; $lbl3.Height = 14

$lst = $frm.Controls.Add("Forms.ListBox.1", "lstIcons")
$lst.Left = 6; $lst.Top = 104; $lst.Width = 276; $lst.Height = 180

$lbl4 = $frm.Controls.Add("Forms.Label.1", "lblPreview")
$lbl4.Caption = ""; $lbl4.Left = 6; $lbl4.Top = 290; $lbl4.Width = 276; $lbl4.Height = 42
$lbl4.WordWrap = $true

$lbl5 = $frm.Controls.Add("Forms.Label.1", "lblStatus")
$lbl5.Caption = ""; $lbl5.Left = 6; $lbl5.Top = 338; $lbl5.Width = 276; $lbl5.Height = 16

$btnI = $frm.Controls.Add("Forms.CommandButton.1", "btnInsert")
$btnI.Caption = "Insert into Slide"; $btnI.Left = 6; $btnI.Top = 360; $btnI.Width = 276; $btnI.Height = 28
$btnI.Enabled = $false

$form.Properties.Item("Width").Value = 300
$form.Properties.Item("Height").Value = 400
Write-Host "Form controls added"

$formCode = @"
Option Explicit

Private Type IconInfo
    Id As String
    Name As String
    Filename As String
    Category As String
    SetName As String
End Type

Private Icons() As IconInfo
Private IconCount As Long

Private Sub UserForm_Initialize()
    Me.Caption = "Lingaro Icons Catalog"
    LoadCollections
    SearchIcons ""
End Sub

Private Sub LoadCollections()
    cmbCollection.Clear
    cmbCollection.AddItem "All Collections"
    cmbCollection.ListIndex = 0
    Dim json As String
    json = HttpGet(API_BASE & "/collections")
    If json = "" Then Exit Sub
    Dim pos As Long: pos = 1
    Do
        pos = FindField(json, pos, "name")
        If pos = 0 Then Exit Do
        Dim val As String
        val = ReadFieldValue(json, pos)
        If Len(val) > 0 Then cmbCollection.AddItem val
        pos = pos + Len(val) + 5
    Loop
End Sub

Private Sub btnSearch_Click()
    SearchIcons txtSearch.Text
End Sub

Private Sub txtSearch_KeyDown(ByVal KeyCode As MSForms.ReturnInteger, ByVal Shift As Integer)
    If KeyCode = 13 Then
        SearchIcons txtSearch.Text
        KeyCode = 0
    End If
End Sub

Private Sub cmbCollection_Change()
    SearchIcons txtSearch.Text
End Sub

Private Sub lstIcons_Click()
    If lstIcons.ListIndex >= 0 And lstIcons.ListIndex < IconCount Then
        lblPreview.Caption = Icons(lstIcons.ListIndex).Name & vbCrLf & Icons(lstIcons.ListIndex).Category & " | " & Icons(lstIcons.ListIndex).SetName
        btnInsert.Enabled = True
    End If
End Sub

Private Sub btnInsert_Click()
    If lstIcons.ListIndex < 0 Or lstIcons.ListIndex >= IconCount Then Exit Sub
    Dim idx As Long: idx = lstIcons.ListIndex
    btnInsert.Caption = "Inserting..."
    btnInsert.Enabled = False
    DoEvents
    InsertIconById Icons(idx).Id, Icons(idx).Name, Icons(idx).Filename
    btnInsert.Caption = "Insert into Slide"
    btnInsert.Enabled = True
    lblStatus.Caption = Icons(idx).Name & " inserted!"
End Sub

Private Sub SearchIcons(query As String)
    lstIcons.Clear
    IconCount = 0
    lblPreview.Caption = ""
    btnInsert.Enabled = False
    lblStatus.Caption = "Searching..."
    DoEvents
    Dim url As String, selectedSet As String
    If cmbCollection.ListIndex > 0 Then selectedSet = cmbCollection.List(cmbCollection.ListIndex)
    If Len(Trim(query)) > 0 Then
        url = API_BASE & "/search?q=" & UrlEncode(query) & "&limit=50&semantic=false"
        If Len(selectedSet) > 0 Then url = url & "&set=" & UrlEncode(selectedSet)
    Else
        url = API_BASE & "/icons?limit=50"
        If Len(selectedSet) > 0 Then url = url & "&set=" & UrlEncode(selectedSet)
    End If
    Dim json As String: json = HttpGet(url)
    If json = "" Then
        lblStatus.Caption = "API unavailable"
        Exit Sub
    End If
    ParseIcons json
    lblStatus.Caption = IconCount & " icons found"
End Sub

Private Sub ParseIcons(json As String)
    ReDim Icons(0 To 199)
    IconCount = 0
    Dim pos As Long: pos = 1
    Do
        Dim idPos As Long: idPos = FindField(json, pos, "id")
        If idPos = 0 Then Exit Do
        Dim idVal As String: idVal = ReadFieldValue(json, idPos)
        Dim nameVal As String: nameVal = ReadFieldByName(json, idPos, "name")
        Dim fnVal As String: fnVal = ReadFieldByName(json, idPos, "filename")
        Dim catVal As String: catVal = ReadFieldByName(json, idPos, "category")
        Dim setVal As String: setVal = ReadFieldByName(json, idPos, "set_name")
        If Len(idVal) > 0 And Len(nameVal) > 0 Then
            Icons(IconCount).Id = idVal
            Icons(IconCount).Name = nameVal
            Icons(IconCount).Filename = fnVal
            Icons(IconCount).Category = catVal
            Icons(IconCount).SetName = setVal
            lstIcons.AddItem nameVal & "  [" & setVal & "]"
            IconCount = IconCount + 1
            If IconCount >= 200 Then Exit Do
        End If
        pos = idPos + Len(idVal) + 5
    Loop
End Sub

Private Function UrlEncode(s As String) As String
    UrlEncode = Replace(Replace(Replace(s, " ", "%20"), "&", "%26"), "=", "%3D")
End Function
"@

$form.CodeModule.AddFromString($formCode)
Write-Host "Form code added"

# Save as PPAM (30 = ppSaveAsOpenXMLAddin)
$ppamPath = (Get-Location).Path + "\LingaroIcons.ppam"
$pres.SaveAs($ppamPath, 30)
$pres.Close()
Write-Host "`nDone! PPAM saved: $ppamPath"
Write-Host "Load via: File > Options > Add-ins > Manage: PowerPoint Add-ins > Go > Add New"
