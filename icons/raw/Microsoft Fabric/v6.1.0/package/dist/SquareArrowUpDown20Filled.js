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
var SvgSquareArrowUpDown20Filled = function SvgSquareArrowUpDown20Filled(_a, ref) {
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
    d: "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6.082a1.5 1.5 0 0 0-1.579.348l-1.591 1.59a1.5 1.5 0 0 0-.189.231V13.5a1.5 1.5 0 1 0-3 0v1.857A1.497 1.497 0 0 0 9.007 17H6a3 3 0 0 1-3-3zm15.5 8.793-1.646-1.647a.5.5 0 0 0-.708 0L14.5 14.793a.5.5 0 0 0 .707.707l.793-.793V18.5a.5.5 0 0 0 1 0v-3.793l.793.793a.5.5 0 0 0 .707-.707"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m13.44 16.5-.794.793V13.5a.5.5 0 1 0-1 0v3.793l-.792-.793a.5.5 0 0 0-.708.707l1.647 1.647a.5.5 0 0 0 .707 0l1.646-1.647a.5.5 0 0 0-.707-.707Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSquareArrowUpDown20Filled);

export { ForwardRef as default };
