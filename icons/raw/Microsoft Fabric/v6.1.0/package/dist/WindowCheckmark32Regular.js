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
var SvgWindowCheckmark32Regular = function SvgWindowCheckmark32Regular(_a, ref) {
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
    d: "M7.501 3a4.5 4.5 0 0 0-4.5 4.5v17a4.5 4.5 0 0 0 4.5 4.5h8.792a9 9 0 0 1-1.356-2H7.5A2.5 2.5 0 0 1 5 24.5V11h22v3.935c.728.362 1.4.82 2 1.357V7.5A4.5 4.5 0 0 0 24.5 3h-17Zm-2.5 4.5a2.5 2.5 0 0 1 2.5-2.5h17a2.5 2.5 0 0 1 2.5 2.5V9h-22z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23.001 15.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15m4.53 4.72a.75.75 0 0 0-1.06 0l-4.72 4.72-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0 0-1.06"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgWindowCheckmark32Regular);

export { ForwardRef as default };
