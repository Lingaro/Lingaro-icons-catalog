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
var SvgBinoculars20Filled = function SvgBinoculars20Filled(_a, ref) {
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
    d: "M2.07 12.86h-.01l1.81-7.87A2.615 2.615 0 0 1 6.4 3 2.6 2.6 0 0 1 9 5.45V7h2V5.45A2.614 2.614 0 0 1 13.6 3c1.23 0 2.26.85 2.53 1.99l1.81 7.87h-.01c.04.23.07.46.07.69v.01c0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5V10H9v3.56c0 1.93-1.57 3.5-3.5 3.5a3.504 3.504 0 0 1-3.43-4.19zm5.93.69a2.5 2.5 0 0 0-5 0 2.5 2.5 0 0 0 5 0m9 .01a2.5 2.5 0 0 0-5 0 2.5 2.5 0 0 0 5 0"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBinoculars20Filled);

export { ForwardRef as default };
