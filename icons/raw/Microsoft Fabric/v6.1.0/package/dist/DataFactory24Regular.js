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
var SvgDataFactory24Regular = function SvgDataFactory24Regular(_a, ref) {
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
    d: "M20.33 7.42c.92 0 1.665.745 1.665 1.665v.019L22 9.08v5.835l-.001.06a1.664 1.664 0 0 1-1.664 1.605h-.69q-.45 0-.885.067l-.018.003a6 6 0 0 0-.776.177l-.017.005a5.84 5.84 0 0 0-3.877 3.868l-.22.71c-.11.35-.43.59-.795.59H7.79a.683.683 0 0 1-.675-.78 12.2 12.2 0 0 1 2.569-5.885H2.835A.836.836 0 0 1 2 14.5v-5c0-.46.375-.835.835-.835H9.62A12.4 12.4 0 0 1 7.114 2.79.693.693 0 0 1 7.798 2h5.254c.365 0 .685.24.795.59l.22.71a5.83 5.83 0 0 0 5.573 4.12zm-9.325 2.745H3.5v3.67h13.666v-.588a12.44 12.44 0 0 1-6.161-3.082m9.49-1.08v2.87H19.44c-5.126 0-9.52-3.542-10.667-8.455h3.785l.075.242v.001A7.33 7.33 0 0 0 19.64 8.92h.69c.091 0 .165.073.165.165",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataFactory24Regular);

export { ForwardRef as default };
