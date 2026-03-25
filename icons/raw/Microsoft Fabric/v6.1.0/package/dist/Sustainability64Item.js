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
var SvgSustainability64Item = function SvgSustainability64Item(_a, ref) {
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
    fill: "url(#ie22b45-a)",
    d: "M6 13a7 7 0 0 1 7-7h38a7 7 0 0 1 7 7v38a7 7 0 0 1-7 7H13a7 7 0 0 1-7-7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ie22b45-b)",
    fillOpacity: 0.2,
    d: "M6 13a7 7 0 0 1 7-7h38a7 7 0 0 1 7 7v38a7 7 0 0 1-7 7H13a7 7 0 0 1-7-7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ie22b45-c)",
    fillRule: "evenodd",
    d: "M51 7H13a6 6 0 0 0-6 6v38a6 6 0 0 0 6 6h38a6 6 0 0 0 6-6V13a6 6 0 0 0-6-6M13 6a7 7 0 0 0-7 7v38a7 7 0 0 0 7 7h38a7 7 0 0 0 7-7V13a7 7 0 0 0-7-7z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ie22b45-d)",
    d: "M30.05 19.807a2.76 2.76 0 0 1 3.9 0l5.121 5.121a10 10 0 0 1 1.282 1.569c2.562 3.882 2.135 9.156-1.282 12.574l-.08.079A9.95 9.95 0 0 1 33 41.95V45a1 1 0 1 1-2 0v-3.05a9.96 9.96 0 0 1-6.071-2.88A9.97 9.97 0 0 1 22 31.965a10 10 0 0 1 1.038-4.407 10 10 0 0 1 1.89-2.629l5.122-5.12Zm.95 20.13a8 8 0 0 0 2 0V31a1 1 0 1 0-2 0z"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "ie22b45-a",
    x1: 20.444,
    x2: 27.022,
    y1: 6,
    y2: 58.622,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#EBEBEB"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "ie22b45-c",
    x1: 22.792,
    x2: 29.793,
    y1: 6,
    y2: 58.511,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#BBB"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#888"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "ie22b45-d",
    x1: 22,
    x2: 47.828,
    y1: 19,
    y2: 38.131,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#7751B8"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#5A409C"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "ie22b45-b",
    cx: 0,
    cy: 0,
    r: 1,
    gradientTransform: "matrix(27.4444 41.16672 -35.62501 23.74995 22.61 19.541)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.177,
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#B8B8B8"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSustainability64Item);

export { ForwardRef as default };
