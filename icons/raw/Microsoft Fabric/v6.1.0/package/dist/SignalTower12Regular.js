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
var SvgSignalTower12Regular = function SvgSignalTower12Regular(_a, ref) {
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
    d: "M9.913 5.195a2.75 2.75 0 0 0 0-3.89.5.5 0 1 1 .707-.707 3.75 3.75 0 0 1 0 5.304.5.5 0 0 1-.707-.707"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.239 4.304a1.49 1.49 0 0 0 0-2.108.5.5 0 1 1 .707-.707 2.49 2.49 0 0 1 0 3.522.5.5 0 0 1-.707-.707m-3.105.139a1.375 1.375 0 1 1 1.732 0l2.348 5.871a.5.5 0 0 1-.928.372L6 4.97l-2.286 5.715a.5.5 0 0 1-.928-.372zM2.087 1.305a2.75 2.75 0 0 0 0 3.89.5.5 0 0 1-.707.707 3.75 3.75 0 0 1 0-5.304.5.5 0 0 1 .707.707"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.761 2.196a1.49 1.49 0 0 0 0 2.108.5.5 0 0 1-.707.707 2.49 2.49 0 0 1 0-3.522.5.5 0 0 1 .707.707"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSignalTower12Regular);

export { ForwardRef as default };
