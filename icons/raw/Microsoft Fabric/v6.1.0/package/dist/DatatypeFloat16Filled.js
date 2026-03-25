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
var SvgDatatypeFloat16Filled = function SvgDatatypeFloat16Filled(_a, ref) {
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
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#ib09b48-a)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.503 3.499a2.5 2.5 0 0 0-2.5 2.5.75.75 0 1 0 1.5 0 1 1 0 1 1 2 0q0 .022.002.046v.003a1.2 1.2 0 0 1-.405.705l-1.56.902a2.84 2.84 0 0 0-1.536 2.619.75.75 0 0 0 .75.725h3.5a.75.75 0 0 0 0-1.5H7.686l.002-.003a1.34 1.34 0 0 1 .586-.533l1.627-.941a1 1 0 0 0 .086-.058 2.7 2.7 0 0 0 1.015-1.795 1 1 0 0 0 .004-.137l-.004-.059a2.5 2.5 0 0 0-2.5-2.474ZM1.488 5.652l-.34.227A.75.75 0 0 1 .315 4.63l.006-.005 1.5-1a.75.75 0 0 1 1.166.624v6a.75.75 0 1 1-1.5 0zM5 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m7.75-6.999h2.5a.75.75 0 1 1 0 1.5H13.5v1.5h1.25a.75.75 0 1 1 0 1.5H13.5v2.25a.75.75 0 1 1-1.5 0v-6a.75.75 0 0 1 .75-.75"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "ib09b48-a"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0h16v16H0z"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatatypeFloat16Filled);

export { ForwardRef as default };
