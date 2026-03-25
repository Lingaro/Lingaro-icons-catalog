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
var SvgHexagonThreeRotated20Filled = function SvgHexagonThreeRotated20Filled(_a, ref) {
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
    d: "M1.8 15.465c0 .447.24.86.626 1.083l2.75 1.586a1.25 1.25 0 0 0 1.25 0l2.75-1.586a1.25 1.25 0 0 0 .625-1.083v-3.17c0-.447-.239-.86-.626-1.083l-2.75-1.585a1.25 1.25 0 0 0-1.249 0l-2.75 1.585a1.25 1.25 0 0 0-.625 1.083v3.17Zm5.126-6.678a1.25 1.25 0 0 1-.625-1.083v-3.17c0-.446.238-.86.625-1.082l2.75-1.586a1.25 1.25 0 0 1 1.25 0l2.75 1.586c.386.223.625.636.625 1.082v3.17c0 .447-.239.86-.626 1.083l-2.75 1.586a1.25 1.25 0 0 1-1.249 0zm3.874 6.678c0 .447.24.86.626 1.083l2.75 1.586a1.25 1.25 0 0 0 1.25 0l2.75-1.586a1.25 1.25 0 0 0 .625-1.083v-3.17c0-.447-.239-.86-.626-1.083l-2.75-1.585a1.25 1.25 0 0 0-1.249 0l-2.75 1.585a1.25 1.25 0 0 0-.625 1.083z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgHexagonThreeRotated20Filled);

export { ForwardRef as default };
