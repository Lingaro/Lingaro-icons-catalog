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
var SvgLibraryPerson20Filled = function SvgLibraryPerson20Filled(_a, ref) {
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
    clipPath: "url(#i67ad22-a)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3.5 2.001c-.829 0-1.5.67-1.5 1.498v6.903a2.997 2.997 0 0 1 3.999.938V3.5a1.5 1.5 0 0 0-1.5-1.498zm4.5 15.5q0 .193-.023.384.246.091.52.093h1c.829 0 1.5-.67 1.5-1.498V3.5c0-.827-.671-1.498-1.5-1.498h-1c-.827 0-1.499.67-1.499 1.498v12A2.5 2.5 0 0 1 8 17.502Zm7.718-11.343a1.5 1.5 0 0 0-1.87-1.106l-.745.21a1.5 1.5 0 0 0-1.06 1.742l2.003 9.799a1.5 1.5 0 0 0 1.839 1.151l.985-.25c.79-.2 1.274-.994 1.092-1.787zM5.5 13.001a2 2 0 1 1-4 0 2 2 0 0 1 4 0m1.5 4.5c0 1.245-1 2.5-3.5 2.5s-3.5-1.25-3.5-2.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "i67ad22-a"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0h20v20H0z"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgLibraryPerson20Filled);

export { ForwardRef as default };
