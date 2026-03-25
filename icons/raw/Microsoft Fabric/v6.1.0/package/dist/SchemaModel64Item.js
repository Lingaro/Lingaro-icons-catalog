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
var SvgSchemaModel64Item = function SvgSchemaModel64Item(_a, ref) {
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
    fill: "url(#i5b1b5d-a)",
    d: "M6 13a7 7 0 0 1 7-7h38a7 7 0 0 1 7 7v38a7 7 0 0 1-7 7H13a7 7 0 0 1-7-7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i5b1b5d-b)",
    fillOpacity: 0.2,
    d: "M6 13a7 7 0 0 1 7-7h38a7 7 0 0 1 7 7v38a7 7 0 0 1-7 7H13a7 7 0 0 1-7-7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i5b1b5d-c)",
    fillRule: "evenodd",
    d: "M51 7H13a6 6 0 0 0-6 6v38a6 6 0 0 0 6 6h38a6 6 0 0 0 6-6V13a6 6 0 0 0-6-6M13 6a7 7 0 0 0-7 7v38a7 7 0 0 0 7 7h38a7 7 0 0 0 7-7V13a7 7 0 0 0-7-7z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i5b1b5d-d)",
    d: "M41 21a2 2 0 0 0-2-2H25a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h3.409l-4.978 7H21a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-1.115l4.978-7h2.274l4.978 7H37a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-2.431l-4.978-7H39a2 2 0 0 0 2-2z"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "i5b1b5d-a",
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
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i5b1b5d-c",
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
    id: "i5b1b5d-d",
    x1: 19,
    x2: 45,
    y1: 19,
    y2: 45,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#4BA446"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#3F7D35"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "i5b1b5d-b",
    cx: 0,
    cy: 0,
    r: 1,
    gradientTransform: "matrix(27.4444 41.16672 -35.62501 23.74995 22.61 19.541)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.177,
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#B8B8B8"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSchemaModel64Item);

export { ForwardRef as default };
