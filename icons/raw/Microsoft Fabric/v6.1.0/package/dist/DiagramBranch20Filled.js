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
var SvgDiagramBranch20Filled = function SvgDiagramBranch20Filled(_a, ref) {
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
    d: "M14 4.125C14 3.504 13.496 3 12.875 3h-5.75C6.504 3 6 3.504 6 4.125v2.75C6 7.496 6.504 8 7.125 8h.99l-2.4 4h-1.59C3.504 12 3 12.504 3 13.125v2.75C3 16.496 3.504 17 4.125 17h3.75C8.496 17 9 16.496 9 15.875v-2.75C9 12.504 8.496 12 7.875 12h-.993l2.4-4h1.434l2.4 4h-.991c-.621 0-1.125.504-1.125 1.125v2.75c0 .621.504 1.125 1.125 1.125h3.75c.621 0 1.125-.504 1.125-1.125v-2.75c0-.621-.504-1.125-1.125-1.125h-1.593l-2.4-4h.993C13.496 8 14 7.496 14 6.875z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDiagramBranch20Filled);

export { ForwardRef as default };
