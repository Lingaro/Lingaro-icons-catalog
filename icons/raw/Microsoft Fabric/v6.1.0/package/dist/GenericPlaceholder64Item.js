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
var SvgGenericPlaceholder64Item = function SvgGenericPlaceholder64Item(_a, ref) {
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
    fill: "url(#ie14be4-a)",
    d: "M6 13a7 7 0 0 1 7-7h38a7 7 0 0 1 7 7v38a7 7 0 0 1-7 7H13a7 7 0 0 1-7-7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ie14be4-b)",
    fillOpacity: 0.2,
    d: "M6 13a7 7 0 0 1 7-7h38a7 7 0 0 1 7 7v38a7 7 0 0 1-7 7H13a7 7 0 0 1-7-7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ie14be4-c)",
    fillRule: "evenodd",
    d: "M51 7H13a6 6 0 0 0-6 6v38a6 6 0 0 0 6 6h38a6 6 0 0 0 6-6V13a6 6 0 0 0-6-6M13 6a7 7 0 0 0-7 7v38a7 7 0 0 0 7 7h38a7 7 0 0 0 7-7V13a7 7 0 0 0-7-7z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7A7A7A",
    fillRule: "evenodd",
    d: "M30.383 15.578a16.7 16.7 0 0 1 3.234 0 .5.5 0 1 1-.097.996 15.7 15.7 0 0 0-3.04 0 .5.5 0 0 1-.097-.996m5.785.962a.5.5 0 0 1 .623-.334c1.044.317 2.044.734 2.989 1.24a.5.5 0 1 1-.472.881 15.4 15.4 0 0 0-2.807-1.164.5.5 0 0 1-.333-.623m-8.336 0a.5.5 0 0 1-.333.623c-.98.297-1.92.689-2.807 1.164a.5.5 0 0 1-.472-.881 16.4 16.4 0 0 1 2.989-1.24.5.5 0 0 1 .623.334m13.932 2.774a.5.5 0 0 1 .704-.069 16.6 16.6 0 0 1 2.287 2.287.5.5 0 0 1-.773.635 15.6 15.6 0 0 0-2.149-2.15.5.5 0 0 1-.069-.703m-19.528 0a.5.5 0 0 1-.069.704 15.6 15.6 0 0 0-2.15 2.149.5.5 0 0 1-.772-.635 16.6 16.6 0 0 1 2.287-2.287.5.5 0 0 1 .704.069m23.641 4.702a.5.5 0 0 1 .677.204c.506.945.923 1.945 1.24 2.989a.5.5 0 1 1-.957.29 15.4 15.4 0 0 0-1.164-2.807.5.5 0 0 1 .204-.676m-27.755 0a.5.5 0 0 1 .205.676 15.4 15.4 0 0 0-1.164 2.807.5.5 0 1 1-.957-.29 16.4 16.4 0 0 1 1.24-2.989.5.5 0 0 1 .676-.204m29.754 5.918a.5.5 0 0 1 .546.449 16.7 16.7 0 0 1 0 3.234.5.5 0 1 1-.996-.097 15.7 15.7 0 0 0 0-3.04.5.5 0 0 1 .45-.547Zm-31.752 0a.5.5 0 0 1 .45.546 15.7 15.7 0 0 0 0 3.04.5.5 0 0 1-.996.097 16.7 16.7 0 0 1 0-3.234.5.5 0 0 1 .546-.45Zm31.336 6.234a.5.5 0 0 1 .334.623 16.4 16.4 0 0 1-1.24 2.989.5.5 0 1 1-.881-.472c.475-.888.867-1.827 1.163-2.807a.5.5 0 0 1 .624-.333m-30.92 0a.5.5 0 0 1 .623.333c.297.98.689 1.92 1.164 2.807a.5.5 0 0 1-.881.472 16.4 16.4 0 0 1-1.24-2.989.5.5 0 0 1 .334-.623m28.146 5.596a.5.5 0 0 1 .069.704 16.6 16.6 0 0 1-2.287 2.287.5.5 0 0 1-.635-.773 15.6 15.6 0 0 0 2.15-2.149.5.5 0 0 1 .703-.069m-25.372 0a.5.5 0 0 1 .704.069 15.6 15.6 0 0 0 2.149 2.15.5.5 0 0 1-.635.772 16.6 16.6 0 0 1-2.287-2.287.5.5 0 0 1 .069-.704m4.702 4.113a.5.5 0 0 1 .676-.204c.888.475 1.827.867 2.807 1.163a.5.5 0 1 1-.29.958 16.4 16.4 0 0 1-2.989-1.24.5.5 0 0 1-.204-.677m15.968 0a.5.5 0 0 1-.204.677c-.945.506-1.945.923-2.989 1.24a.5.5 0 1 1-.29-.957c.98-.297 1.92-.689 2.807-1.164a.5.5 0 0 1 .676.204m-10.05 1.999a.5.5 0 0 1 .546-.45 15.7 15.7 0 0 0 3.04 0 .5.5 0 0 1 .097.996 16.7 16.7 0 0 1-3.234 0 .5.5 0 0 1-.45-.546Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "ie14be4-a",
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
    id: "ie14be4-c",
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
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "ie14be4-b",
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
var ForwardRef = /*#__PURE__*/forwardRef(SvgGenericPlaceholder64Item);

export { ForwardRef as default };
