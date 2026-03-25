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
var SvgFolderShare20Filled = function SvgFolderShare20Filled(_a, ref) {
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
    d: "M2 5.5A2.5 2.5 0 0 1 4.5 3h2.482c.464 0 .91.184 1.238.513l1.28 1.28-2.06 2.06A.5.5 0 0 1 7.085 7H2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 8v6.5A2.5 2.5 0 0 0 4.5 17h3.12c.219-1.258.657-2.328 1.307-3.191a5.66 5.66 0 0 1 2.537-1.906 6 6 0 0 1 1.036-.296V10.5c0-.568.33-1.097.84-1.347a1.51 1.51 0 0 1 1.581.163L18 11.71V7.5A2.5 2.5 0 0 0 15.5 5h-4.793l-2.56 2.56A1.5 1.5 0 0 1 7.085 8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.307 10.105a.5.5 0 0 0-.806.395v1.993q-.06.001-.126.006l-.009.001a5.4 5.4 0 0 0-1.544.337 4.7 4.7 0 0 0-2.095 1.574c-.623.826-1.081 1.971-1.224 3.543a.499.499 0 0 0 .852.399c1.189-1.189 2.369-1.776 3.242-2.067.36-.121.668-.19.904-.231v1.944a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0-.026-.768z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgFolderShare20Filled);

export { ForwardRef as default };
