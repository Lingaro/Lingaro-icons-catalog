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
var SvgTableArrowDiagonalUpRight20Filled = function SvgTableArrowDiagonalUpRight20Filled(_a, ref) {
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
    d: "M11.318 2.318a4.5 4.5 0 1 1 6.364 6.364 4.5 4.5 0 0 1-6.364-6.364m5.096 1.768v-.003a.5.5 0 0 0-.144-.349l-.003-.002-.002-.002a.5.5 0 0 0-.351-.144h-2.829a.5.5 0 1 0 0 1h1.622L12.732 6.56a.5.5 0 0 0 .707.707l1.975-1.975v1.621a.5.5 0 0 0 1 0zM9.6 3a5.52 5.52 0 0 0-.393 4H8V3zm1.01 6.39A5.5 5.5 0 0 1 9.6 8H8v4h4v-1.6c-.5-.255-.97-.592-1.39-1.01M17 10.4a5.52 5.52 0 0 1-4 .393V12h4zM13 17h1.5a2.5 2.5 0 0 0 2.5-2.5V13h-4zm-1-4H8v4h4zm-5-1V8H3v4zm0 1H3v1.5A2.5 2.5 0 0 0 5.5 17H7zM7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTableArrowDiagonalUpRight20Filled);

export { ForwardRef as default };
