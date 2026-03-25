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
var SvgDashboard24Item = function SvgDashboard24Item(_a, ref) {
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
    fill: "url(#i81f510-paint0_linear_55562_408)",
    d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i81f510-paint1_radial_55562_408)",
    fillOpacity: 0.2,
    d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i81f510-paint2_linear_55562_408)",
    fillRule: "evenodd",
    d: "M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 6,
    fill: "url(#i81f510-paint3_linear_55562_408)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#F4D58A",
    d: "M12 8c-2.206 0-4 1.794-4 4 0 1.108.447 2.105 1.18 2.826a.5.5 0 1 0 .7-.712A2.94 2.94 0 0 1 9 12a3.004 3.004 0 0 1 3.404-2.974.5.5 0 0 0 .132-.992A4 4 0 0 0 12 8"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#F4D58A",
    d: "M15.064 8.864a.375.375 0 0 0-.476-.008l-.133.105a221 221 0 0 0-1.432 1.149c-.4.323-.809.657-1.136.93a22 22 0 0 0-.42.36 3 3 0 0 0-.257.245 1.125 1.125 0 0 0 1.711 1.461c.054-.063.128-.174.203-.292.08-.127.179-.289.288-.471.22-.366.485-.822.742-1.268a228 228 0 0 0 .91-1.594l.083-.147a.375.375 0 0 0-.083-.47"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "i81f510-paint0_linear_55562_408",
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
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "i81f510-paint1_radial_55562_408",
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
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i81f510-paint2_linear_55562_408",
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
    id: "i81f510-paint3_linear_55562_408",
    x1: 6,
    x2: 18,
    y1: 6,
    y2: 18,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C28400"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#A86500"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDashboard24Item);

export { ForwardRef as default };
