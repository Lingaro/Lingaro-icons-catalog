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
var SvgSquareGlobeArrowUpDown28Filled = function SvgSquareGlobeArrowUpDown28Filled(_a, ref) {
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
    d: "M3 6.75A3.75 3.75 0 0 1 6.75 3h14.5A3.75 3.75 0 0 1 25 6.75v9.806a2.3 2.3 0 0 0-.514-.056c-.6 0-1.164.234-1.59.659l-2.146 2.147v-.556c0-.366-.088-.711-.244-1.017a7.5 7.5 0 1 0-4.256 3.424v.609c-.6.001-1.163.235-1.587.659A2.248 2.248 0 0 0 14.229 25H6.75A3.75 3.75 0 0 1 3 21.25z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.808 16.92a6.5 6.5 0 0 0 .673-2.42h-2.988a16.4 16.4 0 0 1-.234 2.374 2.24 2.24 0 0 1 1.24-.374c.488 0 .94.156 1.309.42m-3.316-3.42h-4.985c.098-3.356 1.177-6 2.493-6s2.394 2.644 2.492 6m-5.193 5.455a6.4 6.4 0 0 0 .597 1.197A6.5 6.5 0 0 1 7.519 14.5h2.988c.046 1.694.33 3.255.792 4.455m5.193-4.455c-.098 3.356-1.176 6-2.492 6s-2.395-2.644-2.493-6zm.208-5.455a6.4 6.4 0 0 0-.596-1.197A6.5 6.5 0 0 1 20.48 13.5h-2.988c-.047-1.694-.33-3.255-.792-4.455m-4.804-1.197a6.4 6.4 0 0 0-.598 1.197c-.461 1.2-.745 2.761-.791 4.455H7.519a6.5 6.5 0 0 1 4.377-5.652m6.062 18.932a.75.75 0 0 0 .537.22.75.75 0 0 0 .537-.22l2.234-2.234a.75.75 0 1 0-1.061-1.061l-.955.955v-5.69a.75.75 0 0 0-1.5 0v5.701l-.966-.966a.75.75 0 1 0-1.061 1.061zm8.247-5.265-.966-.966v5.701a.75.75 0 0 1-1.5 0v-5.69l-.955.955a.75.75 0 1 1-1.061-1.061l2.234-2.234a.75.75 0 0 1 .537-.22.75.75 0 0 1 .537.22l2.234 2.234a.75.75 0 0 1-1.06 1.061"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSquareGlobeArrowUpDown28Filled);

export { ForwardRef as default };
