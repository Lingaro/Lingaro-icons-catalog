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
var SvgScorecard20Item = function SvgScorecard20Item(_a, ref) {
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
    fill: "url(#ibae3c2-a)",
    d: "M2 4.5A2.5 2.5 0 0 1 4.5 2h11A2.5 2.5 0 0 1 18 4.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 15.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ibae3c2-b)",
    fillOpacity: 0.2,
    d: "M2 4.5A2.5 2.5 0 0 1 4.5 2h11A2.5 2.5 0 0 1 18 4.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 15.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ibae3c2-c)",
    fillRule: "evenodd",
    d: "M15.5 3h-11A1.5 1.5 0 0 0 3 4.5v11A1.5 1.5 0 0 0 4.5 17h11a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 15.5 3m-11-1A2.5 2.5 0 0 0 2 4.5v11A2.5 2.5 0 0 0 4.5 18h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 15.5 2z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ibae3c2-d)",
    fillRule: "evenodd",
    d: "M8.059 5c-.565 0-1.027.443-1.057 1h-.645C5.607 6 5 6.608 5 7.357A2.643 2.643 0 0 0 7.643 10h.12a3 3 0 0 0 1.737.959V12.5h-.9A1.6 1.6 0 0 0 7 14.1c0 .22.18.4.4.4h5.2a.4.4 0 0 0 .4-.4 1.6 1.6 0 0 0-1.6-1.6h-.9v-1.541A3 3 0 0 0 12.236 10h.121A2.643 2.643 0 0 0 15 7.357C15 6.607 14.392 6 13.643 6h-.645c-.03-.557-.492-1-1.057-1H8.06ZM13 7v1a3 3 0 0 1-.145.923A1.64 1.64 0 0 0 14 7.357.357.357 0 0 0 13.643 7zM7.145 8.923A3 3 0 0 1 7 8V7h-.643A.357.357 0 0 0 6 7.357c0 .734.48 1.355 1.145 1.566",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "ibae3c2-a",
    x1: 6.444,
    x2: 8.468,
    y1: 2,
    y2: 18.192,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#EBEBEB"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "ibae3c2-c",
    x1: 7.167,
    x2: 9.321,
    y1: 2,
    y2: 18.157,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#BBB"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#888"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "ibae3c2-d",
    x1: 5,
    x2: 14.488,
    y1: 5,
    y2: 14.987,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C28400"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#A86500"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "ibae3c2-b",
    cx: 0,
    cy: 0,
    r: 1,
    gradientTransform: "rotate(56.31 -2.206 9.727)scale(15.2234 13.1741)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.177,
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#B8B8B8"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgScorecard20Item);

export { ForwardRef as default };
