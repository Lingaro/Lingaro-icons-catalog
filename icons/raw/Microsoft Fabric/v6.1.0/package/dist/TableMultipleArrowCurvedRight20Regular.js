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
var SvgTableMultipleArrowCurvedRight20Regular = function SvgTableMultipleArrowCurvedRight20Regular(_a, ref) {
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
    clipPath: "url(#idfe9c7-a)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 13.5A3.5 3.5 0 0 0 6.5 17h7.828c-.773.625-1.757 1-2.829 1h-5A4.5 4.5 0 0 1 2 13.5V9.965a2.5 2.5 0 0 0 1 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 13.5V9.516a2.5 2.5 0 0 0 1-1.993V11h3V7H5.716v-.009a2.5 2.5 0 0 0 1.552-.723L7.536 6H8v-.464l1-1V6h4V3H9.95a2.5 2.5 0 0 0 0-1h5.55A2.5 2.5 0 0 1 18 4.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 4 13.5M17 6V4.5a1.5 1.5 0 0 0-1.357-1.493L15.5 3H14v3zM9 7v4h4V7zm0 8h4v-3H9zm-2.5 0H8v-3H5v1.5a1.5 1.5 0 0 0 1.356 1.493zm7.5-3v3h1.5a1.5 1.5 0 0 0 1.492-1.356L17 13.5V12zm0-5v4h3V7zM5.854.146a.5.5 0 0 0-.708.708L6.3 2A4.5 4.5 0 0 0 2 6.5v1.016a.5.5 0 0 0 1 0V6.5a3.5 3.5 0 0 1 3.286-3.494l-1.14 1.14a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "idfe9c7-a"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0h20v20H0z"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTableMultipleArrowCurvedRight20Regular);

export { ForwardRef as default };
