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
var SvgIotPerson24Regular = function SvgIotPerson24Regular(_a, ref) {
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
    d: "M19 4.491a2.5 2.5 0 0 1-3.012 2.448l-1.28 2.117a4 4 0 0 1 1.18 1.997c-.52.092-1 .298-1.413.592a2.5 2.5 0 1 0-1.469 2.644A3.5 3.5 0 0 0 14.05 17h-.277q-.451.002-.858.135l-.384-1.17a4 4 0 0 1-3.752-1.593l-1.794.848a2.5 2.5 0 1 1-.608-1.372l1.754-.829a4 4 0 0 1 .784-3.566l-.991-1.13a2.5 2.5 0 1 1 1.164-.948l.982 1.12A4 4 0 0 1 12 8c.505 0 .989.093 1.434.265l1.245-2.06A2.5 2.5 0 1 1 19 4.491m-1.5 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0M7 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-1.5 8.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 14.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m2 5.375C21 21.431 19.714 23 16.5 23S12 21.437 12 19.875v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgIotPerson24Regular);

export { ForwardRef as default };
