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
var SvgAddPipeline24NonItem = function SvgAddPipeline24NonItem(_a, ref) {
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
    fill: "url(#i4bde62-a)",
    fillRule: "evenodd",
    d: "M4 7a1.5 1.5 0 1 1 3 0v1h10V7a1.5 1.5 0 0 1 3 0v4.498a6.5 6.5 0 0 0-1-.324V7a.5.5 0 0 0-1 0v4.019a6.6 6.6 0 0 0-1 0V9H7v6h4.498a6.5 6.5 0 0 0-.324 1H7v1a1.5 1.5 0 0 1-3 0zm2 0v10a.5.5 0 0 1-1 0V7a.5.5 0 0 1 1 0",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i4bde62-b)",
    fillRule: "evenodd",
    d: "M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m.501 8.503V18h2.496a.5.5 0 0 0 0-1H18v-2.5a.5.5 0 1 0-1 0V17h-2.504a.5.5 0 0 0 0 1H17v2.503a.5.5 0 1 0 1 0Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "i4bde62-a",
    x1: 4,
    x2: 21.441,
    y1: 5.5,
    y2: 24.436,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#209782"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#0C695A"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i4bde62-b",
    x1: 4,
    x2: 21.441,
    y1: 5.5,
    y2: 24.436,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#209782"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#0C695A"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgAddPipeline24NonItem);

export { ForwardRef as default };
