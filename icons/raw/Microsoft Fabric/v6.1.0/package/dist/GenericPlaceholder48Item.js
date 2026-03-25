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
var SvgGenericPlaceholder48Item = function SvgGenericPlaceholder48Item(_a, ref) {
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
    fill: "url(#ic03523-a)",
    d: "M5 10a5 5 0 0 1 5-5h28a5 5 0 0 1 5 5v28a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ic03523-b)",
    fillOpacity: 0.2,
    d: "M5 10a5 5 0 0 1 5-5h28a5 5 0 0 1 5 5v28a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ic03523-c)",
    fillRule: "evenodd",
    d: "M38 6H10a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V10a4 4 0 0 0-4-4M10 5a5 5 0 0 0-5 5v28a5 5 0 0 0 5 5h28a5 5 0 0 0 5-5V10a5 5 0 0 0-5-5z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7A7A7A",
    fillRule: "evenodd",
    d: "M22.368 11.606a12.6 12.6 0 0 1 3.264 0 .5.5 0 0 1-.13.991 11.6 11.6 0 0 0-3.005 0 .5.5 0 1 1-.129-.991m5.764 1.113a.5.5 0 0 1 .653-.27c1.017.421 1.965.973 2.825 1.634a.5.5 0 0 1-.61.793 11.5 11.5 0 0 0-2.598-1.504.5.5 0 0 1-.27-.653m-8.264 0a.5.5 0 0 1-.27.653c-.935.388-1.807.895-2.599 1.504a.5.5 0 0 1-.61-.793 12.5 12.5 0 0 1 2.826-1.634.5.5 0 0 1 .653.27m13.348 3.58a.5.5 0 0 1 .701.09 12.5 12.5 0 0 1 1.634 2.826.5.5 0 0 1-.923.383A11.5 11.5 0 0 0 33.124 17a.5.5 0 0 1 .092-.7Zm-18.432 0a.5.5 0 0 1 .092.7 11.5 11.5 0 0 0-1.504 2.6.5.5 0 1 1-.923-.384 12.5 12.5 0 0 1 1.634-2.825.5.5 0 0 1 .7-.092Zm21.05 5.638a.5.5 0 0 1 .56.431 12.6 12.6 0 0 1 0 3.264.5.5 0 0 1-.991-.13 11.6 11.6 0 0 0 0-3.005.5.5 0 0 1 .43-.56Zm-23.668 0a.5.5 0 0 1 .431.56 11.6 11.6 0 0 0 0 3.006.5.5 0 1 1-.991.129 12.6 12.6 0 0 1 0-3.264.5.5 0 0 1 .56-.431m23.115 6.195a.5.5 0 0 1 .27.653 12.5 12.5 0 0 1-1.634 2.825.5.5 0 0 1-.793-.61 11.5 11.5 0 0 0 1.504-2.598.5.5 0 0 1 .653-.27m-22.562 0a.5.5 0 0 1 .653.27c.388.935.895 1.807 1.504 2.599a.5.5 0 0 1-.793.61 12.5 12.5 0 0 1-1.634-2.826.5.5 0 0 1 .27-.653m18.983 5.084a.5.5 0 0 1-.092.701 12.5 12.5 0 0 1-2.825 1.634.5.5 0 0 1-.383-.923A11.5 11.5 0 0 0 31 33.124a.5.5 0 0 1 .7.092Zm-15.404 0a.5.5 0 0 1 .701-.092 11.5 11.5 0 0 0 2.6 1.504.5.5 0 1 1-.384.923 12.5 12.5 0 0 1-2.825-1.634.5.5 0 0 1-.092-.7Zm9.765 2.618a.5.5 0 0 1-.431.56 12.6 12.6 0 0 1-3.264 0 .5.5 0 0 1 .13-.991 11.6 11.6 0 0 0 3.005 0 .5.5 0 0 1 .56.43Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "ic03523-a",
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
    id: "ic03523-c",
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
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "ic03523-b",
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
var ForwardRef = /*#__PURE__*/forwardRef(SvgGenericPlaceholder48Item);

export { ForwardRef as default };
