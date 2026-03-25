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
var SvgSignalTower12Filled = function SvgSignalTower12Filled(_a, ref) {
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
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#i7ef2dc-a)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.087 5.195a2.75 2.75 0 0 1 0-3.89.5.5 0 0 0-.707-.707 3.75 3.75 0 0 0 0 5.304.5.5 0 1 0 .707-.707m7.826 0a2.75 2.75 0 0 0 0-3.89.5.5 0 1 1 .707-.707 3.75 3.75 0 0 1 0 5.304.5.5 0 0 1-.707-.707"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.24 2.196a1.49 1.49 0 0 1 0 2.108.5.5 0 1 0 .706.707 2.49 2.49 0 0 0 0-3.522.5.5 0 1 0-.707.707ZM4.942 4.253a1.375 1.375 0 1 1 2.117 0l2.387 5.968a.75.75 0 1 1-1.393.557L6 5.645l-2.053 5.133a.75.75 0 0 1-1.393-.557zM3.761 2.196a1.49 1.49 0 0 0 0 2.108.5.5 0 0 1-.707.707 2.49 2.49 0 0 1 0-3.522.5.5 0 1 1 .707.707"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "i7ef2dc-a"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0h12v12H0z"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSignalTower12Filled);

export { ForwardRef as default };
