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
var SvgAirplane12Filled = function SvgAirplane12Filled(_a, ref) {
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
    d: "M5.292 1.749A.75.75 0 0 1 6 .75a.75.75 0 0 1 .708.503l1.616 3.354.944-.09a2 2 0 0 1 .18-.016l.009-.001H9.5a1.5 1.5 0 1 1-.043 3h-.01a2 2 0 0 1-.179-.018l-.944-.089-1.616 3.354a.75.75 0 1 1-1.416-.496l.502-3.096-1.526-.144-1.26 1.74c-.341.47-1.086.23-1.086-.352v-1.61L1.5 6.75v-.001a.75.75 0 0 1 0-1.5h.014l.408-.039V3.601c0-.581.745-.823 1.086-.352l1.26 1.74 1.526-.144z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgAirplane12Filled);

export { ForwardRef as default };
