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
var SvgShoppingBagDataBarVertical20Filled = function SvgShoppingBagDataBarVertical20Filled(_a, ref) {
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
    d: "M6 6V4.5q0-.516.195-.969.195-.46.539-.797.336-.344.797-.539Q7.984 2 8.5 2q.421 0 .805.133.384.134.703.375A2.44 2.44 0 0 1 11.5 2a2.48 2.48 0 0 1 2.305 1.531Q14 3.984 14 4.5V6h1a1 1 0 0 1 1 1v2.268A2 2 0 0 0 15 11v.268A2 2 0 0 0 12 13V6h1V4.5q0-.312-.117-.586A1.48 1.48 0 0 0 11.5 3q-.46 0-.828.258A2.5 2.5 0 0 1 11 4.5V13a2 2 0 0 0-2 2v3H7a3 3 0 0 1-2.117-.875 3.1 3.1 0 0 1-.648-.953A2.9 2.9 0 0 1 4 15V7a1 1 0 0 1 1-1zm4 0V4.5q0-.312-.117-.586A1.48 1.48 0 0 0 8.5 3q-.312 0-.586.117A1.48 1.48 0 0 0 7 4.5V6z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.293 10.293A1 1 0 0 0 16 11v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1.707-.707m-6 4A1 1 0 0 0 10 15v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1.707-.707m3-2A1 1 0 0 0 13 13v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1.707-.707"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgShoppingBagDataBarVertical20Filled);

export { ForwardRef as default };
