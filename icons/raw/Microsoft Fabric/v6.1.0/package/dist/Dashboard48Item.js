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
var SvgDashboard48Item = function SvgDashboard48Item(_a, ref) {
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
    fill: "url(#ieddd74-a)",
    d: "M5 10a5 5 0 0 1 5-5h28a5 5 0 0 1 5 5v28a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ieddd74-b)",
    fillOpacity: 0.2,
    d: "M5 10a5 5 0 0 1 5-5h28a5 5 0 0 1 5 5v28a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ieddd74-c)",
    fillRule: "evenodd",
    d: "M38 6H10a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V10a4 4 0 0 0-4-4M10 5a5 5 0 0 0-5 5v28a5 5 0 0 0 5 5h28a5 5 0 0 0 5-5V10a5 5 0 0 0-5-5z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ieddd74-d)",
    d: "M24 36c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#F4D58A",
    d: "M30.128 17.729a.75.75 0 0 0-.953-.017l-.265.21a498 498 0 0 0-2.864 2.297c-.8.646-1.617 1.315-2.271 1.862-.326.273-.615.519-.84.718a6 6 0 0 0-.515.492 2.25 2.25 0 1 0 3.422 2.922c.108-.127.255-.349.405-.585.161-.254.359-.578.578-.943.438-.73.97-1.644 1.483-2.534a443 443 0 0 0 1.82-3.19l.166-.293a.75.75 0 0 0-.166-.939"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#F4D58A",
    fillRule: "evenodd",
    d: "M24 16.5a7.5 7.5 0 0 0-6.118 11.84.5.5 0 1 1-.815.579 8.5 8.5 0 0 1 10.37-12.695.5.5 0 0 1-.404.914A7.5 7.5 0 0 0 24 16.5",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "ieddd74-a",
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
    id: "ieddd74-c",
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
    id: "ieddd74-d",
    x1: 12,
    x2: 36,
    y1: 12,
    y2: 36,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C28400"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#A86500"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "ieddd74-b",
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
var ForwardRef = /*#__PURE__*/forwardRef(SvgDashboard48Item);

export { ForwardRef as default };
