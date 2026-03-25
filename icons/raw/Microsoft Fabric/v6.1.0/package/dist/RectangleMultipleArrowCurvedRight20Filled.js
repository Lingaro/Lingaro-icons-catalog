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
var SvgRectangleMultipleArrowCurvedRight20Filled = function SvgRectangleMultipleArrowCurvedRight20Filled(_a, ref) {
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
    d: "M17.854 5.141a.5.5 0 0 1 0 .708l-1 1a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.137.138A2.5 2.5 0 0 0 11 5.495a.5.5 0 0 1-1 0 3.5 3.5 0 0 1 6.994-.2l.152-.153a.5.5 0 0 1 .708 0ZM16 17.995a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 8.995a3 3 0 0 0-3 3v3H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgRectangleMultipleArrowCurvedRight20Filled);

export { ForwardRef as default };
