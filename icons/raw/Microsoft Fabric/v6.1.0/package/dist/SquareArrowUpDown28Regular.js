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
var SvgSquareArrowUpDown28Regular = function SvgSquareArrowUpDown28Regular(_a, ref) {
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
    d: "M3 6.75A3.75 3.75 0 0 1 6.75 3h14.5A3.75 3.75 0 0 1 25 6.75v9.806a2.3 2.3 0 0 0-.514-.056c-.348 0-.683.078-.986.227V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v14.5a2.25 2.25 0 0 0 2.25 2.25h7.313a2.27 2.27 0 0 0 .166 1.5H6.75A3.75 3.75 0 0 1 3 21.25z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.958 26.78a.75.75 0 0 0 .537.22.75.75 0 0 0 .537-.22l2.234-2.234a.75.75 0 1 0-1.061-1.061l-.955.955v-5.69a.75.75 0 0 0-1.5 0v5.701l-.966-.966a.75.75 0 1 0-1.061 1.061zm8.247-5.265-.966-.966v5.701a.75.75 0 0 1-1.5 0v-5.69l-.955.955a.75.75 0 1 1-1.061-1.061l2.234-2.234a.75.75 0 0 1 .537-.22.75.75 0 0 1 .537.22l2.234 2.234a.75.75 0 0 1-1.06 1.061"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSquareArrowUpDown28Regular);

export { ForwardRef as default };
