import * as React from 'react';
import { forwardRef } from 'react';

var __assign = window && window.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = window && window.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var SvgDatatypeBoolean16Regular = function SvgDatatypeBoolean16Regular(_a, ref) {
  var title = _a.title,
    titleId = _a.titleId,
    props = __rest(_a, ["title", "titleId"]);
  return /*#__PURE__*/React.createElement("svg", __assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    role: "img",
    focusable: "false",
    ref: ref,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M10.98 1.614a.5.5 0 1 0-.959-.288L6.396 13.388a.5.5 0 1 0 .958.288zM3.504 4c-.935 0-1.597.438-1.996 1.13-.376.654-.504 1.508-.504 2.37 0 .864.128 1.718.504 2.372C1.907 10.564 2.57 11 3.504 11S5.1 10.564 5.5 9.87c.376-.653.504-1.507.504-2.37S5.876 5.783 5.5 5.13C5.1 4.437 4.439 4 3.504 4m-1.5 3.5c0-.793.122-1.44.37-1.871.227-.393.565-.628 1.13-.628s.903.235 1.13.628c.248.432.37 1.078.37 1.872 0 .793-.122 1.44-.37 1.872-.227.393-.565.628-1.13.628s-.903-.235-1.13-.628c-.248-.432-.37-1.079-.37-1.872Zm11.732-3.44A.5.5 0 0 1 14 4.5v6a.5.5 0 0 1-1 0V5.436l-.723.482a.5.5 0 0 1-.554-.832l1.5-1a.5.5 0 0 1 .513-.025Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatatypeBoolean16Regular);

export { ForwardRef as default };
