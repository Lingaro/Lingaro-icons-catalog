"""Generate a Lingaro Icons PPAM add-in for PowerPoint via COM automation."""

import os
import sys
import time

try:
    import win32com.client
except ImportError:
    print("Installing pywin32...")
    os.system(f"{sys.executable} -m pip install pywin32")
    import win32com.client

OUTPUT_DIR = os.path.dirname(os.path.abspath(__file__))
PPAM_PATH = os.path.join(OUTPUT_DIR, "LingaroIcons.ppam")

VBA_MODULE_CODE = r'''
' Lingaro Icons Catalog - PowerPoint Add-in
' Fetches icons from the catalog API and inserts them into slides

Public Const API_BASE As String = "https://lingaro-icons-catalog.azurewebsites.net/api"

Sub Auto_Open()
    ' Add menu item to ribbon via CommandBar
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
    stream.Type = 1 ' Binary
    stream.Open
    stream.Write http.responseBody
    stream.SaveToFile tempPath, 2 ' Overwrite
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

    ' Insert into active slide
    Dim sld As Slide
    On Error Resume Next
    Set sld = Application.ActiveWindow.View.Slide
    On Error GoTo 0

    If sld Is Nothing Then
        MsgBox "No active slide. Please select a slide first.", vbExclamation
        Exit Sub
    End If

    ' Insert at center, 1 inch size (72 points)
    Dim shp As Shape
    Set shp = sld.Shapes.AddPicture( _
        filename:=tempFile, _
        LinkToFile:=msoFalse, _
        SaveWithDocument:=msoTrue, _
        Left:=0, Top:=0, _
        Width:=72, Height:=-1)

    ' Center on slide
    shp.Left = (Application.ActivePresentation.PageSetup.SlideWidth - shp.Width) / 2
    shp.Top = (Application.ActivePresentation.PageSetup.SlideHeight - shp.Height) / 2

    ' Select the shape
    shp.Select

    ' Clean up temp file
    On Error Resume Next
    Kill tempFile
    On Error GoTo 0
End Sub
'''

VBA_FORM_CODE = r'''
VERSION 5.00
Begin {C62A69F0-16DC-11CE-9E98-00AA00574A4F} LingaroIconsForm
   Caption         =   "Lingaro Icons Catalog"
   ClientHeight    =   8400
   ClientLeft      =   120
   ClientTop       =   465
   ClientWidth     =   4560
   OleObjectBlob   =   "LingaroIconsForm.frx":0000
   StartUpPosition =   1
End
'''

