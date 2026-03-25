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
var SvgExploration48Item = function SvgExploration48Item(_a, ref) {
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
    fill: "url(#i193093-a)",
    d: "M5 10a5 5 0 0 1 5-5h28a5 5 0 0 1 5 5v28a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i193093-b)",
    fillOpacity: 0.2,
    d: "M5 10a5 5 0 0 1 5-5h28a5 5 0 0 1 5 5v28a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i193093-c)",
    fillRule: "evenodd",
    d: "M38 6H10a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V10a4 4 0 0 0-4-4M10 5a5 5 0 0 0-5 5v28a5 5 0 0 0 5 5h28a5 5 0 0 0 5-5V10a5 5 0 0 0-5-5z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i193093-d)",
    d: "M18.5 33a4.5 4.5 0 0 0 4.5-4.5V24h2v4.53a4.5 4.5 0 0 0 9-.03v-.436q0-.137-.026-.272l-1.953-9.898A3.59 3.59 0 0 0 28.5 15a3.5 3.5 0 0 0-3.5 3.5V20h-2v-1.5a3.5 3.5 0 0 0-3.5-3.5 3.42 3.42 0 0 0-3.348 2.716L14.03 27.779a1.4 1.4 0 0 0-.03.289v.432a4.5 4.5 0 0 0 4.5 4.5m0-1.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6m11-6a3 3 0 0 1 3 3v.02a3 3 0 1 1-3-3.02"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "i193093-a",
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
    id: "i193093-c",
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
    id: "i193093-d",
    x1: 14,
    x2: 31.901,
    y1: 15,
    y2: 34.889,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C28400"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#A86500"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "i193093-b",
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
var ForwardRef = /*#__PURE__*/forwardRef(SvgExploration48Item);

export { ForwardRef as default };
