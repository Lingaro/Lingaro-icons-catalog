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
var SvgRealTimeIntelligence48Regular = function SvgRealTimeIntelligence48Regular(_a, ref) {
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
    d: "M5.11 24.507a4.155 4.155 0 0 0 2.977 6.983h14.7l-2.536 9.35a2.5 2.5 0 0 0 2.41 3.16c.73 0 1.38-.31 1.84-.8l18.594-21.12c.55-.594.895-1.392.9-2.26 0 0 .005-.15 0-.224a3.36 3.36 0 0 0-1.09-2.22 3.32 3.32 0 0 0-2.25-.875H25.297l1.613-9.334c.044-.233.09-.43.09-.661A2.507 2.507 0 0 0 24.494 4c-.732 0-1.383.31-1.844.802zm19.754-5.506-.092.532a8.34 8.34 0 0 1-8.057 6.145h-8.56v.001a1.655 1.655 0 0 0-.026 3.31h19.31c1.777 0 3.367.795 4.436 2.048l5.68-6.446 3.703-4.207a.84.84 0 0 0 .227-.44v-.113c0-.46-.37-.83-.83-.83h-15.79Zm5.332 13.951-.003-.005a3.33 3.33 0 0 0-2.754-1.457h-2.062L22.663 41.5h.002l.004-.003zM24.494 6.5 9.63 23.177h7.084a5.84 5.84 0 0 0 5.616-4.195z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgRealTimeIntelligence48Regular);

export { ForwardRef as default };
