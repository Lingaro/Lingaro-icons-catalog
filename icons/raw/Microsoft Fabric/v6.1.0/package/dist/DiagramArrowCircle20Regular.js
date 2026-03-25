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
var SvgDiagramArrowCircle20Regular = function SvgDiagramArrowCircle20Regular(_a, ref) {
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
    d: "m7.354 13.855 1.439-1.44a.5.5 0 0 0-.707-.707l-.586.586V9.001h5v3.293l-.586-.586a.5.5 0 0 0-.707.707l1.439 1.44a.5.5 0 0 0 .708 0l1.439-1.44a.5.5 0 0 0-.707-.707l-.586.586V8.501a.5.5 0 0 0-.5-.5h-2.5v-2.5a.5.5 0 0 0-1 0v2.5H7a.5.5 0 0 0-.5.5v3.793l-.586-.586a.5.5 0 0 0-.707.707l1.439 1.44a.5.5 0 0 0 .708 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.445 16.653A8 8 0 1 1 5.555 3.35a8 8 0 0 1 8.89 13.303m1.375-2.763A7 7 0 1 0 4.18 6.112a7 7 0 0 0 11.64 7.778"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDiagramArrowCircle20Regular);

export { ForwardRef as default };
