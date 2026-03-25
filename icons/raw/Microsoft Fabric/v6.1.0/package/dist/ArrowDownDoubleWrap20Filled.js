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
var SvgArrowDownDoubleWrap20Filled = function SvgArrowDownDoubleWrap20Filled(_a, ref) {
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
    d: "M11.753 4.152a.507.507 0 0 1-.66-.27.5.5 0 0 1 .273-.654A3 3 0 0 1 12.527 3c.41 0 .803.08 1.161.228.258.106.38.398.273.653a.507.507 0 0 1-.66.27A2 2 0 0 0 12.527 4c-.275 0-.536.054-.774.152m-1.094 1.083a2 2 0 0 0-.154.765v1c0 .276-.226.5-.505.5a.503.503 0 0 1-.505-.5V6c0-.406.081-.794.23-1.149a.507.507 0 0 1 .66-.27.5.5 0 0 1 .274.654M9.615 15.419a.507.507 0 0 0 .66-.27 3 3 0 0 0 .23-1.149v-1c0-.276-.226-.5-.505-.5a.503.503 0 0 0-.505.5v1c0 .272-.055.53-.154.765a.5.5 0 0 0 .274.654m-3.576.7a.5.5 0 0 0 .273.653 3.06 3.06 0 0 0 2.322 0 .5.5 0 0 0 .273-.653.507.507 0 0 0-.66-.27 2 2 0 0 1-.774.151c-.275 0-.536-.054-.774-.152a.507.507 0 0 0-.66.27ZM10 8.5a.503.503 0 0 0-.505.5v2c0 .276.226.5.505.5.28 0 .505-.224.505-.5V9c0-.276-.226-.5-.505-.5M5.75 4.75A.75.75 0 0 0 5.002 4H5a.75.75 0 0 0-.75.75v8.69l-.22-.22a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06 0l1.5-1.5a.75.75 0 1 0-1.06-1.06l-.22.22zm10 8.69.22-.22a.75.75 0 1 1 1.06 1.06l-1.5 1.5a.75.75 0 0 1-1.06 0l-1.5-1.5a.75.75 0 1 1 1.06-1.06l.22.22V4.75a.75.75 0 0 1 1.5 0z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgArrowDownDoubleWrap20Filled);

export { ForwardRef as default };
