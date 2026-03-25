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
var SvgSquareMultipleOverlapAdd32Regular = function SvgSquareMultipleOverlapAdd32Regular(_a, ref) {
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
    d: "M14.5 2A4.5 4.5 0 0 0 10 6.5V8h2V6.5A2.5 2.5 0 0 1 14.5 4h11A2.5 2.5 0 0 1 28 6.5v9.015a9 9 0 0 1 2 1.828V6.5A4.5 4.5 0 0 0 25.5 2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 10a4.5 4.5 0 0 1 4.479 4.057 9 9 0 0 0-1.979.455V14.5a2.5 2.5 0 0 0-2.5-2.5h-11A2.5 2.5 0 0 0 4 14.5v11A2.5 2.5 0 0 0 6.5 28h9.015a9 9 0 0 0 1.828 2H6.5A4.5 4.5 0 0 1 2 25.5v-11A4.5 4.5 0 0 1 6.5 10z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M23 30.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15m1-12.25a.75.75 0 0 0-1.5 0V22h-3.75a.75.75 0 0 0 0 1.5h3.75v3.75a.75.75 0 0 0 1.5 0V23.5h3.75a.75.75 0 0 0 0-1.5H24z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSquareMultipleOverlapAdd32Regular);

export { ForwardRef as default };
