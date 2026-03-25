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
var SvgSquareGlobeArrowUpDown20Regular = function SvgSquareGlobeArrowUpDown20Regular(_a, ref) {
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
    d: "M6 17h3.007a1.48 1.48 0 0 1 .26-1H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6.091a1.4 1.4 0 0 1 .541-.09q.237.006.459.084V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m13.439 16.5-.793.793V13.5a.5.5 0 0 0-1 0v3.793l-.792-.793a.5.5 0 0 0-.709.707l1.647 1.647a.504.504 0 0 0 .708 0l1.646-1.647a.503.503 0 0 0-.006-.701.5.5 0 0 0-.701-.006m3.415-3.354 1.646 1.647a.5.5 0 0 1-.707.707L17 14.707V18.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5v-3.793l-.793.793a.5.5 0 0 1-.707-.707l1.646-1.647a.5.5 0 0 1 .354-.147.5.5 0 0 1 .354.147M8.51 9.5c.047-1.128.25-2.123.54-2.85.167-.417.353-.722.535-.914.18-.19.32-.236.415-.236s.235.046.415.236c.182.192.368.497.535.914.29.727.493 1.722.54 2.85zm-.389-3.221q.096-.24.208-.459A4.5 4.5 0 0 0 5.527 9.5H7.51c.047-1.234.268-2.36.612-3.221Zm3.549-.459q.112.218.208.459c.345.862.565 1.987.612 3.221h1.982a4.5 4.5 0 0 0-2.802-3.68m.82 4.68h1.982a4.5 4.5 0 0 1-.979 2.337 1.49 1.49 0 0 0-1.155-.824c.08-.476.132-.985.152-1.513m-1.222 1.784a1.5 1.5 0 0 0-.621 1.217v.457a2 2 0 0 1-.232.306c-.18.19-.32.236-.415.236s-.235-.046-.415-.236c-.182-.192-.368-.497-.535-.914-.29-.727-.493-1.722-.54-2.85h2.98c-.027.647-.105 1.25-.222 1.784M5.527 10.5a4.5 4.5 0 0 0 2.802 3.68 5 5 0 0 1-.208-.459c-.344-.862-.565-1.987-.612-3.221z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSquareGlobeArrowUpDown20Regular);

export { ForwardRef as default };
