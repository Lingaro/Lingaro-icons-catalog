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
var SvgFolder40NonItem = function SvgFolder40NonItem(_a, ref) {
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
    fill: "#FFB900",
    d: "m19 10-2.12-2.12A3 3 0 0 0 14.76 7H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FFD75E",
    d: "m19 10-2.12 2.12a3 3 0 0 1-2.12.88H2v18a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i441920-a)",
    d: "m19 10-2.12 2.12a3 3 0 0 1-2.12.88H2v18a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2z",
    style: {
      mixBlendMode: "multiply"
    }
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M16.88 12.12a3 3 0 0 1-2.12.88H2v1h13.05a3.5 3.5 0 0 0 2.48-1l3-3H19z",
    opacity: 0.4
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#BF5712",
    d: "M4 33h32a2 2 0 0 0 1.92-1.43 2 2 0 0 1-1.23.43H3.32a2 2 0 0 1-1.24-.43A2 2 0 0 0 4 33"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "i441920-a",
    x1: 2,
    x2: 2,
    y1: 10,
    y2: 33,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#fff",
    stopOpacity: 0.01
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#FFD75E",
    stopOpacity: 0.3
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgFolder40NonItem);

export { ForwardRef as default };
