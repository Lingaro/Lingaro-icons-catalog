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
var SvgBranchAdd20Filled = function SvgBranchAdd20Filled(_a, ref) {
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
    d: "M14.5 10a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 2a.5.5 0 0 0-.5.5V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5a.5.5 0 0 0-.5-.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 2a3 3 0 0 1 .854 5.876c.178.222.417.483.721.744a5.7 5.7 0 0 0 2.877 1.3 5.5 5.5 0 0 0-.963.817A6.6 6.6 0 0 1 7.5 8.981v3.06a3 3 0 0 1 1.714.938 5.5 5.5 0 0 0 .249 3.73A3 3 0 1 1 6.5 12.041V7.959A3.001 3.001 0 0 1 7 2m8 5a3 3 0 0 1 2.988 3.248A5.48 5.48 0 0 0 14.5 9c-.889 0-1.728.212-2.47.586A3 3 0 0 1 15 7"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBranchAdd20Filled);

export { ForwardRef as default };
