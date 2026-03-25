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
var SvgSquareMultipleOverlapEye20Filled = function SvgSquareMultipleOverlapEye20Filled(_a, ref) {
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
    d: "M6 4v.5h1.5V4a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v7.355c.56.207 1.06.49 1.493.816Q18 12.087 18 12V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 11.021V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6.114a5 5 0 0 1-.92-1.5H4a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v3.357c.46-.171.962-.29 1.5-.336"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 15.5c0-1.182 1.736-3.5 4.5-3.5 2.761 0 4.5 2.3 4.5 3.5 0 1.182-1.739 3.5-4.5 3.5S10 16.7 10 15.5m3.111 2.079a2.5 2.5 0 1 0 2.778-4.157 2.5 2.5 0 0 0-2.778 4.157m2.636-1.246a1.5 1.5 0 1 0-2.495-1.667 1.5 1.5 0 0 0 2.495 1.667"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSquareMultipleOverlapEye20Filled);

export { ForwardRef as default };
