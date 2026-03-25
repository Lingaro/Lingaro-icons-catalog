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
var SvgSquareMultiple20Regular = function SvgSquareMultiple20Regular(_a, ref) {
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
    d: "m12.995 14.988 2.51-.007a2.5 2.5 0 0 0 2.493-2.507l-.014-4.981A2.5 2.5 0 0 0 15.477 5h-.443l-.006-.51A2.5 2.5 0 0 0 12.52 2l-6.029.017A2.5 2.5 0 0 0 4 4.524l.012 3.54A2.5 2.5 0 0 0 2 10.523l.014 4.98a2.5 2.5 0 0 0 2.507 2.494l5.983-.017a2.5 2.5 0 0 0 2.493-2.506zm-.002-1-.01-3.495A2.5 2.5 0 0 0 10.476 8l-2.474.006-.001-.486a1.5 1.5 0 0 1 1.496-1.504L15.48 6a1.5 1.5 0 0 1 1.504 1.495l.014 4.981a1.5 1.5 0 0 1-1.496 1.505zM5.01 8.015 4.999 4.52a1.5 1.5 0 0 1 1.496-1.504L12.524 3a1.5 1.5 0 0 1 1.504 1.496l.006.508-4.54.012a2.5 2.5 0 0 0-2.493 2.507l.001.486zM3 10.52a1.5 1.5 0 0 1 1.496-1.504L10.479 9a1.5 1.5 0 0 1 1.504 1.495l.014 4.981A1.5 1.5 0 0 1 10.5 16.98l-5.983.017a1.5 1.5 0 0 1-1.504-1.496L3 10.521Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSquareMultiple20Regular);

export { ForwardRef as default };
