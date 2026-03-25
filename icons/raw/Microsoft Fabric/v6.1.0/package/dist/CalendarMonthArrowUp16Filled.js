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
var SvgCalendarMonthArrowUp16Filled = function SvgCalendarMonthArrowUp16Filled(_a, ref) {
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
    d: "M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h2.1a5.502 5.502 0 0 1 3.42-7.799A1 1 0 1 1 12 6v.022c.715.065 1.39.266 2 .578V4.5A2.5 2.5 0 0 0 11.5 2zM5 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2m1 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 11.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-4.854-2.353-2 2a.5.5 0 0 0 .708.707L11 10.707V13.5a.5.5 0 0 0 1 0v-2.793l1.146 1.147a.5.5 0 0 0 .708-.708l-2-2A.5.5 0 0 0 11.503 9h-.006a.5.5 0 0 0-.348.144z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgCalendarMonthArrowUp16Filled);

export { ForwardRef as default };
