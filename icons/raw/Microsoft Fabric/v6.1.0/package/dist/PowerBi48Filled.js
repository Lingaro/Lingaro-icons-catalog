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
var SvgPowerBi48Filled = function SvgPowerBi48Filled(_a, ref) {
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
    d: "M25.41 5.808a2 2 0 0 1 1.99-1.787h8.846a2 2 0 0 1 2 2V42.33a1.67 1.67 0 0 1-1.67 1.67H31.41V15.01a2.91 2.91 0 0 0-2.91-2.91h-3.09zm.989 8.778h1.524a1 1 0 0 1 1 1V44h-5.846V26.011a2.91 2.91 0 0 0-2.91-2.91h-2.09v-7.515A1 1 0 0 1 19 14.59h7.4zM20.59 44V27.258a1.67 1.67 0 0 0-1.67-1.67h-7.505a1.67 1.67 0 0 0-1.67 1.67V42.33c0 .922.747 1.67 1.67 1.67z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgPowerBi48Filled);

export { ForwardRef as default };
