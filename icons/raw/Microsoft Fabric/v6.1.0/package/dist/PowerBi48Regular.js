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
var SvgPowerBi48Regular = function SvgPowerBi48Regular(_a, ref) {
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
    d: "M36.605 6.487c.635 0 1.15.515 1.15 1.15v32.726a1.15 1.15 0 0 1-1.15 1.15H31.91V16.586a3 3 0 0 0-3-3h-2V7.637c0-.635.515-1.15 1.15-1.15zM7.758 41a3 3 0 0 0 3 3h26.484a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-9.819a3 3 0 0 0-3 3v6.586H19.09a3 3 0 0 0-3 3v7.002h-5.332a3 3 0 0 0-3 3zm20.515-24.927c.635 0 1.15.515 1.15 1.15v24.29h-5.846V26.588a3 3 0 0 0-3-3h-2v-6.365c0-.635.515-1.15 1.15-1.15zM19.94 26.075c.635 0 1.15.515 1.15 1.15v14.288h-9.696a1.15 1.15 0 0 1-1.15-1.15V27.225c0-.635.515-1.15 1.15-1.15z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgPowerBi48Regular);

export { ForwardRef as default };
