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
var SvgTableExternal20Regular = function SvgTableExternal20Regular(_a, ref) {
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
    d: "M18.5 1h-2.828a.5.5 0 1 0 0 1h1.621L12 7.293a.5.5 0 1 0 .707.707L18 2.707v1.621a.5.5 0 1 0 1 0V1.5a.5.5 0 0 0-.144-.351l-.002-.003-.002-.002A.5.5 0 0 0 18.503 1z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M14.854 3.025A3 3 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9q0-.18-.025-.354L16 6.121V12h-3V9c-.313.15-.668.185-1 .104V12H8V8h2.896A1.5 1.5 0 0 1 11 7H8V4h5.879zM4 13v1.5a1.5 1.5 0 0 0 1.356 1.493L5.5 16H7v-3zm4 3h4v-3H8zm5 0h1.5a1.5 1.5 0 0 0 1.493-1.355L16 14.5V13h-3zM4 5.5V7h3V4H5.5a1.5 1.5 0 0 0-1.493 1.356zM7 12V8H4v4z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTableExternal20Regular);

export { ForwardRef as default };
