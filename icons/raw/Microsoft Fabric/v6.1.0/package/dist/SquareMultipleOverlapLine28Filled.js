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
var SvgSquareMultipleOverlapLine28Filled = function SvgSquareMultipleOverlapLine28Filled(_a, ref) {
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
    d: "M7.75 16a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.75 5.031a3 3 0 0 1 3-3h11.5a3 3 0 0 1 3 3v11.5a3 3 0 0 1-3 3h-2V23.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3h2zm14.5 12.5a1 1 0 0 0 1-1v-11.5a1 1 0 0 0-1-1h-11.5a1 1 0 0 0-1 1V9h7.5a3 3 0 0 1 3 3v5.531zM5.75 11a1 1 0 0 0-1 1v11.5a1 1 0 0 0 1 1h11.5a1 1 0 0 0 1-1V12a1 1 0 0 0-1-1z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSquareMultipleOverlapLine28Filled);

export { ForwardRef as default };
