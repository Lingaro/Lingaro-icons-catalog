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
var SvgSquareArrowUpDown28Filled = function SvgSquareArrowUpDown28Filled(_a, ref) {
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
    d: "M3 6.75A3.75 3.75 0 0 1 6.75 3h14.5A3.75 3.75 0 0 1 25 6.75v9.806a2.3 2.3 0 0 0-.514-.056c-.6 0-1.164.234-1.59.659l-2.146 2.147v-.556c0-1.24-1.01-2.25-2.25-2.25s-2.25 1.01-2.25 2.25v3.016c-.6.001-1.163.235-1.587.659A2.248 2.248 0 0 0 14.229 25H6.75A3.75 3.75 0 0 1 3 21.25z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.958 26.78a.75.75 0 0 0 .537.22.75.75 0 0 0 .537-.22l2.234-2.234a.75.75 0 1 0-1.061-1.061l-.955.955v-5.69a.75.75 0 0 0-1.5 0v5.701l-.966-.966a.75.75 0 1 0-1.061 1.061zm7.281-6.231.966.966a.749.749 0 1 0 1.06-1.061L25.03 18.22a.75.75 0 0 0-.537-.22.75.75 0 0 0-.537.22l-2.234 2.234a.75.75 0 1 0 1.06 1.061l.956-.955v5.69a.75.75 0 0 0 1.5 0v-5.701Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSquareArrowUpDown28Filled);

export { ForwardRef as default };
