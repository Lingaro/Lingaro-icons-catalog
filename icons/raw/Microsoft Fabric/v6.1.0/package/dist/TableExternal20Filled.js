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
var SvgTableExternal20Filled = function SvgTableExternal20Filled(_a, ref) {
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
    d: "M18.677 1h-2.828a.5.5 0 0 0 0 1h1.621l-5.292 5.293a.5.5 0 0 0 .707.707l5.292-5.293v1.621a.5.5 0 0 0 1 0V1.5a.5.5 0 0 0-.144-.351l-.002-.003-.002-.002A.5.5 0 0 0 18.68 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 3q.26 0 .505.051L13 5.056V3zm-.908 5.707a1.5 1.5 0 0 1-.592.365V12h4V8h-2.701zM11.073 8A1.5 1.5 0 0 0 12 9.05V12H8V8zm.397-1.414.53-.53V3H8v4h3.177q.108-.227.293-.414M15.299 7l1.694-1.694Q17 5.402 17 5.5V7zM13 17h1.5a2.5 2.5 0 0 0 2.5-2.5V13h-4zm-1-4H8v4h4zm-5-1V8H3v4zm0 1H3v1.5A2.5 2.5 0 0 0 5.5 17H7zM7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTableExternal20Filled);

export { ForwardRef as default };
