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
var SvgShapesThree16Filled = function SvgShapesThree16Filled(_a, ref) {
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
    d: "M3 4.75C3 3.784 3.784 3 4.75 3h2.5c.887 0 1.62.66 1.734 1.514-.233.185-.44.417-.605.697L7.062 7.44A3.94 3.94 0 0 0 5.25 7c-.814 0-1.57.246-2.2.668A1.8 1.8 0 0 1 3 7.25zm6.203 6.203q-.002.546-.14 1.047h3.842a1.5 1.5 0 0 0 1.292-2.263L11.822 5.72a1.5 1.5 0 0 0-2.583 0L7.888 8.008a3.94 3.94 0 0 1 1.315 2.945M8.25 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgShapesThree16Filled);

export { ForwardRef as default };
