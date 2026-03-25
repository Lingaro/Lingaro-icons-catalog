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
var SvgPowerBi16Color = function SvgPowerBi16Color(_a, ref) {
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
    fill: "url(#i1facd3-a)",
    d: "M14 1.58v12.84c0 .32-.26.58-.58.58H9V1.58c0-.32.26-.58.58-.58h3.84c.32 0 .58.26.58.58"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.25,
    d: "M11 15V5.583c0-.598-.485-1.083-1.083-1.083H9v1h.917c.046 0 .083.037.083.083V15z",
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i1facd3-b)",
    d: "M10.5 5.083V15H6.08a.58.58 0 0 1-.58-.58V5.08c0-.32.26-.58.58-.58h3.837c.322 0 .583.261.583.583"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i1facd3-c)",
    d: "M2 8.58v5.84c0 .32.26.58.58.58H7V8.583A.583.583 0 0 0 6.417 8H2.58a.58.58 0 0 0-.58.58"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "i1facd3-a",
    x1: 8.167,
    x2: 14.048,
    y1: 1,
    y2: 14.358,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#E6AD10"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#C87E0E"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i1facd3-b",
    x1: 5.5,
    x2: 10.464,
    y1: 4.5,
    y2: 14.816,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#F6D751"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#E6AD10"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i1facd3-c",
    x1: 2,
    x2: 4.722,
    y1: 8,
    y2: 14.913,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#F9E589"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#F6D751"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgPowerBi16Color);

export { ForwardRef as default };