VBA_FORM_MODULE_CODE = r'''
' Lingaro Icons Form - Browse and insert icons
Option Explicit

Private Type IconInfo
    Id As String
    Name As String
    Filename As String
    Category As String
    SetName As String
    Tags As String
End Type

Private Icons() As IconInfo
Private IconCount As Long

Private Sub UserForm_Initialize()
    Me.Width = 320
    Me.Height = 520
    Me.Caption = "Lingaro Icons Catalog"

    ' Load collections into dropdown
    LoadCollections

    ' Initial load - all icons
    SearchIcons ""
End Sub

Private Sub LoadCollections()
    cmbCollection.Clear
    cmbCollection.AddItem "All Collections"
    cmbCollection.ListIndex = 0

    Dim json As String
    json = HttpGet(API_BASE & "/collections")
    If json = "" Then Exit Sub

    ' Parse collection names from JSON
    Dim pos As Long
    pos = 1
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
        lblPreview.Caption = Icons(lstIcons.ListIndex).Name & vbCrLf & _
            Icons(lstIcons.ListIndex).Category & " | " & Icons(lstIcons.ListIndex).SetName & vbCrLf & _
            Icons(lstIcons.ListIndex).Tags
        btnInsert.Enabled = True
    End If
End Sub

Private Sub btnInsert_Click()
    If lstIcons.ListIndex < 0 Or lstIcons.ListIndex >= IconCount Then Exit Sub

    Dim idx As Long
    idx = lstIcons.ListIndex

    btnInsert.Caption = "Inserting..."
    btnInsert.Enabled = False
    DoEvents

    InsertIconById Icons(idx).Id, Icons(idx).Name, Icons(idx).Filename

    btnInsert.Caption = "Insert into Slide"
    btnInsert.Enabled = True

    lblStatus.Caption = Chr(10004) & " " & Icons(idx).Name & " inserted!"
End Sub

Private Sub SearchIcons(query As String)
    lstIcons.Clear
    IconCount = 0
    lblPreview.Caption = ""
    btnInsert.Enabled = False
    lblStatus.Caption = "Searching..."
    DoEvents

    Dim url As String
    Dim selectedSet As String

    If cmbCollection.ListIndex > 0 Then
        selectedSet = cmbCollection.List(cmbCollection.ListIndex)
    End If

    If Len(Trim(query)) > 0 Then
        url = API_BASE & "/search?q=" & WorksheetEncode(query) & "&limit=50&semantic=false"
        If Len(selectedSet) > 0 Then url = url & "&set=" & WorksheetEncode(selectedSet)
    Else
        url = API_BASE & "/icons?limit=50"
        If Len(selectedSet) > 0 Then url = url & "&set=" & WorksheetEncode(selectedSet)
    End If

    Dim json As String
    json = HttpGet(url)

    If json = "" Then
        lblStatus.Caption = "API unavailable"
        Exit Sub
    End If

    ' Parse icons from JSON response
    ParseIcons json

    lblStatus.Caption = IconCount & " icons found"
End Sub

Private Sub ParseIcons(json As String)
    ' JSON parser that handles both "key":"value" and "key": "value" formats
    ReDim Icons(0 To 199)
    IconCount = 0

    Dim pos As Long
    pos = 1
    Do
        ' Find next "id" field - try without space first, then with space
        Dim idPos As Long
        idPos = FindField(json, pos, "id")
        If idPos = 0 Then Exit Do

        Dim idVal As String
        idVal = ReadFieldValue(json, idPos)

        Dim nameVal As String, fnVal As String, catVal As String, setVal As String
        nameVal = ReadFieldByName(json, idPos, "name")
        fnVal = ReadFieldByName(json, idPos, "filename")
        catVal = ReadFieldByName(json, idPos, "category")
        setVal = ReadFieldByName(json, idPos, "set_name")

        If Len(idVal) > 0 And Len(nameVal) > 0 Then
            Icons(IconCount).Id = idVal
            Icons(IconCount).Name = nameVal
            Icons(IconCount).Filename = fnVal
            Icons(IconCount).Category = catVal
            Icons(IconCount).SetName = setVal
            Icons(IconCount).Tags = ""

            lstIcons.AddItem nameVal & "  [" & setVal & "]"
            IconCount = IconCount + 1
            If IconCount >= 200 Then Exit Do
        End If

        pos = idPos + Len(idVal) + 5
    Loop
End Sub

Private Function FindField(json As String, startPos As Long, fieldName As String) As Long
    ' Find "fieldName":" or "fieldName": " in json
    Dim pat1 As String, pat2 As String
    Dim p1 As Long, p2 As Long
    pat1 = """" & fieldName & """:"""
    pat2 = """" & fieldName & """: """
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

Private Function ReadFieldValue(json As String, fieldPos As Long) As String
    ' From a field position, skip past ": " or ":" and read the quoted value
    Dim p As Long
    p = InStr(fieldPos, json, ":")
    If p = 0 Then Exit Function
    p = p + 1
    ' Skip whitespace
    Do While p <= Len(json) And (Mid(json, p, 1) = " " Or Mid(json, p, 1) = vbTab)
        p = p + 1
    Loop
    ' Expect opening quote
    If Mid(json, p, 1) <> """" Then Exit Function
    p = p + 1
    ' Read until closing quote (not escaped)
    Dim e As Long
    e = InStr(p, json, """")
    If e > p Then ReadFieldValue = Mid(json, p, e - p)
End Function

Private Function ReadFieldByName(json As String, startPos As Long, fieldName As String) As String
    ' Find the field near startPos (within the same object) and read its value
    Dim fp As Long
    fp = FindField(json, startPos, fieldName)
    If fp = 0 Then Exit Function
    ' Ensure we haven't passed into the next object - check distance
    Dim nextObj As Long
    nextObj = FindField(json, startPos + 5, "id")
    If nextObj > 0 And fp > nextObj Then Exit Function
    ReadFieldByName = ReadFieldValue(json, fp)
End Function

Private Function WorksheetEncode(s As String) As String
    Dim result As String
    result = Replace(s, " ", "%20")
    result = Replace(result, "&", "%26")
    result = Replace(result, "=", "%3D")
    WorksheetEncode = result
End Function
'''


