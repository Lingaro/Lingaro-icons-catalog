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
var SvgTableLinkTriangle20Filled = function SvgTableLinkTriangle20Filled(_a, ref) {
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
    d: "M3.5 3a2.5 2.5 0 0 0 0 5H4a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 1 1 0-3H4a.5.5 0 0 0 0-1zM7 3a.5.5 0 0 0 0 1h.5a1.5 1.5 0 1 1 0 3H7a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 5.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m7.373 2H12v-4h-1.627c.395.567.627 1.256.627 2s-.232 1.433-.627 2M8 12.5V8.965A3.5 3.5 0 0 0 9.304 8.5H12v4zm-5 0V8.965Q3.245 9 3.5 9H7v3.5zm14-5h-4v-4h1.5A2.5 2.5 0 0 1 17 6zm-4 1v3.345l.2-.345a1.518 1.518 0 0 1 2.6 0l.577 1H17v-4zm-1 5.075L9.732 17.5H8v-4h4zM7 13.5H3V15a2.5 2.5 0 0 0 2.5 2.5H7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m14.93 12 3.9 6.75h.004a.5.5 0 0 1-.433.75h-7.8a.5.5 0 0 1-.436-.75l3.9-6.75a.522.522 0 0 1 .866 0Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTableLinkTriangle20Filled);

export { ForwardRef as default };
