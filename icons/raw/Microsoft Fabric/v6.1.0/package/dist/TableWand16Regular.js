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
var SvgTableWand16Regular = function SvgTableWand16Regular(_a, ref) {
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
    clipPath: "url(#i751f6f-a)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11.637 1.273A2.5 2.5 0 0 0 10.5 1h-7A2.5 2.5 0 0 0 1 3.5v7A2.5 2.5 0 0 0 3.5 13h.208c.142-.354.356-.687.644-.974L5 11.378V10h1.378l1-1H5V5h1.085c.158-.447.523-.797.98-.936L7.084 4H5V2h4v1.085c.447.158.797.523.936.98l.064.02V2h.5q.294.002.553.105c.092-.341.303-.634.584-.832M4 10v2h-.5A1.5 1.5 0 0 1 2 10.5V10zm0-5v4H2V5zm0-3v2H2v-.5A1.5 1.5 0 0 1 3.5 2zm10-.5a.5.5 0 0 0-1 0V2h-.5a.5.5 0 0 0 0 1h.5v.5a.5.5 0 0 0 1 0V3h.5a.5.5 0 0 0 0-1H14z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 4.5a.5.5 0 0 0-1 0V5h-.5a.5.5 0 0 0 0 1H8v.5a.5.5 0 0 0 1 0V6h.5a.5.5 0 0 0 0-1H9zm6.5 8.5a.5.5 0 0 0 0-1H15v-.5a.5.5 0 0 0-1 0v.5h-.5a.5.5 0 0 0 0 1h.5v.5a.5.5 0 0 0 1 0V13zm-3.271-7.436a1.914 1.914 0 1 1 2.707 2.707l-7.17 7.17a1.9 1.9 0 0 1-1.334.56 1.914 1.914 0 0 1-1.373-3.268zm-.48 1.893-5.983 5.984a.914.914 0 1 0 1.293 1.292l5.983-5.983zm2 .586.48-.48a.914.914 0 0 0-1.293-1.292l-.48.48z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "i751f6f-a"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0h16v16H0z"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTableWand16Regular);

export { ForwardRef as default };
