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
var SvgLibraryGlobe20Filled = function SvgLibraryGlobe20Filled(_a, ref) {
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
    d: "M3.5 2.001c-.829 0-1.5.67-1.5 1.498v6.76a5.48 5.48 0 0 1 3.999-1.236V3.5a1.5 1.5 0 0 0-1.5-1.498zm7.497 12.318V3.499c0-.827-.671-1.498-1.5-1.498h-1c-.827 0-1.499.67-1.499 1.498v5.709a5.5 5.5 0 0 1 3.999 5.11Zm4.721-8.161a1.5 1.5 0 0 0-1.87-1.106l-.745.21a1.5 1.5 0 0 0-1.06 1.742l2.003 9.799a1.5 1.5 0 0 0 1.839 1.151l.985-.25c.79-.2 1.274-.994 1.092-1.787l-2.244-9.76ZM4.55 11.151c-.29.727-.493 1.722-.54 2.85h2.98c-.047-1.128-.25-2.123-.54-2.85-.167-.417-.354-.722-.535-.913-.18-.191-.32-.237-.415-.237s-.235.046-.415.237c-.182.191-.368.496-.535.913m-.72-.83a5 5 0 0 0-.209.459c-.344.862-.565 1.987-.612 3.221H1.027a4.5 4.5 0 0 1 2.802-3.68Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.17 10.321q.112.218.208.459c.345.862.565 1.987.612 3.221h1.982a4.5 4.5 0 0 0-2.802-3.68m2.802 4.68H7.99c-.047 1.234-.267 2.36-.612 3.221a5 5 0 0 1-.208.459A4.5 4.5 0 0 0 9.972 15Zm-4.472 4c.094 0 .235-.046.415-.236.181-.192.368-.497.535-.914.29-.727.493-1.722.54-2.85H4.01c.047 1.128.25 2.123.54 2.85.167.417.353.722.535.914.18.19.32.236.415.236m-1.67-.321a4.5 4.5 0 0 1-2.803-3.679H3.01c.047 1.234.268 2.36.612 3.221a5 5 0 0 0 .208.459Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgLibraryGlobe20Filled);

export { ForwardRef as default };
