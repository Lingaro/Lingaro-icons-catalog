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
var SvgPlanning64Item = function SvgPlanning64Item(_a, ref) {
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
    fill: "url(#id7301e-i23abb4-paint0_linear_65420_301)",
    d: "M6 13a7 7 0 0 1 7-7h38a7 7 0 0 1 7 7v38a7 7 0 0 1-7 7H13a7 7 0 0 1-7-7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#id7301e-i23abb4-paint1_radial_65420_301)",
    fillOpacity: 0.2,
    d: "M6 13a7 7 0 0 1 7-7h38a7 7 0 0 1 7 7v38a7 7 0 0 1-7 7H13a7 7 0 0 1-7-7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#id7301e-i23abb4-paint2_linear_65420_301)",
    fillRule: "evenodd",
    d: "M51 7H13a6 6 0 0 0-6 6v38a6 6 0 0 0 6 6h38a6 6 0 0 0 6-6V13a6 6 0 0 0-6-6M13 6a7 7 0 0 0-7 7v38a7 7 0 0 0 7 7h38a7 7 0 0 0 7-7V13a7 7 0 0 0-7-7z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#id7301e-i23abb4-paint3_linear_65420_301)",
    d: "M32 19c1.74 0 3.4.342 4.916.962l-.773.773A12 12 0 0 0 32 20c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12c0-1.457-.261-2.852-.736-4.144l.773-.773C44.657 28.6 45 30.26 45 32c0 7.18-5.82 13-13 13s-13-5.82-13-13 5.82-13 13-13"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#id7301e-i23abb4-paint4_linear_65420_301)",
    d: "M32 25c.881 0 1.724.164 2.5.46v1.085a6 6 0 1 0 2.954 2.955h1.085A7 7 0 1 1 32 25"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#id7301e-i23abb4-paint5_linear_65420_301)",
    d: "M39.147 19.147A.5.5 0 0 1 40 19.5V24h4.5a.5.5 0 0 1 .353.854l-3.5 3.5A.5.5 0 0 1 41 28.5h-4.793l-2.486 2.485a2 2 0 1 1-.707-.707l2.486-2.485V23a.5.5 0 0 1 .147-.354z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#id7301e-i23abb4-paint6_linear_65420_301)",
    d: "M41.376 23H41v-.377q.192.185.376.377"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "id7301e-i23abb4-paint0_linear_65420_301",
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
    id: "id7301e-i23abb4-paint1_radial_65420_301",
    cx: 0,
    cy: 0,
    r: 1,
    gradientTransform: "matrix(27.4444 41.1667 -41.1667 15.4375 22.611 19.542)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.177,
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#B8B8B8"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "id7301e-i23abb4-paint2_linear_65420_301",
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
    id: "id7301e-i23abb4-paint3_linear_65420_301",
    x1: 19,
    x2: 45,
    y1: 19,
    y2: 45,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#7751B8"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#5A409C"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "id7301e-i23abb4-paint4_linear_65420_301",
    x1: 19,
    x2: 45,
    y1: 19,
    y2: 45,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#7751B8"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#5A409C"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "id7301e-i23abb4-paint5_linear_65420_301",
    x1: 19,
    x2: 45,
    y1: 19,
    y2: 45,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#7751B8"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#5A409C"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "id7301e-i23abb4-paint6_linear_65420_301",
    x1: 19,
    x2: 45,
    y1: 19,
    y2: 45,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#7751B8"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#5A409C"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgPlanning64Item);

export { ForwardRef as default };