def create_ppam():
    print("Starting PowerPoint...")
    ppt = win32com.client.Dispatch("PowerPoint.Application")
    ppt.Visible = True

    # Create new presentation
    pres = ppt.Presentations.Add(WithWindow=False)

    # Access VBA project
    vb_project = pres.VBProject

    # Add the main module
    print("Adding VBA module...")
    mod = vb_project.VBComponents.Add(1)  # vbext_ct_StdModule
    mod.Name = "LingaroIconsModule"
    mod.CodeModule.AddFromString(VBA_MODULE_CODE)

    # Add the UserForm
    print("Adding UserForm...")
    form = vb_project.VBComponents.Add(3)  # vbext_ct_MSForm
    form.Name = "LingaroIconsForm"

    # Add controls to the form
    frm = form.Designer

    # Search label
    lbl_search = frm.Controls.Add("Forms.Label.1", "lblSearch")
    lbl_search.Caption = "Search icons:"
    lbl_search.Left = 6
    lbl_search.Top = 6
    lbl_search.Width = 280
    lbl_search.Height = 14
    lbl_search.Font.Bold = True

    # Search textbox
    txt_search = frm.Controls.Add("Forms.TextBox.1", "txtSearch")
    txt_search.Left = 6
    txt_search.Top = 22
    txt_search.Width = 210
    txt_search.Height = 20

    # Search button
    btn_search = frm.Controls.Add("Forms.CommandButton.1", "btnSearch")
    btn_search.Caption = "Search"
    btn_search.Left = 222
    btn_search.Top = 22
    btn_search.Width = 60
    btn_search.Height = 20
    btn_search.BackColor = 0x00BE3C78  # Lingaro purple (BGR)
    btn_search.ForeColor = 0x00FFFFFF

    # Collection dropdown label
    lbl_col = frm.Controls.Add("Forms.Label.1", "lblCollection")
    lbl_col.Caption = "Collection:"
    lbl_col.Left = 6
    lbl_col.Top = 48
    lbl_col.Width = 280
    lbl_col.Height = 14

    # Collection dropdown
    cmb_collection = frm.Controls.Add("Forms.ComboBox.1", "cmbCollection")
    cmb_collection.Left = 6
    cmb_collection.Top = 63
    cmb_collection.Width = 276
    cmb_collection.Height = 20
    cmb_collection.Style = 2  # fmStyleDropDownList

    # Icons list label
    lbl_icons = frm.Controls.Add("Forms.Label.1", "lblIcons")
    lbl_icons.Caption = "Icons:"
    lbl_icons.Left = 6
    lbl_icons.Top = 89
    lbl_icons.Width = 280
    lbl_icons.Height = 14

    # Icons listbox
    lst_icons = frm.Controls.Add("Forms.ListBox.1", "lstIcons")
    lst_icons.Left = 6
    lst_icons.Top = 104
    lst_icons.Width = 276
    lst_icons.Height = 180

    # Preview label
    lbl_preview = frm.Controls.Add("Forms.Label.1", "lblPreview")
    lbl_preview.Caption = ""
    lbl_preview.Left = 6
    lbl_preview.Top = 290
    lbl_preview.Width = 276
    lbl_preview.Height = 42
    lbl_preview.WordWrap = True

    # Status label
    lbl_status = frm.Controls.Add("Forms.Label.1", "lblStatus")
    lbl_status.Caption = ""
    lbl_status.Left = 6
    lbl_status.Top = 338
    lbl_status.Width = 276
    lbl_status.Height = 16
    lbl_status.ForeColor = 0x00008000  # Green

    # Insert button
    btn_insert = frm.Controls.Add("Forms.CommandButton.1", "btnInsert")
    btn_insert.Caption = "Insert into Slide"
    btn_insert.Left = 6
    btn_insert.Top = 360
    btn_insert.Width = 276
    btn_insert.Height = 28
    btn_insert.Enabled = False
    btn_insert.BackColor = 0x00BE3C78  # Lingaro purple
    btn_insert.ForeColor = 0x00FFFFFF
    btn_insert.Font.Bold = True

    # Set form size
    form.Properties.Item("Width").Value = 300
    form.Properties.Item("Height").Value = 400

    # Add the form code
    form.CodeModule.AddFromString(VBA_FORM_MODULE_CODE)

    # Save as .ppam
    print(f"Saving to {PPAM_PATH}...")
    # ppSaveAsOpenXMLAddin = 30
    pres.SaveAs(PPAM_PATH, 30)
    pres.Close()

    print(f"\nDone! PPAM created: {PPAM_PATH}")
    print("\nTo install:")
    print("1. Open PowerPoint")
    print("2. File -> Options -> Add-ins")
    print("3. Manage: PowerPoint Add-ins -> Go...")
    print("4. Add New... -> browse to LingaroIcons.ppam")
    print("5. Click 'Lingaro Icons' in the toolbar to open the icon browser")


if __name__ == "__main__":
    create_ppam()
