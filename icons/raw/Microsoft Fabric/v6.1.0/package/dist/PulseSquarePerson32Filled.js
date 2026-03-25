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
var SvgPulseSquarePerson32Filled = function SvgPulseSquarePerson32Filled(_a, ref) {
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
    d: "M27.057 7.041a3 3 0 0 0-3-3H6.059a3 3 0 0 0-3 3v18.003a3 3 0 0 0 3 3h10.495a5 5 0 0 1-.036-.607c0-2.147 1.737-3.937 3.917-3.937h.012a4.98 4.98 0 0 1-1.372-4.258l-1.122 2.24c-.364.727-1.373.728-1.758.058l-.065-.133-3.115-7.78-1.38 3.15a1 1 0 0 1-.77.587l-.146.011h-2.66a1 1 0 0 1-.136-1.99l.136-.01h2.006l2.076-4.735c.335-.764 1.381-.793 1.778-.107l.066.137 3.175 7.929 1.338-2.672a1 1 0 0 1 .754-.542l.14-.01h2.667l.052.001A5 5 0 0 1 24.018 15c1.143 0 2.197.384 3.039 1.03V7.04Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M27.518 20a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m2.5 7.438c0 2.023-1.715 4.062-6 4.062s-6-2.031-6-4.063c0-1.335 1.082-2.437 2.417-2.437H27.6c1.335 0 2.418 1.102 2.418 2.438"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgPulseSquarePerson32Filled);

export { ForwardRef as default };
