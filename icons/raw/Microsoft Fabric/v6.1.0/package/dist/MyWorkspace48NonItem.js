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
var SvgMyWorkspace48NonItem = function SvgMyWorkspace48NonItem(_a, ref) {
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
    fill: "url(#i50366d-a)",
    fillRule: "evenodd",
    d: "M24 5.001a9.5 9.5 0 1 0 0 19 9.5 9.5 0 1 0 0-19m-8.5 9.5a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i50366d-b)",
    fillRule: "evenodd",
    d: "M24 43c-4.531 0-8.7-1.166-11.78-3.126C9.157 37.924 7 35.057 7 31.667v-.709A4.96 4.96 0 0 1 11.958 26h24.084A4.96 4.96 0 0 1 41 30.958v.709c0 3.39-2.157 6.258-5.22 8.207C32.7 41.834 28.53 43 24 43m-11.243-3.97C9.864 37.19 8 34.596 8 31.667v-.709A3.96 3.96 0 0 1 11.958 27h24.084A3.96 3.96 0 0 1 40 30.958v.709c0 2.929-1.864 5.522-4.757 7.363C32.346 40.874 28.37 42 24 42s-8.346-1.127-11.243-2.97",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "i50366d-a",
    x1: 7,
    x2: 44.765,
    y1: 5.001,
    y2: 38.792,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#209782"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#0C695A"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i50366d-b",
    x1: 7,
    x2: 44.765,
    y1: 5.001,
    y2: 38.792,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#209782"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#0C695A"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgMyWorkspace48NonItem);

export { ForwardRef as default };
