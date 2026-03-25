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
var SvgDataBarVerticalPhone20Regular = function SvgDataBarVerticalPhone20Regular(_a, ref) {
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
    clipPath: "url(#i70c476-i8950bd-a)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 4a2 2 0 1 1 4 0v12a2 2 0 1 1-4 0zm2-1a1 1 0 0 0-1 1v12a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1m-8 9a2 2 0 1 1 4 0v4a2 2 0 1 1-4 0zm3 0a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0zm10.75-1A1.75 1.75 0 0 0 14 12.75v5.5c0 .967.784 1.75 1.75 1.75h2.5A1.75 1.75 0 0 0 20 18.25v-5.5A1.75 1.75 0 0 0 18.25 11zm.25 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 1 1 0 1h-1a.5.5 0 0 1-.5-.5m2-7.5h-1V8a1 1 0 1 0-2 0v2.104a2.75 2.75 0 0 0-1 .525V8a2 2 0 1 1 4 0z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "i70c476-i8950bd-a"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0h20v20H0z"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataBarVerticalPhone20Regular);

export { ForwardRef as default };
