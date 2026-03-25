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
var SvgFolder20NonItem = function SvgFolder20NonItem(_a, ref) {
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
    d: "M10 5 8.586 3.586A2 2 0 0 0 7.172 3H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FFD75E",
    d: "M10 5 8.586 6.414A2 2 0 0 1 7.172 7H1v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i803134-a)",
    d: "M10 5 8.586 6.414A2 2 0 0 1 7.172 7H1v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#BF5712",
    d: "M2 16.5c-.373 0-.71-.142-.973-.367.06.492.477.863.973.867h16c.505 0 .905-.38.973-.867-.262.226-.6.367-.973.367z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M8.836 6.914 10.75 5H10L8.586 6.414A2 2 0 0 1 7.172 7H1v.5h6.422a2 2 0 0 0 1.414-.586",
    opacity: 0.4
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "i803134-a",
    x1: 1,
    x2: 1,
    y1: 5,
    y2: 17,
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
var ForwardRef = /*#__PURE__*/forwardRef(SvgFolder20NonItem);

export { ForwardRef as default };
