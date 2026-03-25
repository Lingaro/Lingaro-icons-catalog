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
var SvgStreamBracket20Regular = function SvgStreamBracket20Regular(_a, ref) {
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
    d: "M1.5 4a.5.5 0 0 1-.5-.5v-1A1.5 1.5 0 0 1 2.5 1h15A1.5 1.5 0 0 1 19 2.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 0-.5-.5h-15a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-.5.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 9a5 5 0 0 1 5-5h.5a.5.5 0 0 1 0 1H13a4 4 0 0 0-4 4v.375a.5.5 0 0 1-.016.125H9c0 .833-.675 1.508-1.508 1.508h-1.96a.5.5 0 1 1 0-1h1.96c.28 0 .508-.228.508-.508h.016A.5.5 0 0 1 8 9.375zm5.602-1c-.833 0-1.508.675-1.508 1.508h.016a.5.5 0 0 0-.016.125v.375a4 4 0 0 1-4 4H6.53a.5.5 0 0 0 0 1h1.563a5 5 0 0 0 5-5v-.375a.5.5 0 0 0-.016-.125h.016c0-.28.227-.508.508-.508h.96a.5.5 0 0 0 0-1h-.96Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 9.531A3.5 3.5 0 0 1 7.5 13h-2a.5.5 0 0 1 0-1h2A2.5 2.5 0 0 0 10 9.5v-.094q0-.038.006-.075a3.5 3.5 0 0 1 3.494-3.3h1a.5.5 0 0 1 0 1h-1a2.5 2.5 0 0 0-2.5 2.5m8 5.969a.5.5 0 0 0-1 0v1a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 0-1 0v1A1.5 1.5 0 0 0 2.5 18h15a1.5 1.5 0 0 0 1.5-1.5z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgStreamBracket20Regular);

export { ForwardRef as default };
