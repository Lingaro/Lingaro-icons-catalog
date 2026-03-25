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
var SvgRectangleArrowUpExit20Filled = function SvgRectangleArrowUpExit20Filled(_a, ref) {
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
    d: "M6.691 3.038a.5.5 0 0 0-.542.106l-.003.003-3 3a.5.5 0 1 0 .708.707L6 4.707V11.5a.5.5 0 0 0 1 0V4.707l2.146 2.147a.5.5 0 1 0 .708-.708l-3-3-.003-.002a.5.5 0 0 0-.16-.106"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 11.5V9H3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H8v2.5a1.5 1.5 0 0 1-3 0"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgRectangleArrowUpExit20Filled);

export { ForwardRef as default };
