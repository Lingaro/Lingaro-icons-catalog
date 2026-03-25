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
var SvgDualScreenDiff20Filled = function SvgDualScreenDiff20Filled(_a, ref) {
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
    d: "M16 16.001h-5.5v-12H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2m-1.854-3.647a.5.5 0 0 0 .708-.707l-1.647-1.646 1.647-1.646a.5.5 0 0 0-.708-.708l-2 2a.5.5 0 0 0 0 .707zM4 4.001h5.5v12H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2m1.854 3.646a.5.5 0 1 0-.708.708L6.793 10l-1.647 1.646a.5.5 0 1 0 .708.707l2-2a.5.5 0 0 0 0-.707z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDualScreenDiff20Filled);

export { ForwardRef as default };
