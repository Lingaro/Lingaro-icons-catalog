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
var SvgTableMultipleArrowCurvedRight20Filled = function SvgTableMultipleArrowCurvedRight20Filled(_a, ref) {
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
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#i8761d2-a)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6.5 17A3.5 3.5 0 0 1 3 13.5V9.965a2.5 2.5 0 0 1-1 0V13.5A4.5 4.5 0 0 0 6.5 18h5a4.48 4.48 0 0 0 2.828-1zM9 4.536l.268-.268A2.5 2.5 0 0 0 9.949 2H13v4H9z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.267 9.284A2.5 2.5 0 0 1 4 9.516V11h4V7H5v.516a2.5 2.5 0 0 1-.733 1.768M14 16h1.5a2.5 2.5 0 0 0 2.5-2.5V12h-4zm0-5V7h4v4zm-1 0H9V7h4zm-4 1h4v4H9zm-1 0H4v1.5A2.5 2.5 0 0 0 6.5 16H8zm10-6h-4V2h1.5A2.5 2.5 0 0 1 18 4.5zM5.5 0a.5.5 0 0 1 .354.146l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 1 1-.708-.708l1.14-1.14A3.5 3.5 0 0 0 3 6.5v1.016a.5.5 0 1 1-1 0V6.5A4.5 4.5 0 0 1 6.3 2L5.146.854A.5.5 0 0 1 5.5 0"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "i8761d2-a"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0h20v20H0z"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTableMultipleArrowCurvedRight20Filled);

export { ForwardRef as default };
