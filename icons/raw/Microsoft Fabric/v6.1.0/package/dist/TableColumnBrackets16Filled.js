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
var SvgTableColumnBrackets16Filled = function SvgTableColumnBrackets16Filled(_a, ref) {
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
    d: "M3 4.5A1.5 1.5 0 0 1 4.5 3H6v2h4V2H4.5A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14H7v-3H6v2H4.5A1.5 1.5 0 0 1 3 11.5zM14 6v2.085A1.5 1.5 0 0 0 13.5 8H11V6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 8V6H6v4h1.05A2.5 2.5 0 0 1 9.5 8zm4-3.5V5h-3V2h.5A2.5 2.5 0 0 1 14 4.5M9.5 10a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h1a.5.5 0 0 1 0 1h-1A1.5 1.5 0 0 1 8 14.5v-4A1.5 1.5 0 0 1 9.5 9h1a.5.5 0 0 1 0 1zm5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 0 0 1h1a1.5 1.5 0 0 0 1.5-1.5v-4A1.5 1.5 0 0 0 14.5 9h-1a.5.5 0 0 0 0 1z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTableColumnBrackets16Filled);

export { ForwardRef as default };
