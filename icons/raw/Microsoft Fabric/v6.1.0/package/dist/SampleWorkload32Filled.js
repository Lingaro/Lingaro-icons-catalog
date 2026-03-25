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
var SvgSampleWorkload32Filled = function SvgSampleWorkload32Filled(_a, ref) {
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
    d: "M8.25 5A2.25 2.25 0 0 0 6 7.25v5.685A8.96 8.96 0 0 1 10 12c2.072 0 3.981.7 5.502 1.877l2.774-4.86A4 4 0 0 1 19 8.095V7.25A2.25 2.25 0 0 0 16.75 5zM28 23.952h-9.495c.32-.925.495-1.918.495-2.952 0-2.154-.756-4.13-2.018-5.68l3.031-5.311a2 2 0 0 1 3.474 0l6.25 10.951A2 2 0 0 1 28 23.953ZM17 21a7 7 0 1 1-14 0 7 7 0 0 1 14 0"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSampleWorkload32Filled);

export { ForwardRef as default };
