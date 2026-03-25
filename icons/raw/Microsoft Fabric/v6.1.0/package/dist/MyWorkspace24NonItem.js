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
var SvgMyWorkspace24NonItem = function SvgMyWorkspace24NonItem(_a, ref) {
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
    fill: "url(#iac84d9-a)",
    fillRule: "evenodd",
    d: "M12.503 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10m-4 5a4 4 0 1 1 8 0 4 4 0 0 1-8 0",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#iac84d9-b)",
    fillRule: "evenodd",
    d: "M18.254 14a2.25 2.25 0 0 1 2.249 2.249v.918a2.75 2.75 0 0 1-.513 1.6C18.444 20.93 15.92 22 12.5 22s-5.944-1.072-7.486-3.236a2.75 2.75 0 0 1-.51-1.596v-.92A2.25 2.25 0 0 1 6.751 14h11.502Zm0 1c.69 0 1.249.56 1.249 1.249v.918c0 .365-.114.72-.326 1.018C17.873 20.007 15.707 21 12.5 21c-3.209 0-5.374-.995-6.672-2.817a1.75 1.75 0 0 1-.325-1.015v-.92c0-.69.56-1.249 1.249-1.249h11.502Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "iac84d9-a",
    x1: 4.503,
    x2: 24.016,
    y1: 2,
    y2: 17.609,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#209782"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#0C695A"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "iac84d9-b",
    x1: 4.503,
    x2: 24.016,
    y1: 2,
    y2: 17.609,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#209782"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#0C695A"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgMyWorkspace24NonItem);

export { ForwardRef as default };
