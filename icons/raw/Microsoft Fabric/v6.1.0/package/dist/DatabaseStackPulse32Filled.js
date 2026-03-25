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
var SvgDatabaseStackPulse32Filled = function SvgDatabaseStackPulse32Filled(_a, ref) {
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
    d: "M5 7c0-2.761 4.925-5 11-5s11 2.239 11 5-4.925 5-11 5S5 9.761 5 7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M24.606 12.356C22.3 13.404 19.256 14 16 14s-6.3-.596-8.606-1.644c-.823-.374-1.668-.865-2.394-1.48v6.59c.095.184.253.392.502.62.49.447 1.255.896 2.285 1.294 1.69.653 3.959 1.116 6.526 1.258A9.004 9.004 0 0 1 27 14.935v-4.059c-.726.615-1.571 1.106-2.394 1.48M14 23q0-.19.008-.376c-2.658-.165-5.066-.654-6.942-1.379A11 11 0 0 1 5 20.212V25c0 2.761 4.925 5 11 5q.66 0 1.3-.035A8.98 8.98 0 0 1 14 23"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23 30.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15m-1.587-11.25a.75.75 0 0 1 .695.502L23.5 23.73l1.042-2.978a.75.75 0 0 1 1.411-.013l.569 1.531h.728a.75.75 0 0 1 0 1.5H26a.75.75 0 0 1-.703-.489l-.026-.07-1.063 3.037a.75.75 0 0 1-1.416 0l-1.429-4.082-.437 1.126a.75.75 0 0 1-.699.478H18.75a.75.75 0 0 1 0-1.5h.964l.987-2.541a.75.75 0 0 1 .712-.479"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabaseStackPulse32Filled);

export { ForwardRef as default };
