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
var SvgCalendarMonthPerson24Regular = function SvgCalendarMonthPerson24Regular(_a, ref) {
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
    d: "M17.75 3A3.25 3.25 0 0 1 21 6.25v8.25c0-1.19-.593-2.24-1.5-2.873V6.25a1.75 1.75 0 0 0-1.75-1.75H6.25A1.75 1.75 0 0 0 4.5 6.25v11.5c0 .966.784 1.75 1.75 1.75h5.763a3 3 0 0 0-.013.272v.103c0 .38.056.758.172 1.125H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 14.75a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0m4.25 0a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0M9 9.75a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0m4.25 0a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0m4.25 0a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0M20 14.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M17.5 23c3.214 0 4.5-1.569 4.5-3.125v-.103c0-.979-.794-1.772-1.773-1.772h-5.454c-.98 0-1.773.793-1.773 1.772v.103C13 21.437 14.286 23 17.5 23"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgCalendarMonthPerson24Regular);

export { ForwardRef as default };
