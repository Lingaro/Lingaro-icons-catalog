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
var SvgCalculatorBrackets20Regular = function SvgCalculatorBrackets20Regular(_a, ref) {
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
    d: "M7.5 5A1.5 1.5 0 0 0 6 6.5v7A1.5 1.5 0 0 0 7.5 15h5a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 12.5 5zM7 6.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5zm.5 3A.5.5 0 0 1 8 9h1a.5.5 0 0 1 0 1H8a.5.5 0 0 1-.5-.5M8 11h1a.5.5 0 0 1 0 1H8a.5.5 0 0 1 0-1m-.5 2.5A.5.5 0 0 1 8 13h1a.5.5 0 0 1 0 1H8a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0-2A.5.5 0 0 1 11 9h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgCalculatorBrackets20Regular);

export { ForwardRef as default };
