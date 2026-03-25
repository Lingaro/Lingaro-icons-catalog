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
var SvgDataWarehouse32Item = function SvgDataWarehouse32Item(_a, ref) {
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
    fill: "url(#i15919b-a)",
    d: "M5 5.5A3.5 3.5 0 0 1 8.5 2h15A3.5 3.5 0 0 1 27 5.5v21a3.5 3.5 0 0 1-3.5 3.5h-15A3.5 3.5 0 0 1 5 26.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i15919b-b)",
    fillOpacity: 0.2,
    d: "M5 5.5A3.5 3.5 0 0 1 8.5 2h15A3.5 3.5 0 0 1 27 5.5v21a3.5 3.5 0 0 1-3.5 3.5h-15A3.5 3.5 0 0 1 5 26.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i15919b-c)",
    fillRule: "evenodd",
    d: "M23.5 3h-15A2.5 2.5 0 0 0 6 5.5v21A2.5 2.5 0 0 0 8.5 29h15a2.5 2.5 0 0 0 2.5-2.5v-21A2.5 2.5 0 0 0 23.5 3m-15-1A3.5 3.5 0 0 0 5 5.5v21A3.5 3.5 0 0 0 8.5 30h15a3.5 3.5 0 0 0 3.5-3.5v-21A3.5 3.5 0 0 0 23.5 2z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i15919b-d)",
    d: "M23 22a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2v-6.4a2 2 0 0 1 .674-1.497l5-4.428a2 2 0 0 1 2.653 0l5 4.428A2 2 0 0 1 23 15.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#B4CDF8",
    d: "M13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m9-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "i15919b-a",
    x1: 11.111,
    x2: 15.576,
    y1: 2,
    y2: 30.067,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#EBEBEB"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i15919b-c",
    x1: 12.104,
    x2: 16.851,
    y1: 2,
    y2: 29.972,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#BBB"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#888"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i15919b-d",
    x1: 9,
    x2: 23.804,
    y1: 9.172,
    y2: 23.149,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#3477EA"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#1D53A4"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "i15919b-b",
    cx: 0,
    cy: 0,
    r: 1,
    gradientTransform: "matrix(11.61113 22.16669 -17.08352 8.94852 12.028 9.292)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.177,
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#B8B8B8"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataWarehouse32Item);

export { ForwardRef as default };
