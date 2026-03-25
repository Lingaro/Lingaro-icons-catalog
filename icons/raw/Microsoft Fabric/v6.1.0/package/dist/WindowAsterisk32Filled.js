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
var SvgWindowAsterisk32Filled = function SvgWindowAsterisk32Filled(_a, ref) {
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
    d: "M17.063 13.75a.75.75 0 0 0-1.5 0v4.015l-3.358-1.939a.75.75 0 0 0-.75 1.3l3.354 1.936-3.489 2.014a.75.75 0 0 0 .75 1.3l3.493-2.017v3.891a.75.75 0 0 0 1.5 0v-3.887l3.485 2.012a.75.75 0 0 0 .75-1.299l-3.489-2.014 3.355-1.937a.75.75 0 0 0-.75-1.299l-3.35 1.935z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.5 3A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5v-17A4.5 4.5 0 0 0 24.5 3zm0 24A2.5 2.5 0 0 1 5 24.5V11h22v13.5a2.5 2.5 0 0 1-2.5 2.5z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgWindowAsterisk32Filled);

export { ForwardRef as default };
