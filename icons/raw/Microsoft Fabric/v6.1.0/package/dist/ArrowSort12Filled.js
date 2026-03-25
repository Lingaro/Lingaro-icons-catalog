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
var SvgArrowSort12Filled = function SvgArrowSort12Filled(_a, ref) {
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
    d: "M8.5 1a.75.75 0 0 1 .75.75v6.616l.746-.745a.75.75 0 0 1 1.06 1.06l-2.062 2.063a.75.75 0 0 1-1.06 0L5.97 8.78a.75.75 0 0 1 1.06-1.06l.72.72V1.75A.75.75 0 0 1 8.5 1M4.97 4.28a.75.75 0 0 0 1.06-1.06L4.067 1.256a.75.75 0 0 0-1.06 0L.943 3.32a.75.75 0 0 0 1.06 1.06l.746-.745v6.616a.75.75 0 0 0 1.5 0V3.56z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgArrowSort12Filled);

export { ForwardRef as default };
