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
var SvgTableArrowDiagonalUpRight20Regular = function SvgTableArrowDiagonalUpRight20Regular(_a, ref) {
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
    d: "M11.318 2.318a4.5 4.5 0 1 1 6.364 6.364 4.5 4.5 0 0 1-6.364-6.364m5.096 1.768v-.003a.5.5 0 0 0-.144-.349l-.002-.002-.002-.002a.5.5 0 0 0-.352-.144h-2.828a.5.5 0 1 0 0 1h1.621L12.732 6.56a.5.5 0 0 0 .708.707l1.974-1.975v1.621a.5.5 0 0 0 1 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.5 3h4.1a5.5 5.5 0 0 0-.393 1H8v3h1.207q.146.516.392 1H8v4h4v-1.6q.484.248 1 .393V12h3v-1.207a5.5 5.5 0 0 0 1-.392V14.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3M4 14.5a1.5 1.5 0 0 0 1.356 1.493L5.5 16H7v-3H4zm8 1.5v-3H8v3zm2.5 0a1.5 1.5 0 0 0 1.493-1.355L16 14.5V13h-3v3zM4 7h3V4H5.5a1.5 1.5 0 0 0-1.493 1.356L4 5.5zm3 1H4v4h3z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTableArrowDiagonalUpRight20Regular);

export { ForwardRef as default };
