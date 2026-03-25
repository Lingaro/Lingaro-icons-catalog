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
var SvgCircleTree20Regular = function SvgCircleTree20Regular(_a, ref) {
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
    d: "M8 4.5a2.5 2.5 0 0 1-2 2.45V8.5A1.5 1.5 0 0 0 7.5 10h3.55a2.5 2.5 0 1 1 0 1H7.5a2.5 2.5 0 0 1-1.5-.5v4A1.5 1.5 0 0 0 7.5 16h3.55a2.5 2.5 0 1 1 0 1H7.5A2.5 2.5 0 0 1 5 14.5V6.95A2.5 2.5 0 1 1 8 4.5M5.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M12 16.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0m1.5-4.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgCircleTree20Regular);

export { ForwardRef as default };
