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
var SvgCalculatorTriangle16Regular = function SvgCalculatorTriangle16Regular(_a, ref) {
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
    d: "M13 7.947V3.5A1.5 1.5 0 0 0 11.5 2h-7A1.5 1.5 0 0 0 3 3.5v9A1.5 1.5 0 0 0 4.5 14h1.998l-.2.345a1.5 1.5 0 0 0-.197.655H4.5A2.5 2.5 0 0 1 2 12.5v-9A2.5 2.5 0 0 1 4.5 1h7A2.5 2.5 0 0 1 14 3.5v6.178l-1-1.73Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2.218-.976-.955 1.652a1 1 0 0 1 .955-1.652M9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0M5.5 3A1.5 1.5 0 0 0 4 4.5v1A1.5 1.5 0 0 0 5.5 7h5A1.5 1.5 0 0 0 12 5.5v-1A1.5 1.5 0 0 0 10.5 3zM5 4.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5zm10.83 10.345h.004a.5.5 0 0 1-.433.75H7.6a.5.5 0 0 1-.436-.75l3.9-6.75a.52.52 0 0 1 .866 0z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgCalculatorTriangle16Regular);

export { ForwardRef as default };
