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
var SvgCalculatorMultipleBrackets20Regular = function SvgCalculatorMultipleBrackets20Regular(_a, ref) {
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
    d: "M3 4.5A1.5 1.5 0 0 1 4.5 3h2a.5.5 0 0 0 0-1h-2A2.5 2.5 0 0 0 2 4.5v11A2.5 2.5 0 0 0 4.5 18h2a.5.5 0 0 0 0-1h-2A1.5 1.5 0 0 1 3 15.5zm14 11a1.5 1.5 0 0 1-1.5 1.5h-2a.5.5 0 0 0 0 1h2a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 15.5 2h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 1 17 4.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.5 5A1.5 1.5 0 0 0 6 6.5v6A1.5 1.5 0 0 0 7.5 14h4a1.5 1.5 0 0 0 1.5-1.5v-6A1.497 1.497 0 0 0 11.5 5zM7 6.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M7.5 8h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1M7 10.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m.5 1.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1m2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m.5-1.5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1zM10 8.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 16a2.5 2.5 0 0 1-2-1h4a1.5 1.5 0 0 0 1.5-1.5v-6c.607.456 1 1.182 1 2v4a2.5 2.5 0 0 1-2.5 2.5z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgCalculatorMultipleBrackets20Regular);

export { ForwardRef as default };
