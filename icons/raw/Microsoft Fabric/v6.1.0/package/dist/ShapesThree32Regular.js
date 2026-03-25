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
var SvgShapesThree32Regular = function SvgShapesThree32Regular(_a, ref) {
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
    d: "M6 7.25A2.25 2.25 0 0 1 8.25 5h8.5A2.25 2.25 0 0 1 19 7.25v.845a4 4 0 0 0-.724.922L17 11.253V7.25a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25v4.973a9 9 0 0 0-2 .712zm22 16.702h-9.495a9 9 0 0 0 .445-2H28L21.75 11l-3.566 6.25a9 9 0 0 0-1.202-1.93l3.031-5.311a2 2 0 0 1 3.474 0l6.25 10.951A2 2 0 0 1 28 23.953ZM10 28a7 7 0 1 0 0-14 7 7 0 0 0 0 14m5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgShapesThree32Regular);

export { ForwardRef as default };
