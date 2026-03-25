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
var SvgShapesThree16Regular = function SvgShapesThree16Regular(_a, ref) {
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
    d: "M3 4.75C3 3.784 3.784 3 4.75 3h2.5c.887 0 1.62.66 1.734 1.514-.233.185-.44.417-.605.697L8 5.851V4.75A.75.75 0 0 0 7.25 4h-2.5a.75.75 0 0 0-.75.75v2.452a4 4 0 0 0-.95.466A1.8 1.8 0 0 1 3 7.25zM12.905 12H9.063a4 4 0 0 0 .14-1h3.702a.5.5 0 0 0 .43-.754l-2.373-4.017a.5.5 0 0 0-.861 0L8.574 8.813a4 4 0 0 0-.687-.805L9.24 5.72a1.5 1.5 0 0 1 2.583 0l2.373 4.017A1.5 1.5 0 0 1 12.907 12ZM5.25 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgShapesThree16Regular);

export { ForwardRef as default };
