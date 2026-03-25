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
var SvgBriefcaseReport24Regular = function SvgBriefcaseReport24Regular(_a, ref) {
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
    d: "M8 4.25V6H6.25A3.25 3.25 0 0 0 3 9.25v7.5A3.25 3.25 0 0 0 6.25 20h5.25v-1.5H6.25a1.75 1.75 0 0 1-1.75-1.75v-3.26c.505.322 1.106.51 1.75.51H10a1 1 0 0 0 1 1h1.668a2.7 2.7 0 0 1 1.18-.47A1 1 0 0 0 14 14h1.25v-.75q.001-.392.104-.75H14V12a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.5H6.25a1.75 1.75 0 0 1-1.75-1.75v-1.5c0-.966.784-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75v1.5q0 .095-.01.188a2.75 2.75 0 0 1 1.207 1.77q.148-.06.303-.104V9.25A3.25 3.25 0 0 0 17.75 6H16V4.25A2.25 2.25 0 0 0 13.75 2h-3.5A2.25 2.25 0 0 0 8 4.25m2.25-.75h3.5a.75.75 0 0 1 .75.75V6h-5V4.25a.75.75 0 0 1 .75-.75"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 12c.69 0 1.25.56 1.25 1.25v7.5a1.25 1.25 0 1 1-2.5 0v-7.5c0-.69.56-1.25 1.25-1.25m-3.75 4c.69 0 1.25.56 1.25 1.25v3.5a1.25 1.25 0 1 1-2.5 0v-3.5c0-.69.56-1.25 1.25-1.25m7.5-2c.69 0 1.25.56 1.25 1.25v5.5a1.25 1.25 0 1 1-2.5 0v-5.5c0-.69.56-1.25 1.25-1.25"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBriefcaseReport24Regular);

export { ForwardRef as default };
