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
var SvgTrophyProhibited20Filled = function SvgTrophyProhibited20Filled(_a, ref) {
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
    d: "M5.5 4a2 2 0 0 1 2-1.998h5A2 2 0 0 1 14.5 4h.995a1.5 1.5 0 0 1 1.5 1.5v1.505a3 3 0 0 1-.972 2.209 5.5 5.5 0 0 0-6.915 4.198 4.51 4.51 0 0 1-3.503-3.44 3.006 3.006 0 0 1-2.61-2.974V5.5a1.5 1.5 0 0 1 1.5-1.5zm9 4.937a1.996 1.996 0 0 0 1.495-1.932V5.5a.5.5 0 0 0-.5-.5H14.5zM5.5 5H4.495a.5.5 0 0 0-.5.5v1.498c0 .93.64 1.713 1.505 1.936zm3.52 9.968a5.48 5.48 0 0 0 1.211 3H6.003a.5.5 0 0 1-.5-.5v-.5a2 2 0 0 1 2-2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 14.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0m1 0a3.5 3.5 0 0 1 5.596-2.803l-4.9 4.9A3.5 3.5 0 0 1 11 14.5m3.5 3.5c-.786 0-1.512-.26-2.096-.697l4.9-4.9A3.5 3.5 0 0 1 14.5 18"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTrophyProhibited20Filled);

export { ForwardRef as default };
