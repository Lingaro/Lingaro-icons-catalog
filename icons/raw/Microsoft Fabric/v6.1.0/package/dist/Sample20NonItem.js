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
var SvgSample20NonItem = function SvgSample20NonItem(_a, ref) {
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
    fill: "url(#i890dbb-a)",
    fillRule: "evenodd",
    d: "M4.5 3a.5.5 0 0 0-.5.5V12h11.617L13.07 7.757a.5.5 0 0 1 0-.514L15.617 3zM4 13v4.5a.5.5 0 0 1-1 0v-14A1.5 1.5 0 0 1 4.5 2h12a.5.5 0 0 1 .429.757L14.083 7.5l2.846 4.743A.5.5 0 0 1 16.5 13z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "i890dbb-a",
    x1: 3,
    x2: 18.858,
    y1: 2,
    y2: 15.876,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#209782"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#0C695A"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSample20NonItem);

export { ForwardRef as default };
