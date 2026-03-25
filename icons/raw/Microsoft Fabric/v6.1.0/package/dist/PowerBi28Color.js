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
var SvgPowerBi28Color = function SvgPowerBi28Color(_a, ref) {
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
    fill: "url(#i6fbc30-a)",
    d: "M16 2a1 1 0 0 0-1 1v23h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.5,
    d: "M11 8a1 1 0 0 0-1 1v5h-.5v12h1V9H17a.5.5 0 0 1 .5.5V26h1V9.5A1.5 1.5 0 0 0 17 8z",
    opacity: 0.25
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i6fbc30-b)",
    d: "M11 8a1 1 0 0 0-1 1v17h8V9a1 1 0 0 0-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i6fbc30-c)",
    d: "M6 14a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h7V15a1 1 0 0 0-1-1z"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "i6fbc30-a",
    x1: 13.667,
    x2: 24.216,
    y1: 2,
    y2: 24.362,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#E6AD10"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#C87E0E"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i6fbc30-b",
    x1: 9.999,
    x2: 18.872,
    y1: 8,
    y2: 25.207,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#F6D751"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#E6AD10"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i6fbc30-c",
    x1: 4.999,
    x2: 9.902,
    y1: 14,
    y2: 25.619,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#F9E589"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#F6D751"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgPowerBi28Color);

export { ForwardRef as default };
