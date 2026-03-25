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
var SvgMyLocationRibbon20Filled = function SvgMyLocationRibbon20Filled(_a, ref) {
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
    d: "M10 14.5a4.5 4.5 0 0 0 2.12-.53c.123.49.338.953.633 1.363a6 6 0 0 1-2.003.62v1.297a.75.75 0 0 1-1.5 0v-1.296a6 6 0 0 1-5.204-5.204H2.75a.75.75 0 0 1 0-1.5h1.296A6 6 0 0 1 9.25 4.046V2.75a.75.75 0 0 1 1.5 0v1.296a6 6 0 0 1 5.167 4.952 4 4 0 0 0-1.47.313A4.501 4.501 0 1 0 10 14.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 13a3 3 0 0 0 2.09-.848 4 4 0 0 1 .886-1.773A3 3 0 1 0 10 13m8.494 1.667a3 3 0 1 0-4.987-3.333 3 3 0 0 0 4.987 3.333M16 17a4 4 0 0 0 2-.535v2.285a.25.25 0 0 1-.378.215L16 18l-1.622.965A.25.25 0 0 1 14 18.75v-2.285A4 4 0 0 0 16 17"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgMyLocationRibbon20Filled);

export { ForwardRef as default };
