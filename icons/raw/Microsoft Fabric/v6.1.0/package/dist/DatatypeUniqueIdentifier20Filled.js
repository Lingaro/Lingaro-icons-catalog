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
var SvgDatatypeUniqueIdentifier20Filled = function SvgDatatypeUniqueIdentifier20Filled(_a, ref) {
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
    d: "M10 5.938a.75.75 0 0 1 .75.75v6.563a.75.75 0 0 1-1.5 0V6.688a.75.75 0 0 1 .75-.75M3 6.72a.75.75 0 1 0-1.5 0v4.031a3.25 3.25 0 0 0 6.5 0V6.72a.75.75 0 1 0-1.5 0v4.031a1.75 1.75 0 1 1-3.5 0zm9 .031a.75.75 0 0 1 .774-.75H14.5a3.5 3.5 0 0 1 3.5 3.5v1A3.5 3.5 0 0 1 14.503 14l-1.753.001a.75.75 0 0 1-.75-.75zm1.5.75v5l1.002-.001a2 2 0 0 0 1.998-1.999v-1a2 2 0 0 0-2-2z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatatypeUniqueIdentifier20Filled);

export { ForwardRef as default };
