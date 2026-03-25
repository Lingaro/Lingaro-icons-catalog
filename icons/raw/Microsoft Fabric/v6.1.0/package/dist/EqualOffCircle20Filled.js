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
var SvgEqualOffCircle20Filled = function SvgEqualOffCircle20Filled(_a, ref) {
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
    d: "M18 10a8 8 0 1 0-16 0 8 8 0 0 0 16 0M6.156 6.156a.5.5 0 0 1 .707 0l7.004 7.004a.5.5 0 0 1-.707.707L11.293 12H6a.5.5 0 0 1 0-1h4.293l-2-2H6a.5.5 0 0 1 0-1h1.293L6.156 6.863a.5.5 0 0 1 0-.707m7.953 5.832L13.121 11H14a.5.5 0 0 1 .11.988ZM11.121 9l-1-1H14a.5.5 0 0 1 0 1z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgEqualOffCircle20Filled);

export { ForwardRef as default };
