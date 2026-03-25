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
var SvgHintGrid16Filled = function SvgHintGrid16Filled(_a, ref) {
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
    d: "M8.75 2a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1 0-1.5zm2.5 1.5a.75.75 0 0 1 0-1.5A2.75 2.75 0 0 1 14 4.75a.75.75 0 0 1-1.5 0c0-.69-.56-1.25-1.25-1.25m2 3a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75m0 4a.75.75 0 0 1 .75.75A2.75 2.75 0 0 1 11.25 14a.75.75 0 0 1 0-1.5c.69 0 1.25-.56 1.25-1.25a.75.75 0 0 1 .75-.75m-6 2a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zM4.75 2a.75.75 0 0 1 0 1.5c-.69 0-1.25.56-1.25 1.25a.75.75 0 0 1-1.5 0A2.75 2.75 0 0 1 4.75 2m.75 11.25a.75.75 0 0 0-.75-.75c-.69 0-1.25-.56-1.25-1.25a.75.75 0 0 0-1.5 0A2.75 2.75 0 0 0 4.75 14a.75.75 0 0 0 .75-.75M2.75 9.5a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .414.336.75.75.75m8.25-3A1.5 1.5 0 0 0 9.5 5h-3A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5zm-5 0a.5.5 0 0 1 .5-.5h1v1.5H6zm0 3v-1h1.5V10h-1a.5.5 0 0 1-.5-.5m3.5.5h-1V8.5H10v1a.5.5 0 0 1-.5.5m-1-2.5V6h1a.5.5 0 0 1 .5.5v1z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgHintGrid16Filled);

export { ForwardRef as default };
