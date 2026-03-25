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
var SvgDatabaseKql32Filled = function SvgDatabaseKql32Filled(_a, ref) {
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
    d: "M5 7c0-2.76 4.925-5 11-5s11 2.24 11 5c0 2.762-4.925 5-11 5S5 9.763 5 7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 14c3.256 0 6.3-.595 8.606-1.643.823-.374 1.668-.865 2.394-1.48v4.12h-6.832a2.8 2.8 0 0 0-2.592 1.726l-.004.01-.005.011a2.81 2.81 0 0 0 .135 2.397q-.24.16-.452.372l-.707.707a3 3 0 0 0 .382 4.567l-.029.029a3 3 0 0 0 1.529 5.063c-.78.08-1.592.121-2.425.121-6.075 0-11-2.238-11-5V10.877c.726.615 1.571 1.106 2.394 1.48C9.7 13.405 12.744 14 16 14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20.125 17h8.054a.805.805 0 0 1 .806.806v8.053a.806.806 0 0 1-1.375.57l-8.053-8.053A.806.806 0 0 1 20.126 17Zm-.754 6.049.707-.708a1 1 0 0 0-1.414-1.414l-.707.707a1 1 0 1 0 1.414 1.415m3.182.353a1 1 0 0 1 0 1.414l-2.829 2.828a1 1 0 0 1-1.414-1.414l2.829-2.828a1 1 0 0 1 1.414 0m2.474 2.475a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabaseKql32Filled);

export { ForwardRef as default };
