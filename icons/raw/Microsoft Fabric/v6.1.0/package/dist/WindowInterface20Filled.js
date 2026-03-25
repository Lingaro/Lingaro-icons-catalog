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
var SvgWindowInterface20Filled = function SvgWindowInterface20Filled(_a, ref) {
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
    d: "M3.001 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v7.035a3.5 3.5 0 0 0-1 .002V7h-12v7a2 2 0 0 0 2 2h1.05a2.5 2.5 0 0 0 0 1h-1.05a3 3 0 0 1-3-3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.927 14.563A2.5 2.5 0 1 1 14.06 17h-3.143a1.5 1.5 0 1 1 0-1h3.143a2.5 2.5 0 0 1 .868-1.436ZM9.23 16.915a.5.5 0 1 0 .556-.83.5.5 0 0 0-.556.83m6.445.832a1.5 1.5 0 1 0 1.667-2.495 1.5 1.5 0 0 0-1.667 2.495"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgWindowInterface20Filled);

export { ForwardRef as default };
