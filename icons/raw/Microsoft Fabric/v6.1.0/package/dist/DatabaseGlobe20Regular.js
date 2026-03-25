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
var SvgDatabaseGlobe20Regular = function SvgDatabaseGlobe20Regular(_a, ref) {
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
    d: "M10 2c1.573 0 3.022.29 4.096.777C15.125 3.245 16 3.993 16 5v4.208a5.5 5.5 0 0 0-1-.185V6.698c-.271.203-.58.377-.904.525C13.022 7.71 11.573 8 10 8s-3.022-.29-4.096-.777A5 5 0 0 1 5 6.698V15c0 .374.356.875 1.317 1.313.832.377 1.98.633 3.279.677q.274.54.656 1.003c-.084.002-.168.007-.252.007-1.573 0-3.022-.29-4.096-.777C4.875 16.755 4 16.007 4 15V5c0-1.007.875-1.755 1.904-2.223C6.978 2.29 8.427 2 10 2m0 1c-1.464 0-2.766.27-3.683.688C5.356 4.125 5 4.625 5 5c0 .374.356.875 1.317 1.313C7.234 6.729 8.536 7 10 7s2.766-.27 3.683-.688C14.644 5.875 15 5.375 15 5c0-.374-.356-.875-1.317-1.313C12.766 3.272 11.464 3 10 3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.83 10.32a5 5 0 0 0-.209.458c-.345.862-.564 1.988-.611 3.222h-1.983a4.5 4.5 0 0 1 2.802-3.68ZM14.5 10c.094 0 .235.046.415.236.181.192.368.497.535.914.29.727.493 1.722.54 2.85h-2.98c.046-1.128.25-2.123.54-2.85.167-.417.354-.722.535-.914.18-.19.32-.236.415-.236m1.67.32A4.5 4.5 0 0 1 18.973 14H16.99c-.047-1.234-.267-2.36-.612-3.222a5 5 0 0 0-.208-.458"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabaseGlobe20Regular);

export { ForwardRef as default };
