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
var SvgDatatypeBinary20Regular = function SvgDatatypeBinary20Regular(_a, ref) {
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
    d: "M14.66 6.027a.5.5 0 0 1 .34.474v7a.5.5 0 0 1-1 0V7.958a6 6 0 0 1-1.243.972.5.5 0 0 1-.514-.858c.937-.562 1.31-1.095 1.639-1.567q.11-.158.22-.306a.5.5 0 0 1 .558-.172M7 6.001c-1.12 0-1.944.538-2.43 1.38C4.13 8.146 4 9.103 4 10s.13 1.855.57 2.62C5.056 13.462 5.88 14 7 14s1.944-.538 2.43-1.38c.44-.765.57-1.722.57-2.62s-.13-1.855-.57-2.62C8.943 6.539 8.12 6 7 6ZM5.437 7.88C5.75 7.337 6.25 7 7 7s1.25.336 1.563.879C8.874 8.423 9 9.173 9 10c0 .828-.125 1.578-.438 2.121C8.25 12.664 7.75 13 7 13s-1.25-.336-1.563-.879C5.125 11.58 5 10.83 5 10.001c0-.828.125-1.578.438-2.121Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatatypeBinary20Regular);

export { ForwardRef as default };
