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
var SvgPulseSquarePerson32Regular = function SvgPulseSquarePerson32Regular(_a, ref) {
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
    d: "M25.04 4.041a3 3 0 0 1 3 3v8.989a5 5 0 0 0-2-.922V7.041a1 1 0 0 0-1-1h-18a1 1 0 0 0-1 1v18.003a1 1 0 0 0 1 1h10.714a3.9 3.9 0 0 0-.255 1.393q0 .305.037.607H7.04a3 3 0 0 1-3-3V7.041a3 3 0 0 1 3-3h17.998Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m23.041 15.375.053.001a5.01 5.01 0 0 0-3.037 3.866l-1.122 2.24c-.363.727-1.373.728-1.758.058l-.064-.133-3.115-7.78-1.38 3.15a1 1 0 0 1-.77.587l-.147.01h-2.66a1 1 0 0 1-.136-1.99l.136-.01h2.007l2.075-4.734c.335-.764 1.381-.793 1.778-.107l.067.137 3.175 7.929 1.337-2.672a1 1 0 0 1 .754-.542l.14-.01zM28.5 20a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m2.5 7.438c0 2.023-1.714 4.062-6 4.062s-6-2.031-6-4.063C19 26.102 20.082 25 21.417 25h7.166C29.918 25 31 26.102 31 27.438"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgPulseSquarePerson32Regular);

export { ForwardRef as default };
