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
var SvgFolder48NonItem = function SvgFolder48NonItem(_a, ref) {
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
    fill: "#FFB900",
    d: "m22 12-1.828-1.828A4 4 0 0 0 17.343 9H5.5A2.5 2.5 0 0 0 3 11.5v25A2.5 2.5 0 0 0 5.5 39h37a2.5 2.5 0 0 0 2.5-2.5v-22a2.5 2.5 0 0 0-2.5-2.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FFD75E",
    d: "m22 12-1.975 1.975A3.5 3.5 0 0 1 17.55 15H3v21.5A2.5 2.5 0 0 0 5.5 39h37a2.5 2.5 0 0 0 2.5-2.5v-22a2.5 2.5 0 0 0-2.5-2.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#iea5671-a)",
    d: "m22 12-1.828 1.828A4 4 0 0 1 17.343 15H3v21.5A2.5 2.5 0 0 0 5.5 39h37a2.5 2.5 0 0 0 2.5-2.5v-22a2.5 2.5 0 0 0-2.5-2.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "m22 12-1.828 1.828A4 4 0 0 1 17.343 15H3v1h14.636a4.5 4.5 0 0 0 3.182-1.318L23.5 12z",
    opacity: 0.4
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#BF5712",
    d: "M5 38a2.97 2.97 0 0 1-1.84-.647A2.49 2.49 0 0 0 5.5 39h37c1.08 0 1.991-.689 2.34-1.647A2.97 2.97 0 0 1 43 38z"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "iea5671-a",
    x1: 3,
    x2: 3,
    y1: 12,
    y2: 39,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#fff",
    stopOpacity: 0.01
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.999,
    stopColor: "#FFD75E",
    stopOpacity: 0.3
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgFolder48NonItem);

export { ForwardRef as default };
