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
var SvgHintGrid16Regular = function SvgHintGrid16Regular(_a, ref) {
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
    d: "M9 2a.5.5 0 0 1 0 1H7a.5.5 0 0 1 0-1zm2.5 1a.5.5 0 0 1 0-1A2.5 2.5 0 0 1 14 4.5a.5.5 0 0 1-1 0A1.5 1.5 0 0 0 11.5 3m2 3.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5m0 4.5a.5.5 0 0 1 .5.5 2.5 2.5 0 0 1-2.5 2.5.5.5 0 0 1 0-1 1.5 1.5 0 0 0 1.5-1.5.5.5 0 0 1 .5-.5M7 13a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zM4.5 2a.5.5 0 0 1 0 1A1.5 1.5 0 0 0 3 4.5a.5.5 0 0 1-1 0A2.5 2.5 0 0 1 4.5 2M5 13.5a.5.5 0 0 0-.5-.5A1.5 1.5 0 0 1 3 11.5a.5.5 0 0 0-1 0A2.5 2.5 0 0 0 4.5 14a.5.5 0 0 0 .5-.5m-2.5-4A.5.5 0 0 0 3 9V7a.5.5 0 0 0-1 0v2a.5.5 0 0 0 .5.5m8.5-3A1.5 1.5 0 0 0 9.5 5h-3A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5zm-5 0a.5.5 0 0 1 .5-.5h1v1.5H6zm0 3v-1h1.5V10h-1a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1-.5.5h-1V8.5H10zm-1.5-2V6h1a.5.5 0 0 1 .5.5v1z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgHintGrid16Regular);

export { ForwardRef as default };
