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
var SvgDatatypeInteger16Filled = function SvgDatatypeInteger16Filled(_a, ref) {
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
    clipPath: "url(#i364ded-a)"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "i364ded-b",
    width: 16,
    height: 17,
    x: 0,
    y: 0,
    maskUnits: "userSpaceOnUse",
    style: {
      maskType: "luminance"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 .001H0v16h16z"
  })), /*#__PURE__*/React.createElement("g", {
    mask: "url(#i364ded-b)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14.769 6.681a2.2 2.2 0 0 1-.398.544 2.03 2.03 0 0 1 .659 1.495c0 1.167-1.006 2.279-2.779 2.279a3.75 3.75 0 0 1-2.522-.964l-.01-.01a.75.75 0 0 1 1.055-1.068c.41.354.934.546 1.475.542h.002c.929 0 1.277-.467 1.279-.783a.55.55 0 0 0-.213-.422 1.66 1.66 0 0 0-1.051-.295h-.015a.75.75 0 0 1 0-1.5c.913 0 1.254-.464 1.256-.78a.56.56 0 0 0-.214-.427 1.6 1.6 0 0 0-1.027-.293h-.018a2.24 2.24 0 0 0-1.483.545l-.002.002a.75.75 0 0 1-1.05-1.065l.01-.012.012-.01a3.75 3.75 0 0 1 2.51-.96 3.08 3.08 0 0 1 1.987.622l.005.004a2.05 2.05 0 0 1 .77 1.594v.004a2.15 2.15 0 0 1-.238.958M4.735 4.23a2.5 2.5 0 0 1 4.268 1.743l.004.059a1 1 0 0 1-.004.138 2.7 2.7 0 0 1-1.015 1.794 1 1 0 0 1-.086.058l-1.627.94a1.34 1.34 0 0 0-.586.533l-.002.004h2.566a.75.75 0 1 1 0 1.5h-3.5a.75.75 0 0 1-.75-.725 2.84 2.84 0 0 1 1.538-2.62l1.56-.901a1.2 1.2 0 0 0 .404-.705v-.003L7.503 6a1 1 0 1 0-2 0 .75.75 0 0 1-1.5 0 2.5 2.5 0 0 1 .732-1.768ZM1.488 5.652l-.34.227A.75.75 0 0 1 .315 4.63l.006-.005 1.5-1a.75.75 0 0 1 1.166.624v6a.75.75 0 1 1-1.5 0z"
  }))), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "i364ded-a"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0h16v16H0z"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatatypeInteger16Filled);

export { ForwardRef as default };
