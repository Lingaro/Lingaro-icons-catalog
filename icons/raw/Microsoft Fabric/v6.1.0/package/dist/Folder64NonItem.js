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
var SvgFolder64NonItem = function SvgFolder64NonItem(_a, ref) {
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
    d: "m29.333 16-2.437-2.437c-1-1-2.357-1.563-3.772-1.563H7.334A3.333 3.333 0 0 0 4 15.333v33.334A3.333 3.333 0 0 0 7.333 52h49.334A3.333 3.333 0 0 0 60 48.667V19.333A3.333 3.333 0 0 0 56.667 16z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FFD75E",
    d: "M29.333 16 26.7 18.633A4.67 4.67 0 0 1 23.4 20H4v28.667A3.333 3.333 0 0 0 7.333 52h49.334A3.333 3.333 0 0 0 60 48.667V19.333A3.333 3.333 0 0 0 56.667 16z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i2a5c74-a)",
    d: "m29.333 16-2.437 2.437c-1 1-2.357 1.563-3.772 1.563H4v28.667A3.333 3.333 0 0 0 7.333 52h49.334A3.333 3.333 0 0 0 60 48.667V19.333A3.333 3.333 0 0 0 56.667 16z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#BF5712",
    d: "M4 47.666v1A3.333 3.333 0 0 0 7.333 52h49.334A3.333 3.333 0 0 0 60 48.666v-1A3.333 3.333 0 0 1 56.667 51H7.333A3.333 3.333 0 0 1 4 47.666"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    fillOpacity: 0.4,
    fillRule: "evenodd",
    d: "m30.752 16-3.441 3.419A5.5 5.5 0 0 1 23.453 21H4v-1h19.453a4.5 4.5 0 0 0 3.156-1.294L29.34 16h1.41Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "i2a5c74-a",
    x1: 4,
    x2: 4,
    y1: 16,
    y2: 52,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#fff",
    stopOpacity: 0.01
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.999,
    stopColor: "#FFD75E",
    stopOpacity: 0.3
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgFolder64NonItem);

export { ForwardRef as default };
