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
var SvgDataScience20Filled = function SvgDataScience20Filled(_a, ref) {
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
    d: "m8.7 18.003.279-.466 4.156-6.942 3.086-5.154a.7.7 0 0 0 .093-.357.69.69 0 0 0-.386-.632l-5.62-2.382a.84.84 0 0 0-.666-.004L4.312 4.25 9.34 6.745c.319.18.544.517.544.932a1.1 1.1 0 0 1-.233.673l-2.428 2.72-3.476 3.892a.73.73 0 0 0 .053.965.6.6 0 0 0 .176.123zm2.15-.034 5.356-2.256a.6.6 0 0 0 .178-.124.73.73 0 0 0 .053-.97l-2.628-3.203-3.512 5.866a.49.49 0 0 0 .053.566.45.45 0 0 0 .498.12h.002ZM3.976 5.549q.001-.172.07-.313l4.312 2.138a.544.544 0 0 1 .098.812l-1.778 1.992-2.607-4.27a.7.7 0 0 1-.095-.359",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataScience20Filled);

export { ForwardRef as default };
