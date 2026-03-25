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
var SvgDataWarehouse28Filled = function SvgDataWarehouse28Filled(_a, ref) {
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
    d: "M14.514 2.904c2.314 1.428 9.72 5.998 11.014 6.799a.99.99 0 0 1 .468.845v11.68c0 .502-.022.924-.064 1.279a2.25 2.25 0 0 1-4.432-.538h-.003v-7.725c0-.902-.476-1.7-1.207-2.139l-7.968-4.92a2.5 2.5 0 0 0-2.637-.006l-7.68 4.742v-2.367c0-.36.193-.677.475-.851 2.363-1.456 8.2-5.056 10.99-6.78a1 1 0 0 1 1.044-.019M2.006 15.136v2.48l4.68-2.89a2.5 2.5 0 0 1 2.637.007l1.637 1.011c.963.595 2.208 1.363 3.34 2.06a2.5 2.5 0 0 1 1.198 2.13v3.794c0 .823.67 1.495 1.5 1.495v.006h3.76a3.73 3.73 0 0 1-.758-2.26l-.003-7.725a.99.99 0 0 0-.486-.857l-7.984-4.93a1 1 0 0 0-1.056 0l-7.985 4.93c-.26.156-.445.43-.48.748Zm12.392 10.087a3 3 0 0 1-.4-1.495v-3.794a.99.99 0 0 0-.48-.85 3756 3756 0 0 1-4.991-3.08 1 1 0 0 0-1.056 0L2.474 19.09c-.253.162-.434.43-.468.743v2.402c0 .822.332 1.567.87 2.108l.002.002A3 3 0 0 0 5 25.223l9.402.006z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataWarehouse28Filled);

export { ForwardRef as default };
