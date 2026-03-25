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
var SvgSquareMultipleOverlap28Regular = function SvgSquareMultipleOverlap28Regular(_a, ref) {
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
    d: "M9.514 6.5H8.008A3.75 3.75 0 0 1 11.75 3h9.5A3.75 3.75 0 0 1 25 6.75v9.5a3.75 3.75 0 0 1-3.5 3.742v-1.506a2.25 2.25 0 0 0 2-2.236v-9.5a2.25 2.25 0 0 0-2.25-2.25h-9.5a2.25 2.25 0 0 0-2.236 2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.75 8A3.75 3.75 0 0 0 3 11.75v9.5A3.75 3.75 0 0 0 6.75 25h9.5A3.75 3.75 0 0 0 20 21.25v-9.5A3.75 3.75 0 0 0 16.25 8zM4.5 11.75A2.25 2.25 0 0 1 6.75 9.5h9.5a2.25 2.25 0 0 1 2.25 2.25v9.5a2.25 2.25 0 0 1-2.25 2.25h-9.5a2.25 2.25 0 0 1-2.25-2.25z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSquareMultipleOverlap28Regular);

export { ForwardRef as default };
