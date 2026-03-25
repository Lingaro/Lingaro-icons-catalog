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
var SvgPowerBi24Color = function SvgPowerBi24Color(_a, ref) {
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
    fill: "url(#i9585e0-a)",
    d: "M12.833 2a.833.833 0 0 0-.833.833V22h6.167c.46 0 .833-.373.833-.833V2.833A.833.833 0 0 0 18.167 2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.5,
    d: "M8.833 7A.833.833 0 0 0 8 7.833V12h-.5v10h1V8h5.667c.184 0 .333.15.333.333V22h1V8.333C15.5 7.597 14.903 7 14.167 7z",
    opacity: 0.25
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i9585e0-b)",
    d: "M8.833 7A.833.833 0 0 0 8 7.833V22h7V7.833A.833.833 0 0 0 14.167 7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i9585e0-c)",
    d: "M4.833 12a.833.833 0 0 0-.833.833v8.334c0 .46.373.833.833.833H11v-9.167a.833.833 0 0 0-.833-.833z"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "i9585e0-a",
    x1: 10.833,
    x2: 19.35,
    y1: 2,
    y2: 20.956,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#E6AD10"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#C87E0E"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i9585e0-b",
    x1: 7.999,
    x2: 15.181,
    y1: 7,
    y2: 21.624,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#F6D751"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#E6AD10"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i9585e0-c",
    x1: 3.999,
    x2: 7.946,
    y1: 12,
    y2: 21.821,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#F9E589"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#F6D751"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgPowerBi24Color);

export { ForwardRef as default };
