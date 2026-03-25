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
var SvgRealTimeIntelligence48Filled = function SvgRealTimeIntelligence48Filled(_a, ref) {
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
    d: "M22.019 20.87c-1.46 1-3.031 1.35-4.712 1.44v.01c-.31.02-.62.02-.93.02H8.041L23.5 4.81c.47-.5 1.12-.81 1.85-.81a2.502 2.502 0 0 1 2.412 3.16l-2.501 9.35a8.42 8.42 0 0 1-3.242 4.36M44 19.84c0-.4-.06-.81-.21-1.18-.45-1.18-1.61-2.02-2.861-2.13l-13.087-.01s-.09.35-.1.35a10.83 10.83 0 0 1-10.455 7.97H7.332a3.33 3.33 0 1 0 0 6.66h23.481c1.141 0 2.152.58 2.752 1.45l8.923-10.107c.389-.413.788-.837 1.062-1.313.29-.51.45-1.1.45-1.69M30.813 33.99H22.13l-1.86 6.85A2.5 2.5 0 0 0 22.68 44c.73 0 1.38-.31 1.84-.8l6.944-7.87a.828.828 0 0 0-.65-1.34Z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgRealTimeIntelligence48Filled);

export { ForwardRef as default };
