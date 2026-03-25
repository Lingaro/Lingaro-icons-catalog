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
var SvgProgressCircle12Regular = function SvgProgressCircle12Regular(_a, ref) {
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
    d: "M4.382 8.407a.5.5 0 0 1-.323-.119A3 3 0 0 1 3.3 7.3a.5.5 0 0 1 .9-.436c.123.252.296.476.51.658a.5.5 0 0 1-.325.881l-.002.004Zm-.7-2.85a.5.5 0 0 1-.458-.688c.158-.39.397-.74.7-1.03a.5.5 0 0 1 .693.721 1.96 1.96 0 0 0-.467.686.5.5 0 0 1-.468.311m1.964 3.297A.5.5 0 0 0 6 9a3 3 0 1 0 0-6 .5.5 0 1 0 0 1 2 2 0 1 1 0 4 .5.5 0 0 0-.354.854"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 1a5 5 0 1 0 0 10A5 5 0 0 0 6 1m0 1a4 4 0 1 1 0 8 4 4 0 0 1 0-8"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgProgressCircle12Regular);

export { ForwardRef as default };
