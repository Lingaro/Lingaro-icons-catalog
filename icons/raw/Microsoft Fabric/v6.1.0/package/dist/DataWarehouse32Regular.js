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
var SvgDataWarehouse32Regular = function SvgDataWarehouse32Regular(_a, ref) {
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
    d: "M25.4 27.098h.102v.002A2.5 2.5 0 0 0 28 24.602V12.44l-7.07-4.364-.012-.008-.009-.005L16.01 5.04a11879 11879 0 0 1-12.003 7.406v3.119l7.877-4.863a1.17 1.17 0 0 1 1.232 0l9.317 5.752c.343.203.567.573.567 1v7.148h.004a2.5 2.5 0 0 0 2.396 2.496m-3.64 0a4.48 4.48 0 0 1-.756-2.496H21V17.92l-8.5-5.248-8.493 5.244v3.127l4.377-2.702a1.17 1.17 0 0 1 1.232 0s3.178 1.964 5.824 3.593c.336.202.56.573.56.992v2.677c0 .535.12 1.041.336 1.495h5.423ZM30 24.602V11.974c0-.42-.217-.783-.546-.986l-7.488-4.622-5.364-3.31a1.15 1.15 0 0 0-.595-.161c-.231 0-.441.07-.623.181A11179 11179 0 0 1 2.56 10.988a1.17 1.17 0 0 0-.553.993L2 25.603a3.49 3.49 0 0 0 1.002 2.447 3.5 3.5 0 0 0 2.505 1.055h19.995V29.1A4.5 4.5 0 0 0 30 24.602M5.5 27.098a1.49 1.49 0 0 1-1.493-1.488v-2.216L9 20.31l5 3.085v2.207c0 .518.072 1.02.206 1.495z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataWarehouse32Regular);

export { ForwardRef as default };
