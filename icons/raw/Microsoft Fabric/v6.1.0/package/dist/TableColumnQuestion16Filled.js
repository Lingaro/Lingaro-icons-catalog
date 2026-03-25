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
var SvgTableColumnQuestion16Filled = function SvgTableColumnQuestion16Filled(_a, ref) {
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
    d: "M4.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13H6v-1.5c0 .9.216 1.75.6 2.5H4.5A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2H10v3H6V3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 11.5V11h.022a6 6 0 0 0-.022.5m8-4.9V6h-3v.022a5.5 5.5 0 0 1 3 .577ZM10 6v.207A5.51 5.51 0 0 0 6.207 10H6V6zm4-1.5V5h-3V2h.5A2.5 2.5 0 0 1 14 4.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 11.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-4.5 1.88a.625.625 0 1 0 0 1.25.625.625 0 0 0 0-1.25m0-4.877c-1.048 0-1.864.818-1.853 1.955a.5.5 0 1 0 1-.01c-.006-.579.36-.945.853-.945.472 0 .853.392.853.95 0 .202-.07.315-.36.544l-.277.215c-.506.404-.716.717-.716 1.288a.5.5 0 0 0 .992.09l.011-.156c.017-.148.1-.254.346-.448l.277-.215c.513-.41.727-.732.727-1.318 0-1.104-.822-1.95-1.853-1.95"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTableColumnQuestion16Filled);

export { ForwardRef as default };
