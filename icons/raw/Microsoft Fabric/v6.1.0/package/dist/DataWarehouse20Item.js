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
var SvgDataWarehouse20Item = function SvgDataWarehouse20Item(_a, ref) {
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
    fill: "url(#ifed2b1-a)",
    d: "M2 3.5A2.5 2.5 0 0 1 4.5 1h11A2.5 2.5 0 0 1 18 3.5v13a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 16.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ifed2b1-b)",
    fillOpacity: 0.2,
    d: "M2 3.5A2.5 2.5 0 0 1 4.5 1h11A2.5 2.5 0 0 1 18 3.5v13a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 16.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ifed2b1-c)",
    fillRule: "evenodd",
    d: "M15.5 2h-11A1.5 1.5 0 0 0 3 3.5v13A1.5 1.5 0 0 0 4.5 18h11a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 15.5 2m-11-1A2.5 2.5 0 0 0 2 3.5v13A2.5 2.5 0 0 0 4.5 19h11a2.5 2.5 0 0 0 2.5-2.5v-13A2.5 2.5 0 0 0 15.5 1z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ifed2b1-d)",
    d: "M9.577 15H13.5a1.5 1.5 0 0 0 1.5-1.5V9.668a1.5 1.5 0 0 0-.496-1.115l-3.5-3.15a1.5 1.5 0 0 0-2.007 0l-3.5 3.15A1.5 1.5 0 0 0 5 9.668V13.5A1.5 1.5 0 0 0 6.5 15h3.923"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#B4CDF8",
    d: "M7 10.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m3.75-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m3 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-3 3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m2.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7.75 13a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "ifed2b1-a",
    x1: 6.444,
    x2: 8.996,
    y1: 1,
    y2: 19.141,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#EBEBEB"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "ifed2b1-c",
    x1: 7.167,
    x2: 9.881,
    y1: 1,
    y2: 19.093,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#BBB"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#888"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "ifed2b1-d",
    x1: 5,
    x2: 15.488,
    y1: 4.5,
    y2: 14.488,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#3477EA"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#1D53A4"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "ifed2b1-b",
    cx: 0,
    cy: 0,
    r: 1,
    gradientTransform: "matrix(8.44455 14.25 -11.71825 6.94424 7.111 5.687)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.177,
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#B8B8B8"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataWarehouse20Item);

export { ForwardRef as default };
