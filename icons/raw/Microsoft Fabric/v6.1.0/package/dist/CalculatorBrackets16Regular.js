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
var SvgCalculatorBrackets16Regular = function SvgCalculatorBrackets16Regular(_a, ref) {
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
    d: "M2 3.5A1.5 1.5 0 0 1 3.5 2h2a.5.5 0 0 0 0-1h-2A2.5 2.5 0 0 0 1 3.5v9A2.5 2.5 0 0 0 3.5 15h2a.5.5 0 0 0 0-1h-2A1.5 1.5 0 0 1 2 12.5zm11 9a1.5 1.5 0 0 1-1.5 1.5h-2a.5.5 0 0 0 0 1h2a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 11.5 1h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 1 13 3.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.5 4A1.5 1.5 0 0 0 4 5.5v5A1.5 1.5 0 0 0 5.5 12h4a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 9.5 4zM5 8.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5M9.5 8a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zM5 10.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m4.5-.5a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zM5 5.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgCalculatorBrackets16Regular);

export { ForwardRef as default };
