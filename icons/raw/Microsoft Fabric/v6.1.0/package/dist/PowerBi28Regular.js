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
var SvgPowerBi28Regular = function SvgPowerBi28Regular(_a, ref) {
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
    fillRule: "evenodd",
    d: "M14.688 4.65c0-.635.514-1.15 1.15-1.15h4.7c.634 0 1.15.515 1.15 1.15v19.661a.187.187 0 0 1-.188.188h-3V10.625a3 3 0 0 0-3-3h-.813V4.65Zm-.5 21.348H6.5a1.687 1.687 0 0 1-1.687-1.687V16.25a3 3 0 0 1 3-3h.798v-2.625a3 3 0 0 1 3-3h1.576V5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v19.311c0 .932-.755 1.688-1.687 1.688zM10.11 13.25h.701a3 3 0 0 1 3 3v8.25H17V10.274a1.15 1.15 0 0 0-1.15-1.15h-4.59a1.15 1.15 0 0 0-1.15 1.15v2.974ZM6.313 15.9c0-.635.515-1.15 1.15-1.15h3.7c.635 0 1.15.515 1.15 1.15v8.6H6.5a.19.19 0 0 1-.187-.188z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgPowerBi28Regular);

export { ForwardRef as default };
