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
var SvgDatabaseStackPulse16Filled = function SvgDatabaseStackPulse16Filled(_a, ref) {
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
    d: "M8 6c2.761 0 5-1.119 5-2.5S10.761 1 8 1 3 2.119 3 3.5 5.239 6 8 6M3 8V5.487C4.057 6.413 5.864 7 8 7q.174 0 .344-.005A5.5 5.5 0 0 0 6.13 10.31C4.314 9.932 3 9.026 3 8m3.003 3.308a5.48 5.48 0 0 0 1.232 3.665C4.773 14.8 3 13.796 3 12.5V9.959c.71.623 1.758 1.1 3.003 1.35ZM16 11.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-5.556-2a.5.5 0 0 0-.475.303l-.584 1.364H9a.5.5 0 1 0 0 1h.714a.5.5 0 0 0 .46-.303l.212-.496.643 1.8a.5.5 0 0 0 .935.018l.672-1.673.209.39a.5.5 0 0 0 .44.264H14a.5.5 0 0 0 0-1h-.415l-.573-1.07a.5.5 0 0 0-.905.05l-.58 1.443-.628-1.758a.5.5 0 0 0-.455-.332"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabaseStackPulse16Filled);

export { ForwardRef as default };
