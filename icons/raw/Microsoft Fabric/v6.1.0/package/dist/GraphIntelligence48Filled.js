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
var SvgGraphIntelligence48Filled = function SvgGraphIntelligence48Filled(_a, ref) {
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
    d: "M25.143 31.066c1.748-.11 3.359-.072 4.632.221.635.146 1.133.343 1.516.581 1.028 1.197 1.652 2.728 1.74 4.562.231 4.883-3.97 7.57-7.801 7.57-4.131 0-7.23-3.51-7.23-7.578 0-1.13-.063-2.156-.358-2.968-.212-.581-.53-1.025-1.066-1.313.94-.093 2.16-.285 3.435-.475 1.609-.24 3.397-.49 5.132-.6m-9.927-16.097c1.53 0 2.683.381 3.7.89.582.733 1.187 1.582 1.94 2.547 1.028 1.317 2.248 2.717 3.823 3.84a5 5 0 0 0-.987.407c-.955.531-1.557 1.357-1.557 2.72 0 .676.156 1.276.538 1.826.32.461.846.947 1.703 1.416-1.65.131-3.297.364-4.733.578-1.659.248-2.96.455-3.789.498l-.012.001c-4.833.3-6.796-.905-7.47-1.588A9.46 9.46 0 0 1 7 23.26c0-4.403 3.36-8.291 8.216-8.291M30.533 4C35.744 4 40 8.208 40 13.398c0 4.024-2.16 6.644-5.523 7.851q-.798.286-1.68.466-.782.159-1.623.234h-.014c-4.026-.217-6.345-2.533-8.333-5.08-.637-.818-1.293-1.732-1.947-2.556.121-.887.24-1.76.352-2.6a9 9 0 0 1 .192-.991 8.6 8.6 0 0 1 1.275-2.834 8.6 8.6 0 0 1 1.621-1.754 9 9 0 0 1 1.69-1.095 9.9 9.9 0 0 1 3.203-.958A11 11 0 0 1 30.533 4"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgGraphIntelligence48Filled);

export { ForwardRef as default };
