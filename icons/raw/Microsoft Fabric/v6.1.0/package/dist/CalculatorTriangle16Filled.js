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
var SvgCalculatorTriangle16Filled = function SvgCalculatorTriangle16Filled(_a, ref) {
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
    d: "M11.5 1h-7A2.5 2.5 0 0 0 2 3.5v9A2.5 2.5 0 0 0 4.5 15h1.6a1.5 1.5 0 0 1 .199-.655l.964-1.669a1 1 0 0 1 .955-1.652l1.996-3.456.018-.026a1.52 1.52 0 0 1 2.531 0l.018.026L14 9.678V3.5A2.5 2.5 0 0 0 11.5 1m-6 2h5A1.5 1.5 0 0 1 12 4.5v1A1.5 1.5 0 0 1 10.5 7h-5A1.5 1.5 0 0 1 4 5.5v-1A1.5 1.5 0 0 1 5.5 3M6 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.83 14.845h.004a.5.5 0 0 1-.433.75H7.6a.5.5 0 0 1-.436-.75l3.9-6.75a.52.52 0 0 1 .866 0z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgCalculatorTriangle16Filled);

export { ForwardRef as default };
