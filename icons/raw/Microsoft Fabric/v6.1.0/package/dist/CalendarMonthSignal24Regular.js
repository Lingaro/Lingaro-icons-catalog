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
var SvgCalendarMonthSignal24Regular = function SvgCalendarMonthSignal24Regular(_a, ref) {
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
    d: "M17.75 3A3.25 3.25 0 0 1 21 6.25v10.663a9.7 9.7 0 0 0-1.5-1.807V6.25a1.75 1.75 0 0 0-1.75-1.75H6.25A1.75 1.75 0 0 0 4.5 6.25v11.5c0 .966.784 1.75 1.75 1.75h4.533q.006.05.017.1c.1.5.3.8.7 1.1q-.112.15-.204.3H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 14.75a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0M7.75 8.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5m5.5 1.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0m3-1.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5m-3.797 5.017a8.5 8.5 0 0 1 9.03 9.03.75.75 0 1 1-1.497-.095 7 7 0 0 0-7.438-7.438.75.75 0 0 1-.095-1.497"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.43 16.027a6 6 0 0 1 6.544 6.544.75.75 0 0 1-1.494-.141 4.5 4.5 0 0 0-4.91-4.91.75.75 0 0 1-.14-1.493"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.365 18.558a3.5 3.5 0 0 1 4.078 4.078.75.75 0 1 1-1.476-.271 2 2 0 0 0-2.332-2.331.75.75 0 0 1-.27-1.476"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 23a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgCalendarMonthSignal24Regular);

export { ForwardRef as default };
