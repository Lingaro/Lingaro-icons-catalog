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
var SvgCalendarMonthSignal24Filled = function SvgCalendarMonthSignal24Filled(_a, ref) {
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
    d: "M17.75 3A3.25 3.25 0 0 1 21 6.25v10.663c-1.697-2.643-4.663-4.413-8-4.413h-.6q-.75 0-1.2.6c-.3.4-.4.8-.4 1.299a1.25 1.25 0 0 0 .351 1.269c-.262.377-.351.76-.351 1.232 0 .4.2.8.5 1.1-.05.05-.075.1-.1.15s-.05.1-.1.15c-.3.4-.4.8-.3 1.3s.3.8.7 1.1q-.112.15-.204.3H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3zm-10 10.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m0-5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m4.25 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m4.25 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.453 13.517a8.5 8.5 0 0 1 9.03 9.03.75.75 0 1 1-1.497-.095 7 7 0 0 0-7.438-7.438.75.75 0 0 1-.095-1.497"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.43 16.027a6 6 0 0 1 6.544 6.544.75.75 0 0 1-1.494-.141 4.5 4.5 0 0 0-4.91-4.91.75.75 0 0 1-.14-1.493"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.365 18.558a3.5 3.5 0 0 1 4.078 4.078.75.75 0 1 1-1.476-.271 2 2 0 0 0-2.332-2.331.75.75 0 0 1-.27-1.476"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 23a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgCalendarMonthSignal24Filled);

export { ForwardRef as default };
