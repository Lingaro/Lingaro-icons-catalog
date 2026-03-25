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
var SvgHomeWaves32Regular = function SvgHomeWaves32Regular(_a, ref) {
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
    d: "M12.626 3.546a2 2 0 0 1 2.748 0l9.687 9.15c.6.567.939 1.354.939 2.178v2.888A3 3 0 0 0 24 17v-2.126a1 1 0 0 0-.313-.726L14 4.998l-9.687 9.15a1 1 0 0 0-.313.726v11.129a1 1 0 0 0 1 .999h3.762A3 3 0 0 0 8 29H5c-1.657 0-3-1.342-3-2.997V14.874a3 3 0 0 1 .939-2.178z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M29 22a4.43 4.43 0 0 1-3.293-1.207 3.7 3.7 0 0 1-.614-.81 3 3 0 0 1-.109-.234 2 2 0 0 0-.12-.253 1 1 0 0 0-1.167-.447h-.01c-.23.078-.425.236-.549.446a2 2 0 0 0-.134.3l-.01.026c-.028.068-.055.137-.09.202q-.226.45-.546.839a3.007 3.007 0 0 1-4.714 0 4.5 4.5 0 0 1-.546-.84 2 2 0 0 1-.073-.164l-.027-.063a2 2 0 0 0-.134-.3 1.02 1.02 0 0 0-.549-.446h-.01a1 1 0 0 0-1.167.447 2 2 0 0 0-.12.253q-.049.12-.109.234c-.166.297-.373.57-.614.81A4.43 4.43 0 0 1 11 22a1 1 0 1 0 0 2 6.41 6.41 0 0 0 4.707-1.793q.13-.13.245-.261.073.097.155.194a5 5 0 0 0 7.786 0q.081-.098.155-.194.114.13.245.26A6.41 6.41 0 0 0 29 24a1 1 0 0 0 0-2m0 6a4.43 4.43 0 0 1-3.293-1.207 3.7 3.7 0 0 1-.614-.81 3 3 0 0 1-.109-.234 2 2 0 0 0-.12-.253 1 1 0 0 0-1.167-.447h-.01c-.23.078-.425.236-.549.446a2 2 0 0 0-.134.3l-.01.026c-.028.068-.055.137-.09.202q-.226.45-.546.839a3.007 3.007 0 0 1-4.714 0 4.5 4.5 0 0 1-.546-.84 2 2 0 0 1-.073-.164l-.027-.063a2 2 0 0 0-.134-.3 1.02 1.02 0 0 0-.549-.446h-.01a1 1 0 0 0-1.167.447 2 2 0 0 0-.12.253q-.049.12-.109.234c-.166.297-.373.57-.614.81A4.43 4.43 0 0 1 11 28a1 1 0 1 0 0 2 6.41 6.41 0 0 0 4.707-1.793q.13-.13.245-.261.073.097.155.194a5 5 0 0 0 7.786 0q.081-.098.155-.194.114.13.245.26A6.41 6.41 0 0 0 29 30a1 1 0 0 0 0-2"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgHomeWaves32Regular);

export { ForwardRef as default };
