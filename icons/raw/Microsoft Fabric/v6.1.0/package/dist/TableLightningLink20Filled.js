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
var SvgTableLightningLink20Filled = function SvgTableLightningLink20Filled(_a, ref) {
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
    d: "M3.5 3a2.5 2.5 0 0 0 0 5H4a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 1 1 0-3H4a.5.5 0 0 0 0-1zM7 3a.5.5 0 0 0 0 1h.5a1.5 1.5 0 1 1 0 3H7a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 5.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M10.663 7H12V3H9.95A3.5 3.5 0 0 1 11 5.5c0 .537-.12 1.045-.337 1.5M8 12V8.965A3.5 3.5 0 0 0 9.95 8H12v4zm-5 0V8.965Q3.245 9 3.5 9H7v3zm14-5h-4V3h1.5A2.5 2.5 0 0 1 17 5.5zm-4 1v2.404l.2-.48A1.5 1.5 0 0 1 14.585 9H17V8zm-5 5h3.918l-.801 1.923A1.5 1.5 0 0 0 12 16.915V17H8zm-1 0H3v1.5A2.5 2.5 0 0 0 5.5 17H7zm7.252 3h-1.75a.5.5 0 0 1-.462-.692l2.084-5a.5.5 0 0 1 .461-.308h3.473a.5.5 0 0 1 .475.658L17.752 13h1.097a.75.75 0 0 1 .512 1.298l-4.873 4.548c-.364.34-.947-.004-.826-.487z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTableLightningLink20Filled);

export { ForwardRef as default };
