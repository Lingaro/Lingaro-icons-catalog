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
var SvgSignalSquare12Filled = function SvgSignalSquare12Filled(_a, ref) {
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
    d: "M1 3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2zm1.642 1.869a.5.5 0 0 0 .707 0 3.75 3.75 0 0 1 5.301 0 .5.5 0 0 0 .708-.708 4.75 4.75 0 0 0-6.716 0 .5.5 0 0 0 0 .708m4.327 3.319a.969.969 0 1 0-1.938 0 .969.969 0 0 0 1.938 0m.701-1.514a.5.5 0 1 0 .707-.708 3.36 3.36 0 0 0-4.754 0 .5.5 0 1 0 .707.708 2.36 2.36 0 0 1 3.34 0"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSignalSquare12Filled);

export { ForwardRef as default };
