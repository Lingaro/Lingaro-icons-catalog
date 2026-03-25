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
var SvgSquareMultipleOverlapKql32Filled = function SvgSquareMultipleOverlapKql32Filled(_a, ref) {
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
    d: "M14.75 2A4.75 4.75 0 0 0 10 6.75v.75h2.5v-.75a2.25 2.25 0 0 1 2.25-2.25h11A2.25 2.25 0 0 1 28 6.75v10.246h1.229c.444.001.879.108 1.271.309V6.75A4.75 4.75 0 0 0 25.75 2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22.5 14.75v2.246h-1.332c-.407 0-.805.088-1.168.254v-2.5a2.25 2.25 0 0 0-2.25-2.25h-11a2.25 2.25 0 0 0-2.25 2.25v11A2.25 2.25 0 0 0 6.75 28h10.417a3 3 0 0 0 .289 2.5H6.75A4.75 4.75 0 0 1 2 25.75v-11A4.75 4.75 0 0 1 6.75 10h11a4.75 4.75 0 0 1 4.75 4.75"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21.125 19h8.054a.806.806 0 0 1 .806.805v8.054a.806.806 0 0 1-1.375.57l-8.053-8.053A.807.807 0 0 1 21.126 19Zm-.754 6.048.707-.707a1 1 0 0 0-1.414-1.414l-.707.707a1 1 0 1 0 1.414 1.414m3.182.353a1 1 0 0 1 0 1.415l-2.829 2.828a1 1 0 1 1-1.414-1.414l2.83-2.83a1 1 0 0 1 1.414 0Zm2.474 2.475a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.415l.707-.707a1 1 0 0 0 0-1.415"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSquareMultipleOverlapKql32Filled);

export { ForwardRef as default };
