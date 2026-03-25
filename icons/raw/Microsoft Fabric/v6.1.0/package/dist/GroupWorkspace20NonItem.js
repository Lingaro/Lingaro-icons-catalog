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
var SvgGroupWorkspace20NonItem = function SvgGroupWorkspace20NonItem(_a, ref) {
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
    fill: "url(#i6f4896-a)",
    d: "M5 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0m2-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4.779 2.584a2 2 0 1 1 2.442-3.168 2 2 0 0 1-2.442 3.168M13 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2M4.5 8h2.67c-.11.313-.17.65-.17 1H4.5a.5.5 0 0 0-.5.5c0 .817.325 1.423.838 1.835.236.19.519.343.839.454a2.5 2.5 0 0 0-.532.869 3.7 3.7 0 0 1-.933-.543C3.46 11.51 3 10.616 3 9.5A1.5 1.5 0 0 1 4.5 8m3.768 0a2 2 0 1 0 3.466 2 2 2 0 0 0-3.466-2m1.508.025A1.003 1.003 0 0 1 11 9a1 1 0 1 1-1.224-.975m5.386 3.31a2.8 2.8 0 0 1-.839.454 2.5 2.5 0 0 1 .531.869c.34-.139.655-.32.934-.543C16.54 11.51 17 10.616 17 9.5A1.5 1.5 0 0 0 15.5 8h-2.67c.11.313.17.65.17 1h2.5a.5.5 0 0 1 .5.5c0 .817-.325 1.423-.838 1.835M12.5 12a1.5 1.5 0 0 1 1.5 1.5c0 1.116-.459 2.01-1.212 2.615-.741.595-1.735.885-2.788.885s-2.047-.29-2.788-.885C6.46 15.51 6 14.616 6 13.5A1.496 1.496 0 0 1 7.5 12zm0 1h-5a.5.5 0 0 0-.5.5c0 .817.325 1.423.838 1.835C8.364 15.757 9.12 16 10 16s1.636-.243 2.162-.665c.513-.412.838-1.018.838-1.835a.5.5 0 0 0-.5-.5"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "i6f4896-a",
    x1: 3,
    x2: 17,
    y1: 3,
    y2: 17,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#209782"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#0C695A"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgGroupWorkspace20NonItem);

export { ForwardRef as default };
