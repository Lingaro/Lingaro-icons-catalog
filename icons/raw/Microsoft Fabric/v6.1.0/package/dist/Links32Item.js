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
var SvgLinks32Item = function SvgLinks32Item(_a, ref) {
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
    fill: "url(#i16906b-a)",
    d: "M3 6.5A3.5 3.5 0 0 1 6.5 3h19A3.5 3.5 0 0 1 29 6.5v19a3.5 3.5 0 0 1-3.5 3.5h-19A3.5 3.5 0 0 1 3 25.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i16906b-b)",
    fillOpacity: 0.2,
    d: "M3 6.5A3.5 3.5 0 0 1 6.5 3h19A3.5 3.5 0 0 1 29 6.5v19a3.5 3.5 0 0 1-3.5 3.5h-19A3.5 3.5 0 0 1 3 25.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i16906b-c)",
    fillRule: "evenodd",
    d: "M25.5 4h-19A2.5 2.5 0 0 0 4 6.5v19A2.5 2.5 0 0 0 6.5 28h19a2.5 2.5 0 0 0 2.5-2.5v-19A2.5 2.5 0 0 0 25.5 4m-19-1A3.5 3.5 0 0 0 3 6.5v19A3.5 3.5 0 0 0 6.5 29h19a3.5 3.5 0 0 0 3.5-3.5v-19A3.5 3.5 0 0 0 25.5 3z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i16906b-d)",
    d: "M9 16a4.5 4.5 0 0 1 4.5-4.5h.75a.75.75 0 0 1 0 1.5h-.75a3 3 0 1 0 0 6h.75a.75.75 0 0 1 0 1.5h-.75A4.5 4.5 0 0 1 9 16"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i16906b-e)",
    d: "M23 16a4.5 4.5 0 0 1-4.5 4.5h-.75a.75.75 0 0 1 0-1.5h.75a3 3 0 1 0 0-6h-.75a.75.75 0 0 1 0-1.5h.75A4.5 4.5 0 0 1 23 16"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i16906b-f)",
    d: "M13.75 15.25a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "i16906b-a",
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
    id: "i16906b-c",
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
    id: "i16906b-d",
    x1: 9,
    x2: 17.188,
    y1: 11.5,
    y2: 24.236,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#EB6D00"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#B85500"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i16906b-e",
    x1: 9,
    x2: 17.188,
    y1: 11.5,
    y2: 24.236,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#EB6D00"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#B85500"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i16906b-f",
    x1: 9,
    x2: 17.188,
    y1: 11.5,
    y2: 24.236,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#EB6D00"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#B85500"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "i16906b-b",
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
var ForwardRef = /*#__PURE__*/forwardRef(SvgLinks32Item);

export { ForwardRef as default };
