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
var SvgSquareMultipleOverlap24Filled = function SvgSquareMultipleOverlap24Filled(_a, ref) {
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
    d: "M10 2a3.5 3.5 0 0 0-3.465 3h2.05A1.5 1.5 0 0 1 10 4h8.5A1.5 1.5 0 0 1 20 5.5V14c0 .444-.193.843-.5 1.118v2.237A3.5 3.5 0 0 0 22 14V5.5A3.5 3.5 0 0 0 18.5 2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.5 7A3.5 3.5 0 0 0 2 10.5V19a3.5 3.5 0 0 0 3.5 3.5H14a3.5 3.5 0 0 0 3.5-3.5v-8.5A3.5 3.5 0 0 0 14 7zM4 10.5A1.5 1.5 0 0 1 5.5 9H14a1.5 1.5 0 0 1 1.5 1.5V19a1.5 1.5 0 0 1-1.5 1.5H5.5A1.5 1.5 0 0 1 4 19z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSquareMultipleOverlap24Filled);

export { ForwardRef as default };
