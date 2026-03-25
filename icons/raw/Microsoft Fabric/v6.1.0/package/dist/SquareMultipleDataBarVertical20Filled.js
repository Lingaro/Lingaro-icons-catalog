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
var SvgSquareMultipleDataBarVertical20Filled = function SvgSquareMultipleDataBarVertical20Filled(_a, ref) {
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
    d: "M3.998 4.524a2.5 2.5 0 0 1 2.493-2.507L12.521 2a2.5 2.5 0 0 1 2.506 2.493l.001.508-5.538.016a2.5 2.5 0 0 0-2.493 2.506l.001.486-2.506.007q-.25 0-.484.048z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m13.998 13.985 1.5-.004a1.5 1.5 0 0 0 .5-.087v-2.41a1.5 1.5 0 0 1 .99-1.41l-.008-2.578A1.5 1.5 0 0 0 15.476 6l-5.983.017A1.5 1.5 0 0 0 7.997 7.52l.001.485L10.475 8a2.5 2.5 0 0 1 2.507 2.493l.004 1.573a1.5 1.5 0 0 1 1.012 1.419z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m11.983 10.495.004 1.49h-.489a1.5 1.5 0 0 0-1.5 1.5v3.497l-5.48.015a1.5 1.5 0 0 1-1.504-1.496L3 10.521a1.5 1.5 0 0 1 1.496-1.505L10.479 9a1.5 1.5 0 0 1 1.504 1.495m5.015.99a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.498 12.985a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5zm3 2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSquareMultipleDataBarVertical20Filled);

export { ForwardRef as default };
