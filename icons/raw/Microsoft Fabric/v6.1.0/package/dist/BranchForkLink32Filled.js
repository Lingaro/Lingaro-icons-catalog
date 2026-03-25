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
var SvgBranchForkLink32Filled = function SvgBranchForkLink32Filled(_a, ref) {
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
    d: "M10 11.9A5.002 5.002 0 0 0 9 2a5 5 0 0 0-1 9.9v8.2A5.002 5.002 0 0 0 9 30a5 5 0 0 0 1-9.9V18h6.499c.919-.631 2.03-1 3.228-1H22a5 5 0 0 0 2-4v-1.1A5.002 5.002 0 0 0 23 2a5 5 0 0 0-1 9.9V13a3 3 0 0 1-3 3h-9z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 22.75a4.25 4.25 0 0 1 4.25-4.25h1a.75.75 0 0 1 0 1.5h-1a2.75 2.75 0 1 0 0 5.5h1a.75.75 0 0 1 0 1.5h-1a4.25 4.25 0 0 1-4.25-4.25m15 0a4.25 4.25 0 0 0-4.25-4.25h-1.5a.75.75 0 0 0 0 1.5h1.5a2.75 2.75 0 1 1 0 5.5h-1.5a.75.75 0 0 0 0 1.5h1.5a4.25 4.25 0 0 0 4.25-4.25"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.5 22.75a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBranchForkLink32Filled);

export { ForwardRef as default };
