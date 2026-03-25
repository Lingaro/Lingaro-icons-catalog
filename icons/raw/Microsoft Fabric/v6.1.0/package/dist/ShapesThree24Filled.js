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
var SvgShapesThree24Filled = function SvgShapesThree24Filled(_a, ref) {
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
    d: "M6 2.75a2 2 0 0 0-2 2v4.832a6.7 6.7 0 0 1 3.25-.832 6.7 6.7 0 0 1 3.299.86l2.012-3.485A3.3 3.3 0 0 1 13 5.528V4.75a2 2 0 0 0-2-2zm14.246 15.188h-6.7A6.7 6.7 0 0 0 14 15.5c0-1.988-.86-3.775-2.227-5.01l2.086-3.615c.674-1.167 2.358-1.167 3.031 0l4.872 8.438c.674 1.166-.169 2.624-1.516 2.624ZM12.5 15.5a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgShapesThree24Filled);

export { ForwardRef as default };
