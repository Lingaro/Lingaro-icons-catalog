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
var SvgSignalSquare12Regular = function SvgSignalSquare12Regular(_a, ref) {
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
    d: "M6 8.875a.969.969 0 1 0 0-1.937.969.969 0 0 0 0 1.937M3.006 4.932a.5.5 0 0 1 0-.707 4.234 4.234 0 0 1 5.988 0 .5.5 0 0 1-.707.707 3.234 3.234 0 0 0-4.574 0 .5.5 0 0 1-.707 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.575 6.71a2.016 2.016 0 0 1 2.85 0 .5.5 0 0 0 .707-.707 3.016 3.016 0 0 0-4.264 0 .5.5 0 0 0 .707.707"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 1a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM2 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSignalSquare12Regular);

export { ForwardRef as default };
