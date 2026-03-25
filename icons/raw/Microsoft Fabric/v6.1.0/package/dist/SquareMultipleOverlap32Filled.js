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
var SvgSquareMultipleOverlap32Filled = function SvgSquareMultipleOverlap32Filled(_a, ref) {
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
    d: "M14.75 2A4.75 4.75 0 0 0 10 6.75v.75h2.5v-.75a2.25 2.25 0 0 1 2.25-2.25h11A2.25 2.25 0 0 1 28 6.75v11A2.25 2.25 0 0 1 25.75 20H25v2.5h.75a4.75 4.75 0 0 0 4.75-4.75v-11A4.75 4.75 0 0 0 25.75 2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.75 10A4.75 4.75 0 0 0 2 14.75v11a4.75 4.75 0 0 0 4.75 4.75h11a4.75 4.75 0 0 0 4.75-4.75v-11A4.75 4.75 0 0 0 17.75 10zM4.5 14.75a2.25 2.25 0 0 1 2.25-2.25h11A2.25 2.25 0 0 1 20 14.75v11A2.25 2.25 0 0 1 17.75 28h-11a2.25 2.25 0 0 1-2.25-2.25z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSquareMultipleOverlap32Filled);

export { ForwardRef as default };
