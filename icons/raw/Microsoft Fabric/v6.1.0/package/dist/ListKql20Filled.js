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
var SvgListKql20Filled = function SvgListKql20Filled(_a, ref) {
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
    d: "M4.5 6.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m3.25-.75a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zM7 11.25a.75.75 0 0 1 .75-.75h9.5a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75M3.25 12.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5m1.25 3.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M7.25 14a.5.5 0 0 0-1 0v4a.5.5 0 0 0 1 0v-1.31l1.368 1.631a.5.5 0 0 0 .766-.642l-1.397-1.666 1.465-1.591a.5.5 0 0 0-.736-.678L7.25 15.336zm4.75-.5a2 2 0 0 0-2 2v1a2 2 0 0 0 3.25 1.562l.45.338a.5.5 0 0 0 .6-.8l-.45-.338A2 2 0 0 0 14 16.5v-1a2 2 0 0 0-2-2m.993 3.12-.693-.52a.5.5 0 0 0-.6.8l.693.52A1 1 0 0 1 11 16.5v-1a1 1 0 0 1 2 0v1q0 .06-.007.12M16 14a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 0-1H16z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgListKql20Filled);

export { ForwardRef as default };
