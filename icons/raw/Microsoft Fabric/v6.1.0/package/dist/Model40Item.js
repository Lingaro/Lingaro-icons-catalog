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
var SvgModel40Item = function SvgModel40Item(_a, ref) {
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
    fill: "url(#i677244-a)",
    d: "M4 8a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i677244-b)",
    fillOpacity: 0.2,
    d: "M4 8a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i677244-c)",
    fillRule: "evenodd",
    d: "M32 5H8a3 3 0 0 0-3 3v24a3 3 0 0 0 3 3h24a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3M8 4a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i677244-d)",
    fillRule: "evenodd",
    d: "M22.4 12.431a4.5 4.5 0 0 0-4.8 0l-4.198 2.647a2 2 0 0 0-.43.365h-.003v.004a2 2 0 0 0-.5 1.323v1.47a.5.5 0 0 0 .031.175v3.786a3.5 3.5 0 0 0 1.764 3.04l5.114 2.922a.74.74 0 0 0 .622.056.74.74 0 0 0 .622-.056l5.114-2.923a3.5 3.5 0 0 0 1.764-3.039v-4.288a.5.5 0 0 0 .031-.174v-.97a2 2 0 0 0-.5-1.322v-.004h-.003a2 2 0 0 0-.43-.365zm-2.9 9.252a2.5 2.5 0 0 0-1.26-2.17l-4.74-2.709v5.397a2.5 2.5 0 0 0 1.26 2.171l4.74 2.709zm1 5.398 4.74-2.709a2.5 2.5 0 0 0 1.26-2.17v-5.398l-4.74 2.709a2.5 2.5 0 0 0-1.26 2.17z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "i677244-a",
    x1: 12.889,
    x2: 16.937,
    y1: 4,
    y2: 36.383,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#EBEBEB"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i677244-c",
    x1: 14.333,
    x2: 18.642,
    y1: 4,
    y2: 36.314,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#BBB"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#888"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i677244-d",
    x1: 12.469,
    x2: 28.923,
    y1: 11.737,
    y2: 26.735,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#4BA446"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#3F7D35"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "i677244-b",
    cx: 0,
    cy: 0,
    r: 1,
    gradientTransform: "rotate(56.31 -4.411 19.454)scale(30.4469 26.3483)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.177,
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#B8B8B8"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgModel40Item);

export { ForwardRef as default };
