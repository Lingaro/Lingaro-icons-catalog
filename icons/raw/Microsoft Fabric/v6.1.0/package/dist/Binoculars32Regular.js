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
var SvgBinoculars32Regular = function SvgBinoculars32Regular(_a, ref) {
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
    d: "M18 23v-7h-4v7a6 6 0 1 1-11.884-1.185l3.018-15.21A4.476 4.476 0 0 1 9.524 3C12.005 3 14 5.037 14 7.5V10h4V7.5C18 5.014 20.017 3 22.502 3a4.505 4.505 0 0 1 4.421 3.64l2.963 15.178Q30 22.404 30 23a6 6 0 0 1-12 0m2-15.5v11.028A5.98 5.98 0 0 1 24 17c1.123 0 2.174.308 3.073.845L24.96 7.024A2.505 2.505 0 0 0 22.502 5 2.5 2.5 0 0 0 20 7.5M4 23a4 4 0 1 0 8 0 4 4 0 0 0-8 0m8-4.472V7.5C12 6.124 10.883 5 9.524 5a2.476 2.476 0 0 0-2.428 1.994l-2.151 10.84A5.97 5.97 0 0 1 8 17c1.537 0 2.938.578 4 1.528M20 23a4 4 0 1 0 8 0 4 4 0 0 0-8 0"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBinoculars32Regular);

export { ForwardRef as default };
