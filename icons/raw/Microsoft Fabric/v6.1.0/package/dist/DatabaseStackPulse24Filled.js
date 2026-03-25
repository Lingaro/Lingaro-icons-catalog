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
var SvgDatabaseStackPulse24Filled = function SvgDatabaseStackPulse24Filled(_a, ref) {
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
    d: "M20 6c0 2.21-3.582 4-8 4S4 8.21 4 6s3.582-4 8-4 8 1.79 8 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 9.053a7.6 7.6 0 0 1-1.672 1.117c-1.697.848-3.936 1.33-6.328 1.33s-4.63-.482-6.328-1.33A7.6 7.6 0 0 1 4 9.053v3.81c.188.562.817 1.21 2.079 1.783 1.316.597 3.121 1.007 5.163 1.089A6.503 6.503 0 0 1 20 11.498zM11 17.5q0-.138.006-.274c-2.127-.105-4.063-.54-5.547-1.215A7.8 7.8 0 0 1 4 15.163V18c0 2.21 3.582 4 8 4q.4 0 .791-.02A6.48 6.48 0 0 1 11 17.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-6.985-3a.5.5 0 0 1 .46.342l1.053 3.16 1.004-2.678a.5.5 0 0 1 .915-.048L20.31 17H21a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.447-.276l-.487-.975-1.098 2.927a.5.5 0 0 1-.942-.018l-1.069-3.205-.493 1.233A.5.5 0 0 1 15 18h-1a.5.5 0 0 1 0-1h.662l.874-2.186a.5.5 0 0 1 .479-.314"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabaseStackPulse24Filled);

export { ForwardRef as default };
