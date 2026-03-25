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
var SvgDatatypeBinary20Filled = function SvgDatatypeBinary20Filled(_a, ref) {
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
    d: "M4.604 7.506c.528-.917 1.433-1.505 2.646-1.505s2.118.588 2.646 1.505c.472.82.604 1.83.604 2.745 0 .916-.132 1.924-.604 2.745-.528.917-1.433 1.505-2.646 1.505s-2.118-.588-2.646-1.505C4.132 12.175 4 11.166 4 10.25s.132-1.924.604-2.745Zm2.646-.005c-.657 0-1.076.285-1.346.753-.28.488-.404 1.186-.404 1.997 0 .81.124 1.51.404 1.997.27.468.689.753 1.346.753s1.076-.285 1.346-.753c.28-.488.404-1.186.404-1.997 0-.81-.124-1.51-.404-1.997-.27-.468-.689-.753-1.346-.753M15 6.752a.751.751 0 0 0-1.385-.399l-.048.076c-.214.343-.36.575-.575.813-.225.247-.547.52-1.128.87a.752.752 0 0 0 .772 1.288c.34-.205.623-.398.864-.59l.017 4.94a.75.75 0 1 0 1.5 0z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatatypeBinary20Filled);

export { ForwardRef as default };
