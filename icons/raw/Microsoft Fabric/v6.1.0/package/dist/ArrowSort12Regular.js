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
var SvgArrowSort12Regular = function SvgArrowSort12Regular(_a, ref) {
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
    d: "M5.146 3.854a.5.5 0 1 0 .707-.708L3.89 1.183a.5.5 0 0 0-.707 0L1.121 3.246a.5.5 0 1 0 .707.707L3 2.78v7.72a.5.5 0 0 0 1 0V2.75l-.002-.045zM3.545 2.252l-.008-.008-.008.007zm4.929-1.215a.5.5 0 0 1 .5.5v7.72l1.172-1.173a.5.5 0 1 1 .708.707L8.79 10.854a.5.5 0 0 1-.707 0L6.121 8.89a.5.5 0 0 1 .707-.707l1.148 1.148-.002-.044v-7.75a.5.5 0 0 1 .5-.5M8.43 9.785l.009.008.007-.007z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgArrowSort12Regular);

export { ForwardRef as default };
