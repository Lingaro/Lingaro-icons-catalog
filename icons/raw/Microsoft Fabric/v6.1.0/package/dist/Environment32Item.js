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
var SvgEnvironment32Item = function SvgEnvironment32Item(_a, ref) {
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
    fill: "url(#ib20bc3-a)",
    d: "M29 16c0 7.18-5.82 13-13 13S3 23.18 3 16 8.82 3 16 3s13 5.82 13 13"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ib20bc3-b)",
    fillOpacity: 0.2,
    d: "M29 16c0 7.18-5.82 13-13 13S3 23.18 3 16 8.82 3 16 3s13 5.82 13 13"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ib20bc3-c)",
    fillRule: "evenodd",
    d: "M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12m0 1c7.18 0 13-5.82 13-13S23.18 3 16 3 3 8.82 3 16s5.82 13 13 13",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ib20bc3-d)",
    d: "M19.23 10.026a.75.75 0 1 0-1.39-.564l-5.07 12.512a.75.75 0 1 0 1.39.563z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ib20bc3-e)",
    d: "M11.53 12.22a.75.75 0 0 1 0 1.06L8.81 16l2.72 2.72a.75.75 0 1 1-1.06 1.06l-3.25-3.25a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ib20bc3-f)",
    d: "M20.5 19.78a.75.75 0 0 1 0-1.06L23.22 16l-2.72-2.72a.75.75 0 1 1 1.062-1.06l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.061 0Z"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "ib20bc3-a",
    x1: 10.222,
    x2: 13.511,
    y1: 3,
    y2: 29.311,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#EBEBEB"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "ib20bc3-c",
    x1: 11.396,
    x2: 14.897,
    y1: 3,
    y2: 29.256,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#BBB"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#888"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "ib20bc3-d",
    x1: 7,
    x2: 20.578,
    y1: 8.994,
    y2: 26.466,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#4BA446"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#3F7D35"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "ib20bc3-e",
    x1: 7,
    x2: 20.578,
    y1: 8.994,
    y2: 26.467,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#4BA446"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#3F7D35"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "ib20bc3-f",
    x1: 7,
    x2: 20.578,
    y1: 8.994,
    y2: 26.467,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#4BA446"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#3F7D35"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "ib20bc3-b",
    cx: 0,
    cy: 0,
    r: 1,
    gradientTransform: "matrix(13.7222 20.58336 -17.81255 11.875 11.306 9.771)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.177,
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#B8B8B8"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgEnvironment32Item);

export { ForwardRef as default };
