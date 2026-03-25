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
var SvgFolder24NonItem = function SvgFolder24NonItem(_a, ref) {
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
    d: "m12 6-1.268-1.268A2.5 2.5 0 0 0 8.964 4H2.5A1.5 1.5 0 0 0 1 5.5v13A1.5 1.5 0 0 0 2.5 20h19a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 21.5 6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FFD75E",
    d: "m12 6-1.268 1.268A2.5 2.5 0 0 1 8.964 8H1v10.5A1.5 1.5 0 0 0 2.5 20h19a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 21.5 6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i566af4-a)",
    d: "m12 6-1.268 1.268A2.5 2.5 0 0 1 8.964 8H1v10.5A1.5 1.5 0 0 0 2.5 20h19a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 21.5 6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#BF5712",
    d: "M2 19.5c-.286 0-.55-.084-.777-.223.263.432.734.723 1.277.723h19c.543 0 1.014-.291 1.277-.723A1.5 1.5 0 0 1 22 19.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M11.129 7.621 12.75 6H12l-1.268 1.268A2.5 2.5 0 0 1 8.964 8H1v.5h8.007a3 3 0 0 0 2.122-.879",
    opacity: 0.4
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "i566af4-a",
    x1: 1,
    x2: 1,
    y1: 6,
    y2: 20,
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
var ForwardRef = /*#__PURE__*/forwardRef(SvgFolder24NonItem);

export { ForwardRef as default };
