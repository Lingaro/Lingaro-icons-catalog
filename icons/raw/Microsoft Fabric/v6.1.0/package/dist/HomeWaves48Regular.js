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
var SvgHomeWaves48Regular = function SvgHomeWaves48Regular(_a, ref) {
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
    d: "M26.394 5.855a3.78 3.78 0 0 0-4.788 0L8.431 16.597A3.91 3.91 0 0 0 7 19.628v19.485C7 41.26 8.713 43 10.825 43h7.45a3.78 3.78 0 0 1 1.944-2.591h-9.394c-.704 0-1.275-.58-1.275-1.296V19.628a1.3 1.3 0 0 1 .477-1.01L23.202 7.875a1.26 1.26 0 0 1 1.596 0l13.175 10.741c.302.246.477.618.477 1.011v8.313a4 4 0 0 1 .55-.04c.3 0 .6 0 .9.1.401.1.77.257 1.1.462v-8.834a3.91 3.91 0 0 0-1.431-3.031z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22.029 37.015c2.902.111 5.112-1.074 6.528-2.86.323.457.694.893 1.125 1.282 1.052.948 2.415 1.571 4.161 1.601l.054.001h.133c1.747-.031 3.11-.654 4.161-1.602a7.7 7.7 0 0 0 1.126-1.282c1.416 1.786 3.626 2.971 6.528 2.86a1.25 1.25 0 1 0-.095-2.498c-2.753.105-4.502-1.368-5.297-3.343a1.25 1.25 0 0 0-1.157-.784 1.25 1.25 0 0 0-1.142.737c-.449.994-.967 1.85-1.636 2.453-.63.567-1.433.95-2.581.96-1.149-.01-1.952-.393-2.58-.96-.67-.603-1.188-1.459-1.637-2.453a1.25 1.25 0 0 0-2.3.047c-.794 1.975-2.543 3.448-5.296 3.343a1.25 1.25 0 1 0-.095 2.498m7.691 2.112a1.249 1.249 0 0 0-2.3.047c-.794 1.975-2.543 3.448-5.296 3.343a1.25 1.25 0 1 0-.095 2.498c2.902.111 5.112-1.074 6.528-2.86.323.457.694.893 1.125 1.282 1.052.948 2.415 1.571 4.161 1.601l.054.001h.133c1.747-.031 3.11-.654 4.161-1.602a7.7 7.7 0 0 0 1.126-1.282c1.416 1.786 3.626 2.971 6.528 2.86a1.25 1.25 0 1 0-.095-2.498c-2.753.105-4.502-1.368-5.297-3.343a1.25 1.25 0 0 0-1.373-.765c-.395.068-.75.325-.926.718-.449.994-.967 1.85-1.636 2.453-.63.567-1.433.95-2.581.96-1.149-.01-1.952-.393-2.58-.96-.67-.603-1.188-1.459-1.637-2.453"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgHomeWaves48Regular);

export { ForwardRef as default };
