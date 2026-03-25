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
var SvgDataScience32Filled = function SvgDataScience32Filled(_a, ref) {
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
    d: "m13.747 29.777 13.14-21.809c.104-.178.163-.391.163-.62 0-.49-.275-.917-.675-1.095L16.54 2.12a1.5 1.5 0 0 0-.583-.12c-.203 0-.4.043-.584.114L6.046 5.905l8.8 4.326c.558.313.951.897.951 1.616 0 .448-.15.854-.406 1.167L5.058 24.484c-.4.492-.36 1.239.092 1.673q.14.14.308.214z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m10.047 15.957 2.823-3.133-.001-.003a.94.94 0 0 0 .24-.63.93.93 0 0 0-.527-.844l-7.09-3.486a1.3 1.3 0 0 0-.034.295c0 .229.06.444.166.622zm12.799 2.593-6.207 10.302a.83.83 0 0 0 .135.893c.225.25.57.32.872.208l.004.002 9.21-4.168q.172-.075.313-.215c.458-.437.498-1.188.093-1.682z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataScience32Filled);

export { ForwardRef as default };
