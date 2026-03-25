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
var SvgDashboard64Item = function SvgDashboard64Item(_a, ref) {
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
    fill: "url(#i75e08b-paint0_linear_41449_45688)",
    d: "M6 13a7 7 0 0 1 7-7h38a7 7 0 0 1 7 7v38a7 7 0 0 1-7 7H13a7 7 0 0 1-7-7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i75e08b-paint1_radial_41449_45688)",
    fillOpacity: 0.2,
    d: "M6 13a7 7 0 0 1 7-7h38a7 7 0 0 1 7 7v38a7 7 0 0 1-7 7H13a7 7 0 0 1-7-7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i75e08b-paint2_linear_41449_45688)",
    fillRule: "evenodd",
    d: "M51 7H13a6 6 0 0 0-6 6v38a6 6 0 0 0 6 6h38a6 6 0 0 0 6-6V13a6 6 0 0 0-6-6M13 6a7 7 0 0 0-7 7v38a7 7 0 0 0 7 7h38a7 7 0 0 0 7-7V13a7 7 0 0 0-7-7z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 32,
    cy: 32,
    r: 13.5,
    fill: "url(#i75e08b-paint3_linear_41449_45688)",
    stroke: "url(#i75e08b-paint4_linear_41449_45688)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#F4D58A",
    fillRule: "evenodd",
    d: "M31.646 22.938a8.655 8.655 0 0 0-7.285 13.33.5.5 0 0 1-.84.54 9.616 9.616 0 0 1-1.53-5.216 9.655 9.655 0 0 1 9.655-9.655c1.188 0 2.327.215 3.38.608a.5.5 0 0 1-.35.937 8.6 8.6 0 0 0-3.03-.544",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#F4D58A",
    d: "M33.58 33.88c1.55-2.46 3.12-4.94 4.64-7.39l.63-.99c.65-.98-.83-2.06-1.59-1.18l-.21.18c-.16.14-.32.27-.48.41l-1.03.88c-.71.6-1.42 1.21-2.13 1.81-.91.77-1.82 1.55-2.73 2.32l-.59.5c-3.15 2.42 1.1 6.64 3.48 3.47z"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "i75e08b-paint0_linear_41449_45688",
    x1: 20.444,
    x2: 27.022,
    y1: 6,
    y2: 58.622,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#EBEBEB"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "i75e08b-paint1_radial_41449_45688",
    cx: 0,
    cy: 0,
    r: 1,
    gradientTransform: "matrix(27.44448 41.16667 -35.62497 23.75 22.611 19.542)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.177,
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#B8B8B8"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i75e08b-paint2_linear_41449_45688",
    x1: 22.792,
    x2: 29.793,
    y1: 6,
    y2: 58.511,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#BBB"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#888"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i75e08b-paint3_linear_41449_45688",
    x1: 18,
    x2: 46,
    y1: 18,
    y2: 46,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C28400"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#A86500"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i75e08b-paint4_linear_41449_45688",
    x1: 18,
    x2: 46,
    y1: 18,
    y2: 46,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C28400"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#A86500"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDashboard64Item);

export { ForwardRef as default };
