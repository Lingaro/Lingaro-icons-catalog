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
var SvgDataFactory48Filled = function SvgDataFactory48Filled(_a, ref) {
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
    fillRule: "evenodd",
    d: "M14.225 6.3c-.12-.83.528-1.58 1.367-1.58H26.08c.729 0 1.367.48 1.587 1.18l.439 1.42a11.65 11.65 0 0 0 11.128 8.24h1.377a3.326 3.326 0 0 1 3.324 3.33v8.74h-5.1C26.48 27.63 16 18.55 14.225 6.3m1.478 11.03c3.733 5.877 9.629 10.22 16.455 11.962-.116.781-.693 1.378-1.388 1.378H5.41C4.63 30.67 4 29.92 4 29V19c0-.92.63-1.67 1.41-1.67zm1.878 15.84a24.5 24.5 0 0 0-3.367 9.267c-.12.82.52 1.56 1.348 1.56H26.08c.729 0 1.367-.48 1.587-1.18l.439-1.42a11.65 11.65 0 0 1 11.128-8.24h1.377a3.325 3.325 0 0 0 3.31-3.027h-5.09c-1.432 0-2.843-.114-4.224-.332-.3 1.622-1.645 3.372-3.838 3.372H17.58Z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataFactory48Filled);

export { ForwardRef as default };
