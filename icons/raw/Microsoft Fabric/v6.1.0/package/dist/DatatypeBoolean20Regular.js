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
var SvgDatatypeBoolean20Regular = function SvgDatatypeBoolean20Regular(_a, ref) {
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
    d: "M8.843 17.976a.5.5 0 0 1-.317-.632l5-15.001a.5.5 0 1 1 .948.316l-4.999 15a.5.5 0 0 1-.632.317M17.66 6.027a.5.5 0 0 1 .34.474v7a.5.5 0 0 1-1 0V7.958a6 6 0 0 1-1.243.972.5.5 0 0 1-.514-.858c.937-.562 1.31-1.095 1.639-1.567q.108-.158.22-.306a.5.5 0 0 1 .558-.172M5 6.001c-1.12 0-1.944.538-2.43 1.38C2.13 8.146 2 9.103 2 10c0 .899.13 1.855.57 2.62C3.056 13.462 3.88 14 5 14s1.944-.538 2.43-1.38c.44-.765.57-1.722.57-2.62s-.13-1.855-.57-2.62C6.943 6.539 6.12 6 5 6ZM3.437 7.88C3.75 7.337 4.25 7 5 7s1.25.336 1.563.879C6.875 8.423 7 9.173 7 10c0 .829-.125 1.579-.438 2.121-.312.543-.812.88-1.562.88s-1.25-.337-1.563-.88C3.126 11.58 3 10.83 3 10.002c0-.83.125-1.58.438-2.122Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatatypeBoolean20Regular);

export { ForwardRef as default };
