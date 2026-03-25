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
var SvgPowerBi20Color = function SvgPowerBi20Color(_a, ref) {
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
    fill: "url(#ic17573-a)",
    d: "M11.667 2a.667.667 0 0 0-.667.667V18h5.333a.667.667 0 0 0 .667-.667V2.667A.667.667 0 0 0 16.333 2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.5,
    d: "M7.667 6A.667.667 0 0 0 7 6.667V10h-.5v8h1V7h4.833c.092 0 .167.075.167.167V18h1V7.167C13.5 6.522 12.978 6 12.333 6z",
    opacity: 0.25
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ic17573-b)",
    d: "M7.667 6A.667.667 0 0 0 7 6.667V18h6V6.667A.667.667 0 0 0 12.333 6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ic17573-c)",
    d: "M3.667 10a.667.667 0 0 0-.667.667v6.666c0 .369.298.667.667.667H9v-7.333A.667.667 0 0 0 8.333 10z"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "ic17573-a",
    x1: 10,
    x2: 16.5,
    y1: 2,
    y2: 17.5,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#E6AD10"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#C87E0E"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "ic17573-b",
    x1: 7,
    x2: 12.499,
    y1: 6,
    y2: 18,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#F6D751"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#E6AD10"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "ic17573-c",
    x1: 3,
    x2: 6,
    y1: 10,
    y2: 18,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#F9E589"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#F6D751"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgPowerBi20Color);

export { ForwardRef as default };
