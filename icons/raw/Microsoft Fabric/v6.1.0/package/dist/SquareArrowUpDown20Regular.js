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
var SvgSquareArrowUpDown20Regular = function SvgSquareArrowUpDown20Regular(_a, ref) {
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
    d: "M6 16h3.3c-.21.29-.305.645-.271 1H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6.091a1.42 1.42 0 0 0-1 0V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m12.646 17.293.793-.793a.5.5 0 0 1 .707.707L12.5 18.854a.5.5 0 0 1-.707 0l-1.647-1.647a.5.5 0 1 1 .708-.707l.792.793V13.5a.5.5 0 0 1 1 0zm4.208-4.147 1.646 1.647a.5.5 0 0 1-.707.707L17 14.707V18.5a.5.5 0 0 1-1 0v-3.793l-.793.793a.5.5 0 0 1-.707-.707l1.646-1.647a.5.5 0 0 1 .708 0"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSquareArrowUpDown20Regular);

export { ForwardRef as default };
