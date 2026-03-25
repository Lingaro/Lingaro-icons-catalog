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
var SvgRealTimeIntelligence16Regular = function SvgRealTimeIntelligence16Regular(_a, ref) {
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
    fillRule: "evenodd",
    d: "M8.753 2.223 3.451 7.287h2.942c.863 0 1.596-.572 1.833-1.36zm-2.36 6.064a2.92 2.92 0 0 0 2.737-1.91h4.697c.092 0 .165.073.165.165v.028a.2.2 0 0 1-.046.08l-1.48 1.682-1.713 1.943a2.16 2.16 0 0 0-1.55-.654H2.66a.664.664 0 0 1 .005-1.329v-.005zm-4.857-.554L8.293 1.28a.875.875 0 0 1 1.487.826l-.466 3.27h4.514a1.16 1.16 0 0 1 1.146.956c.012.066.022.144.022.213a1.17 1.17 0 0 1-.317.786l-6.505 7.387a.875.875 0 0 1-1.487-.826l.58-3.271H2.664a1.664 1.664 0 0 1-1.13-2.888Zm6.766 2.888-.51 3.018 2.298-2.608-.002-.002a1.16 1.16 0 0 0-.886-.408z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgRealTimeIntelligence16Regular);

export { ForwardRef as default };
