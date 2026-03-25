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
var SvgStreamSettings24Filled = function SvgStreamSettings24Filled(_a, ref) {
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
    d: "M9 11a7 7 0 0 1 7-7h1.5a1 1 0 1 0 0-2H16a9 9 0 0 0-9 9 1 1 0 0 1-1 1H3a1 1 0 1 0 0 2h3a3 3 0 0 0 3-3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 8a4 4 0 0 0-4 4q0 .444-.063.87a6.5 6.5 0 0 0-1.842 3.515A5.98 5.98 0 0 1 7 18H3a1 1 0 1 1 0-2h4a4 4 0 0 0 4-4 6 6 0 0 1 6-6h4a1 1 0 1 1 0 2zm-5.772 11.213A7 7 0 0 1 8 20H6a1 1 0 1 0 0 2h2a8.96 8.96 0 0 0 4.048-.96 6.5 6.5 0 0 1-.82-1.827"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 11a6.47 6.47 0 0 1 3.466 1H21a1 1 0 1 0 0-2h-3a3 3 0 0 0-2.476 1.306A6.5 6.5 0 0 1 17.5 11m-3.223 2.976a2 2 0 0 1-1.441 2.496l-.584.145a5.7 5.7 0 0 0 .006 1.807l.54.13a2 2 0 0 1 1.45 2.51l-.187.631c.44.386.94.7 1.485.922l.493-.519a2 2 0 0 1 2.899 0l.499.526a5.3 5.3 0 0 0 1.482-.913l-.198-.686a2 2 0 0 1 1.442-2.496l.583-.145a5.7 5.7 0 0 0-.006-1.807l-.54-.13a2 2 0 0 1-1.449-2.51l.186-.631a5.3 5.3 0 0 0-1.484-.922l-.493.518a2 2 0 0 1-2.9 0l-.498-.525c-.544.22-1.044.53-1.483.913zM17.5 19c-.8 0-1.45-.671-1.45-1.5 0-.828.65-1.5 1.45-1.5s1.45.672 1.45 1.5c0 .829-.65 1.5-1.45 1.5"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgStreamSettings24Filled);

export { ForwardRef as default };
