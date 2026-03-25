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
var SvgSquareMultiple20Filled = function SvgSquareMultiple20Filled(_a, ref) {
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
    d: "M6.491 2.017a2.5 2.5 0 0 0-2.493 2.507l.01 3.54q.234-.046.484-.048L7 8.01v-.486a2.5 2.5 0 0 1 2.492-2.507l5.536-.015-.001-.508A2.5 2.5 0 0 0 12.52 2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m15.5 13.98-2.508.007-.01-3.494A2.5 2.5 0 0 0 10.475 8L8 8.006V7.52a1.5 1.5 0 0 1 1.495-1.504L15.478 6a1.5 1.5 0 0 1 1.504 1.495l.014 4.981A1.5 1.5 0 0 1 15.5 13.98"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m4.443 9.017.053-.001L10.479 9a1.5 1.5 0 0 1 1.504 1.495l.014 4.981A1.5 1.5 0 0 1 10.5 16.98l-5.983.017a1.5 1.5 0 0 1-1.504-1.496L3 10.521a1.5 1.5 0 0 1 1.443-1.504"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSquareMultiple20Filled);

export { ForwardRef as default };
