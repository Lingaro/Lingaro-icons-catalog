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
var SvgDatatypeFloat20Filled = function SvgDatatypeFloat20Filled(_a, ref) {
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
    d: "M9.498 8.062a.75.75 0 0 1-1.496-.11c-.024.35 0 0 0-.003v-.006l.001-.01a1 1 0 0 1 .013-.108 2.5 2.5 0 0 1 .374-.983c.378-.582 1.074-1.091 2.21-1.091.92 0 1.718.314 2.215.995.481.659.573 1.515.424 2.382a2.27 2.27 0 0 1-1.09 1.618c-.347.215-.78.372-1.123.497l-.27.1c-.417.163-.7.32-.896.557-.107.13-.213.316-.282.601H12.5a.75.75 0 0 1 0 1.5H8.75a.75.75 0 0 1-.75-.75c0-1 .243-1.749.704-2.307.448-.541 1.031-.812 1.505-.998q.24-.092.43-.16c.296-.109.515-.189.72-.315a.78.78 0 0 0 .402-.597c.109-.633 0-1.027-.157-1.243-.142-.194-.424-.38-1.004-.38-.614 0-.843.24-.952.409a1 1 0 0 0-.15.402M6.5 14.001a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M5 6.751a.75.75 0 0 0-1.385-.398l-.048.075c-.214.342-.36.575-.575.812-.225.247-.547.52-1.128.868a.75.75 0 0 0 .772 1.286c.34-.204.623-.397.864-.588v4.445a.75.75 0 0 0 1.5 0zm10.75-1a.75.75 0 0 0-.75.75v6.75a.75.75 0 1 0 1.5 0v-3h1.25a.75.75 0 1 0 0-1.5H16.5v-1.5h2.25a.75.75 0 1 0 0-1.5z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatatypeFloat20Filled);

export { ForwardRef as default };
