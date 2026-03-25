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
var SvgDatabaseGlobe20Filled = function SvgDatabaseGlobe20Filled(_a, ref) {
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
    d: "M15.99 15c-.047 1.128-.25 2.123-.54 2.85-.167.417-.354.722-.535.914-.18.19-.32.236-.415.236s-.235-.046-.415-.236c-.181-.192-.368-.497-.535-.914-.29-.727-.494-1.722-.54-2.85zm-3.98 0c.047 1.234.266 2.36.611 3.222q.096.24.208.458A4.5 4.5 0 0 1 10.027 15zm6.963 0a4.5 4.5 0 0 1-2.803 3.68q.112-.218.208-.458c.345-.862.565-1.988.612-3.222z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 9.208A5.503 5.503 0 0 0 9 14.5c0 1.328.47 2.546 1.254 3.496q-.126.003-.254.004c-3.314 0-6-1.343-6-3V7.12c.383.362.841.66 1.31.896C6.563 8.64 8.223 9 10 9s3.438-.359 4.69-.984A5.5 5.5 0 0 0 16 7.12z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.83 10.32a5 5 0 0 0-.209.458c-.345.862-.564 1.988-.611 3.222h-1.983a4.5 4.5 0 0 1 2.802-3.68ZM14.5 10c.094 0 .235.046.415.236.181.192.368.497.535.914.29.727.493 1.722.54 2.85h-2.98c.046-1.128.25-2.123.54-2.85.167-.417.354-.722.535-.914.18-.19.32-.236.415-.236m1.67.32A4.5 4.5 0 0 1 18.973 14H16.99c-.047-1.234-.267-2.36-.612-3.222a5 5 0 0 0-.208-.458M10 2c3.314 0 6 1.343 6 3s-2.686 3-6 3-6-1.343-6-3 2.686-3 6-3"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabaseGlobe20Filled);

export { ForwardRef as default };
