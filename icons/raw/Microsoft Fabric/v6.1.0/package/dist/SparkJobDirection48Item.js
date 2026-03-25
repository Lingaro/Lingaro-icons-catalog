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
var SvgSparkJobDirection48Item = function SvgSparkJobDirection48Item(_a, ref) {
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
    fill: "url(#if3a223-a)",
    d: "M5 10a5 5 0 0 1 5-5h28a5 5 0 0 1 5 5v28a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#if3a223-b)",
    fillOpacity: 0.2,
    d: "M5 10a5 5 0 0 1 5-5h28a5 5 0 0 1 5 5v28a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#if3a223-c)",
    fillRule: "evenodd",
    d: "M38 6H10a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V10a4 4 0 0 0-4-4M10 5a5 5 0 0 0-5 5v28a5 5 0 0 0 5 5h28a5 5 0 0 0 5-5V10a5 5 0 0 0-5-5z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#if3a223-d)",
    d: "M24 12a.75.75 0 0 1 .75.75v9.95l8.617-4.974a.75.75 0 0 1 .75 1.299L25.5 24l8.617 4.976a.75.75 0 0 1-.75 1.299l-8.617-4.976v9.951a.75.75 0 0 1-1.5 0v-9.951l-8.618 4.976a.75.75 0 0 1-.75-1.3L22.5 24l-8.618-4.975a.75.75 0 0 1 .75-1.3l8.618 4.976V12.75A.75.75 0 0 1 24 12"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "if3a223-a",
    x1: 15.556,
    x2: 20.362,
    y1: 5,
    y2: 43.455,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#EBEBEB"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "if3a223-c",
    x1: 17.271,
    x2: 22.387,
    y1: 5,
    y2: 43.373,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#BBB"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#888"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "if3a223-d",
    x1: 13.507,
    x2: 37.292,
    y1: 12,
    y2: 32.798,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#4BA446"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#3F7D35"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "if3a223-b",
    cx: 0,
    cy: 0,
    r: 1,
    gradientTransform: "rotate(56.31 -5.347 23.46)scale(36.1557 31.2886)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.177,
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#B8B8B8"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSparkJobDirection48Item);

export { ForwardRef as default };
