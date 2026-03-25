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
var SvgProgressCircle24Filled = function SvgProgressCircle24Filled(_a, ref) {
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
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m0-14.999a4.999 4.999 0 1 1 0 9.998.75.75 0 0 1 0-1.5 3.499 3.499 0 1 0 0-6.998.75.75 0 0 1 0-1.5m-3.295 8.76a5 5 0 0 1-1.346-1.903.75.75 0 0 1 1.392-.557c.204.51.53.97.942 1.33a.75.75 0 0 1-.988 1.13M7.97 11.38a.7.7 0 0 1-.233-.04.74.74 0 0 1-.475-.934l.007-.02.006-.018A4.94 4.94 0 0 1 8.5 8.428a.75.75 0 1 1 1.049 1.073c-.39.383-.679.84-.858 1.362a.77.77 0 0 1-.72.517Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgProgressCircle24Filled);

export { ForwardRef as default };
