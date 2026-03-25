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
var SvgSquareMultipleOverlapKql32Regular = function SvgSquareMultipleOverlapKql32Regular(_a, ref) {
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
    d: "M14.5 2A4.5 4.5 0 0 0 10 6.5V8h2V6.5A2.5 2.5 0 0 1 14.5 4h11A2.5 2.5 0 0 1 28 6.5v10.496h1.229c.262 0 .522.038.771.11V6.5A4.5 4.5 0 0 0 25.5 2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 14.5v2.496h-.832c-.407 0-.805.088-1.168.254V14.5a2.5 2.5 0 0 0-2.5-2.5h-11A2.5 2.5 0 0 0 4 14.5v11A2.5 2.5 0 0 0 6.5 28h10.667a3 3 0 0 0 .044 2H6.5A4.5 4.5 0 0 1 2 25.5v-11A4.5 4.5 0 0 1 6.5 10h11a4.5 4.5 0 0 1 4.5 4.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21.125 19h8.054a.806.806 0 0 1 .806.805v8.054a.806.806 0 0 1-1.375.57l-8.053-8.053A.807.807 0 0 1 21.126 19Zm-.754 6.048.707-.707a1 1 0 0 0-1.414-1.414l-.707.707a1 1 0 1 0 1.414 1.414m3.182.353a1 1 0 0 1 0 1.415l-2.829 2.828a1 1 0 1 1-1.414-1.414l2.83-2.83a1 1 0 0 1 1.414 0Zm2.474 2.475a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.415l.707-.707a1 1 0 0 0 0-1.415"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSquareMultipleOverlapKql32Regular);

export { ForwardRef as default };
