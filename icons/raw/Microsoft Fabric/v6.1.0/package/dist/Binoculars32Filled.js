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
var SvgBinoculars32Filled = function SvgBinoculars32Filled(_a, ref) {
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
    d: "M18 23v-7h-4v7a6 6 0 0 1-12 0v-.598L5.134 6.605A4.476 4.476 0 0 1 9.524 3C12.005 3 14 5.037 14 7.5V10h4V7.5C18 5.014 20.017 3 22.502 3a4.505 4.505 0 0 1 4.421 3.64L30 22.403V23a6 6 0 0 1-12 0M4 23a4 4 0 1 0 8 0 4 4 0 0 0-8 0m16 0a4 4 0 1 0 8 0 4 4 0 0 0-8 0"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBinoculars32Filled);

export { ForwardRef as default };
