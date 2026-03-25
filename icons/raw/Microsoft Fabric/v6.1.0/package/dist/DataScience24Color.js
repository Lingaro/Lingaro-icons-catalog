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
var SvgDataScience24Color = function SvgDataScience24Color(_a, ref) {
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
    fill: "url(#ibe4469-a)",
    d: "M12.445 21.92c-.365.14-.79.106-1.135-.124-.575-.38-.905-1.25-.52-1.825l4.865-7.236 4.47 5.016a.83.83 0 0 1-.07 1.175.8.8 0 0 1-.235.15l-7.375 2.845Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ibe4469-b)",
    d: "M8.525 13.26 3.79 6.136a.8.8 0 0 1-.125-.435c0-.46.375-.835.835-.835.115 0 .27-.02.37.02l7.7 3.62-.44.875z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ibe4469-c)",
    d: "M11.555 21.925a1.254 1.254 0 0 1-.595-1.86L20.21 6.14a.832.832 0 0 0-.39-1.205L12.445 2.09A1.2 1.2 0 0 0 12 2.005c-.155 0-.305.03-.445.08L4.18 4.93c.1-.04.21-.065.325-.065a.9.9 0 0 1 .32.065l5.82 2.805c.425.22.725.63.725 1.135 0 .315-.115.6-.31.82l-7.18 8.06a.83.83 0 0 0 .07 1.175q.106.098.235.15l7.375 2.846"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ibe4469-d)",
    d: "m4.84 4.93 5.82 2.805c.345.175.6.48.69.855l8.985-3.015a.83.83 0 0 0-.495-.645l-7.375-2.845A1.2 1.2 0 0 0 12.02 2c-.155 0-.305.03-.445.08L4.2 4.925c.1-.04.21-.065.325-.065a.9.9 0 0 1 .32.065z"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "ibe4469-a",
    x1: 12.16,
    x2: 17.735,
    y1: 16.166,
    y2: 20.846,
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
    id: "ibe4469-b",
    x1: 5.645,
    x2: 10.995,
    y1: 3.885,
    y2: 11.531,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.22,
    stopColor: "#114A85"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.85,
    stopColor: "#0669B6"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "ibe4469-c",
    x1: 12,
    x2: 12,
    y1: 21.925,
    y2: 2.005,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.1,
    stopColor: "#288CD9"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.75,
    stopColor: "#3CC5EE"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "ibe4469-d",
    x1: 11.425,
    x2: 13.04,
    y1: 2.12,
    y2: 8.135,
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
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataScience24Color);

export { ForwardRef as default };
