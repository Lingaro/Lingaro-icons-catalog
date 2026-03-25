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
var SvgPipeline24Item = function SvgPipeline24Item(_a, ref) {
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
    fill: "url(#i00e3e0-a)",
    d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i00e3e0-b)",
    fillOpacity: 0.2,
    d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i00e3e0-c)",
    fillRule: "evenodd",
    d: "M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i00e3e0-d)",
    fillRule: "evenodd",
    d: "M7.5 6.75A1.5 1.5 0 0 0 6 8.25v8a1.5 1.5 0 0 0 3 0V15h6v1.25a1.5 1.5 0 0 0 3 0v-8a1.5 1.5 0 0 0-3 0V9H9v-.75a1.5 1.5 0 0 0-1.5-1.5m.5 9.5v-8a.5.5 0 0 0-1 0v8a.5.5 0 0 0 1 0m9-8v8a.5.5 0 0 1-1 0v-8a.5.5 0 0 1 1 0",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "i00e3e0-a",
    x1: 7.556,
    x2: 10.085,
    y1: 2,
    y2: 22.239,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#EBEBEB"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i00e3e0-c",
    x1: 8.458,
    x2: 11.151,
    y1: 2,
    y2: 22.197,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#BBB"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#888"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i00e3e0-d",
    x1: 6,
    x2: 16.959,
    y1: 6.75,
    y2: 18.705,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#4BA446"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#3F7D35"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "i00e3e0-b",
    cx: 0,
    cy: 0,
    r: 1,
    gradientTransform: "rotate(56.31 -2.54 11.442)scale(19.0293 16.4677)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.177,
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#B8B8B8"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgPipeline24Item);

export { ForwardRef as default };
