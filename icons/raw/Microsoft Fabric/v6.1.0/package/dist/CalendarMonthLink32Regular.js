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
var SvgCalendarMonthLink32Regular = function SvgCalendarMonthLink32Regular(_a, ref) {
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
    d: "M7.5 3A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h9.888a5.76 5.76 0 0 1-2.386-2H7.5A2.5 2.5 0 0 1 5 24.5v-17A2.5 2.5 0 0 1 7.5 5h17A2.5 2.5 0 0 1 27 7.5v10.546a5.7 5.7 0 0 1 2 .646V7.5A4.5 4.5 0 0 0 24.5 3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.47 19.904a5.74 5.74 0 0 1 2.03-1.453 1.5 1.5 0 1 0-2.03 1.453M10.5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m7-7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m5.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-7.5 11.25a4.25 4.25 0 0 1 4.25-4.25h1a.75.75 0 0 1 0 1.5h-1a2.75 2.75 0 1 0 0 5.5h1a.75.75 0 0 1 0 1.5h-1a4.25 4.25 0 0 1-4.25-4.25m15 0a4.25 4.25 0 0 0-4.25-4.25h-1.5a.75.75 0 0 0 0 1.5h1.5a2.75 2.75 0 1 1 0 5.5h-1.5a.75.75 0 0 0 0 1.5h1.5a4.25 4.25 0 0 0 4.25-4.25"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.5 23.75a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgCalendarMonthLink32Regular);

export { ForwardRef as default };
