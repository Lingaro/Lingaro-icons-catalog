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
var SvgCircleTree16Regular = function SvgCircleTree16Regular(_a, ref) {
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
    d: "M6 3a2 2 0 0 1-1.504 1.938q.004.03.004.062v2A1.5 1.5 0 0 0 6 8.5h3.063a2 2 0 1 1 0 1H6A2.5 2.5 0 0 1 4.5 9v3A1.5 1.5 0 0 0 6 13.5h3q.032 0 .062.004a2 2 0 1 1 0 .992L9 14.5H6A2.5 2.5 0 0 1 3.5 12V5q0-.032.004-.062A2 2 0 1 1 6 3M4 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m7 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgCircleTree16Regular);

export { ForwardRef as default };
