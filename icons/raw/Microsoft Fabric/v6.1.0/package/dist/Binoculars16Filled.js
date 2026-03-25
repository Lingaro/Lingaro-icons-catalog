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
var SvgBinoculars16Filled = function SvgBinoculars16Filled(_a, ref) {
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
    d: "m1.203 9.872.008-.038L2.86 3.56a2.11 2.11 0 0 1 4.139.493H7v1.915h1.984V4.053h.002a2.11 2.11 0 0 1 4.138-.492l1.649 6.273.008.038A3.008 3.008 0 1 1 8.985 11V7.969H7V11a3.008 3.008 0 1 1-5.797-1.128M6 11a2.008 2.008 0 1 0-4.016 0A2.008 2.008 0 0 0 6 11m5.992-2.008a2.008 2.008 0 1 0 0 4.016 2.008 2.008 0 0 0 0-4.016"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBinoculars16Filled);

export { ForwardRef as default };
