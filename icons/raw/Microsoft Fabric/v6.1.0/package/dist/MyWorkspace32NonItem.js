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
var SvgMyWorkspace32NonItem = function SvgMyWorkspace32NonItem(_a, ref) {
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
    fill: "url(#i16587d-a)",
    fillRule: "evenodd",
    d: "M16 2.5A6.75 6.75 0 1 0 16 16a6.75 6.75 0 0 0 0-13.5m-5.75 6.75a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i16587d-b)",
    fillRule: "evenodd",
    d: "M16 30c-3.198 0-6.14-.823-8.315-2.207C5.523 26.417 4 24.393 4 22v-.5A3.5 3.5 0 0 1 7.5 18h17a3.5 3.5 0 0 1 3.5 3.5v.5c0 2.393-1.523 4.417-3.685 5.794C22.141 29.177 19.198 30 16 30m-7.778-3.05C6.23 25.682 5 23.932 5 22v-.5A2.5 2.5 0 0 1 7.5 19h17a2.5 2.5 0 0 1 2.5 2.5v.5c0 1.932-1.23 3.682-3.222 4.95C21.788 28.217 19.038 29 16 29s-5.788-.784-7.778-2.05",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "i16587d-a",
    x1: 4,
    x2: 31.247,
    y1: 2.5,
    y2: 26.279,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#209782"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#0C695A"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i16587d-b",
    x1: 4,
    x2: 31.247,
    y1: 2.5,
    y2: 26.279,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#209782"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#0C695A"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgMyWorkspace32NonItem);

export { ForwardRef as default };
