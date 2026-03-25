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
var SvgDataScience48Color = function SvgDataScience48Color(_a, ref) {
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
    fill: "url(#idd3c41-a)",
    d: "M25.328 43.834c-.73.28-1.58.21-2.27-.25-1.15-.76-1.81-2.5-1.04-3.65l9.729-14.467 8.938 10.028c.61.69.55 1.74-.14 2.35-.14.13-.3.23-.47.3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#idd3c41-b)",
    d: "M17.488 26.517 8.02 12.27a1.6 1.6 0 0 1-.25-.87c0-.92.75-1.67 1.67-1.67.23 0 .54-.04.74.04l15.397 7.24-.88 1.75z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#idd3c41-c)",
    d: "M23.548 43.844c-.17-.06-.33-.15-.49-.25a2.51 2.51 0 0 1-.7-3.47L40.855 12.28a1.663 1.663 0 0 0-.78-2.41L25.328 4.18c-.28-.11-.58-.17-.89-.17s-.61.06-.89.16L8.8 9.86c.2-.08.42-.13.65-.13s.44.05.64.13l11.638 5.61c.85.44 1.45 1.259 1.45 2.269 0 .63-.23 1.2-.62 1.64L8.2 35.495c-.61.69-.55 1.74.14 2.35.14.13.3.23.47.3l14.748 5.69"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#idd3c41-d)",
    d: "m10.12 9.86 11.638 5.608c.69.35 1.2.96 1.38 1.71l17.967-6.029c-.09-.58-.46-1.07-.99-1.29L25.369 4.17c-.28-.11-.58-.17-.89-.17s-.61.06-.89.16L8.84 9.85c.2-.08.42-.13.65-.13s.44.05.64.13z"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "idd3c41-a",
    x1: 24.758,
    x2: 35.906,
    y1: 32.326,
    y2: 41.684,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#292941"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.22,
    stopColor: "#114A85"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.44,
    stopColor: "#0A5BA0"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.65,
    stopColor: "#0669B6"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "idd3c41-b",
    x1: 11.729,
    x2: 22.428,
    y1: 7.77,
    y2: 23.058,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.22,
    stopColor: "#114A85"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.85,
    stopColor: "#0669B6"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "idd3c41-c",
    x1: 24.438,
    x2: 24.438,
    y1: 43.844,
    y2: 4.01,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.1,
    stopColor: "#288CD9"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.75,
    stopColor: "#3CC5EE"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "idd3c41-d",
    x1: 23.288,
    x2: 26.517,
    y1: 4.24,
    y2: 16.268,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#A1ECFF",
    stopOpacity: 0.9
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.92,
    stopColor: "#A1ECFF",
    stopOpacity: 0
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataScience48Color);

export { ForwardRef as default };
