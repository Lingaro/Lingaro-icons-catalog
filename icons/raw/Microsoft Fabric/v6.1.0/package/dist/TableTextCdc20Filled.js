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
var SvgTableTextCdc20Filled = function SvgTableTextCdc20Filled(_a, ref) {
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
    clipPath: "url(#i302beb-a)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13 7h4V5.5A2.5 2.5 0 0 0 14.5 3H13zm-6 4.184A3 3 0 0 0 5.8 12H3V8h4zM12 11h-.465a1.5 1.5 0 0 0-1.37.888A3 3 0 0 0 8.035 11H8V8h4zm1-3v3h.035c.888 0 1.687.386 2.236 1h.528A3 3 0 0 1 17 11.184V8zm-7.8 8.982A2.5 2.5 0 0 1 3 14.5V13h2.206c-.11.313-.17.65-.17 1v2q.002.518.164.982M12 7V3H8v4zM7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3zm.035 11a1 1 0 0 1 2 0 .5.5 0 0 0 1 0 2 2 0 0 0-4 0v2a2 2 0 0 0 4 0 .5.5 0 0 0-1 0 1 1 0 0 1-2 0zm10 0a1 1 0 0 1 2 0 .5.5 0 1 0 1 0 2 2 0 0 0-4 0v2a2 2 0 0 0 4 0 .5.5 0 0 0-1 0 1 1 0 0 1-2 0zm-6-1.5a.5.5 0 0 1 .5-.5h1.5a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1.5a.5.5 0 0 1-.5-.5zm1 .5v4h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "i302beb-a"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0h20v20H0z"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTableTextCdc20Filled);

export { ForwardRef as default };
