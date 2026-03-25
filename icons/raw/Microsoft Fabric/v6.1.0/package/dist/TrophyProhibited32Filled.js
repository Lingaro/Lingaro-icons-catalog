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
var SvgTrophyProhibited32Filled = function SvgTrophyProhibited32Filled(_a, ref) {
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
    d: "M11 2a3 3 0 0 0-3 3H6.5A2.5 2.5 0 0 0 4 7.5v4a4.5 4.5 0 0 0 4.25 4.493 8.01 8.01 0 0 0 5.834 5.776 9.002 9.002 0 0 1 12.525-7.016A4.49 4.49 0 0 0 28 11.5v-4A2.5 2.5 0 0 0 25.5 5H24a3 3 0 0 0-3-3zm13 11.95V7h1.5a.5.5 0 0 1 .5.5v4a2.5 2.5 0 0 1-2 2.45M8 7v6.95a2.5 2.5 0 0 1-2-2.45v-4a.5.5 0 0 1 .5-.5zm3.5 17h2.555a8.99 8.99 0 0 0 3.288 6H9.5A1.5 1.5 0 0 1 8 28.5v-1a3.5 3.5 0 0 1 3.5-3.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23 30.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15m0-2a5.48 5.48 0 0 1-3.117-.968l7.649-7.65A5.5 5.5 0 0 1 23 28.5m3.118-10.032-7.65 7.65a5.5 5.5 0 0 1 7.65-7.65"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTrophyProhibited32Filled);

export { ForwardRef as default };
