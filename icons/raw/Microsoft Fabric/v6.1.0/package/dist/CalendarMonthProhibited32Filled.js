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
var SvgCalendarMonthProhibited32Filled = function SvgCalendarMonthProhibited32Filled(_a, ref) {
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
    d: "M7.5 3A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h8.792A8.97 8.97 0 0 1 14 23c0-1.297.274-2.53.768-3.644a1.5 1.5 0 0 1 1.502-2.332A8.98 8.98 0 0 1 23 14c2.305 0 4.408.867 6 2.292V7.5A4.5 4.5 0 0 0 24.5 3zM12 18.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m5.5-6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m5.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M10.5 14a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M30.5 23a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0m-10.617 4.532a5.5 5.5 0 0 0 7.65-7.65zm-1.415-1.414 7.65-7.65a5.5 5.5 0 0 0-7.65 7.65"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgCalendarMonthProhibited32Filled);

export { ForwardRef as default };
