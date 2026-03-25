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
var SvgProgressCircle12Filled = function SvgProgressCircle12Filled(_a, ref) {
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
    d: "M11 6A5 5 0 1 1 1 6a5 5 0 0 1 10 0M5.646 8.854A.5.5 0 0 0 6 9a3 3 0 1 0 0-6 .5.5 0 1 0 0 1 2 2 0 1 1 0 4 .5.5 0 0 0-.354.854M4.06 8.288a.5.5 0 0 0 .323.12l.002-.005a.5.5 0 0 0 .324-.88 2 2 0 0 1-.509-.659.5.5 0 1 0-.9.436c.182.379.441.715.76.988m-.377-2.73a.5.5 0 0 0 .468-.312 2 2 0 0 1 .467-.686.5.5 0 0 0-.693-.722c-.303.29-.542.642-.7 1.031a.5.5 0 0 0 .458.688Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgProgressCircle12Filled);

export { ForwardRef as default };
