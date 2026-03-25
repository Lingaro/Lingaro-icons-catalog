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
var SvgStreamSearch20Filled = function SvgStreamSearch20Filled(_a, ref) {
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
    d: "M13.25 3.5A5.75 5.75 0 0 0 7.5 9.25v.896a4.5 4.5 0 0 0-1.5-.89V9.25A7.25 7.25 0 0 1 13.25 2h.5a.75.75 0 0 1 0 1.5zm-3.202 13.427A7.25 7.25 0 0 0 13.5 10.75v-1a.75.75 0 0 1 .75-.75h3a.75.75 0 0 0 0-1.5h-3A2.25 2.25 0 0 0 12 9.75v1a5.75 5.75 0 0 1-3.05 5.078z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 10.5c0 1.379-.588 2.62-1.526 3.489a4.55 4.55 0 0 0-.277-2.116C8.89 11.456 9 10.99 9 10.5v-1a4.75 4.75 0 0 1 4.75-4.75h3.5a.75.75 0 0 1 0 1.5h-3.5A3.25 3.25 0 0 0 10.5 9.5zm-6 6.5c.786 0 1.512-.26 2.096-.697l2.55 2.55a.5.5 0 1 0 .708-.707l-2.55-2.55A3.5 3.5 0 1 0 4.5 17m0-1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgStreamSearch20Filled);

export { ForwardRef as default };
