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
var SvgCalendarMonthProhibited32Regular = function SvgCalendarMonthProhibited32Regular(_a, ref) {
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
    d: "M7.5 3A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h8.792a9 9 0 0 1-1.357-2H7.5A2.5 2.5 0 0 1 5 24.5v-17A2.5 2.5 0 0 1 7.5 5h17A2.5 2.5 0 0 1 27 7.5v7.435c.728.362 1.4.82 2 1.357V7.5A4.5 4.5 0 0 0 24.5 3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.768 19.356a9 9 0 0 1 1.502-2.332 1.5 1.5 0 0 0-1.502 2.332M10.5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m7-7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m5.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15m0-2a5.48 5.48 0 0 1-3.117-.968l7.649-7.65A5.5 5.5 0 0 1 23 28.5m3.118-10.032-7.65 7.65a5.5 5.5 0 0 1 7.65-7.65"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgCalendarMonthProhibited32Regular);

export { ForwardRef as default };
