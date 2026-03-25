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
var SvgArrowDownDoubleWrap20Regular = function SvgArrowDownDoubleWrap20Regular(_a, ref) {
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
    d: "m15.5 14.293.646-.647a.5.5 0 0 1 .708.707l-1.5 1.5a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.707l.646.647V5a.5.5 0 0 1 1 0zm-10 0 .646-.647a.5.5 0 1 1 .708.707l-1.5 1.5a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.707l.646.647V4.5a.5.5 0 0 1 1 0zm.539 1.826a.5.5 0 0 0 .273.653 3.06 3.06 0 0 0 2.322 0 .5.5 0 0 0 .273-.653.507.507 0 0 0-.66-.27 2 2 0 0 1-.774.151c-.275 0-.536-.054-.774-.152a.507.507 0 0 0-.66.27Zm3.576-.7a.507.507 0 0 0 .66-.27 3 3 0 0 0 .23-1.149v-1c0-.276-.226-.5-.505-.5a.503.503 0 0 0-.505.5v1c0 .272-.055.53-.154.765a.5.5 0 0 0 .274.654M10.505 6c0-.272.055-.53.154-.765a.5.5 0 0 0-.274-.654.507.507 0 0 0-.66.27A3 3 0 0 0 9.495 6v1c0 .276.226.5.505.5.28 0 .505-.224.505-.5zM10 8.5a.503.503 0 0 0-.505.5v2c0 .276.226.5.505.5.28 0 .505-.224.505-.5V9c0-.276-.226-.5-.505-.5m1.093-4.619a.507.507 0 0 0 .66.27 2.05 2.05 0 0 1 1.548.001.507.507 0 0 0 .66-.27.5.5 0 0 0-.273-.654A3.1 3.1 0 0 0 12.528 3c-.411 0-.804.08-1.162.228a.5.5 0 0 0-.273.653"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgArrowDownDoubleWrap20Regular);

export { ForwardRef as default };
