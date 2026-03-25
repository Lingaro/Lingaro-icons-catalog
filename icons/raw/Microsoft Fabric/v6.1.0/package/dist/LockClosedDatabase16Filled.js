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
var SvgLockClosedDatabase16Filled = function SvgLockClosedDatabase16Filled(_a, ref) {
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
    d: "M15 13c0 1.105-1.567 2-3.5 2S8 14.105 8 13V9.92q.255.207.53.362c.81.463 1.862.718 2.97.718s2.16-.255 2.97-.718A4 4 0 0 0 15 9.92z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 .5a3 3 0 0 1 3 3V4h.5c.938 0 1.754.517 2.182 1.281A8.2 8.2 0 0 0 11.5 5c-1.069 0-2.084.184-2.87.52-.39.168-.77.393-1.067.694-.3.305-.563.74-.563 1.286v6c0 .179.03.345.08.5H4.5A2.5 2.5 0 0 1 2 11.5v-5A2.5 2.5 0 0 1 4.5 4H5v-.5a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2V4h4v-.5a2 2 0 0 0-2-2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.5 6c1.933 0 3.5.895 3.5 2s-1.567 2-3.5 2S8 9.105 8 8s1.567-2 3.5-2"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgLockClosedDatabase16Filled);

export { ForwardRef as default };
