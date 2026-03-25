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
var SvgMyLocationRibbon20Regular = function SvgMyLocationRibbon20Regular(_a, ref) {
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
    d: "M10 15c.82 0 1.592-.197 2.275-.546a4 4 0 0 0 .478.879 6 6 0 0 1-2.253.646V17.5a.5.5 0 0 1-1 0v-1.52a6 6 0 0 1-5.48-5.48H2.5a.5.5 0 0 1 0-1h1.52A6 6 0 0 1 9.5 4.02V2.5a.5.5 0 0 1 1 0v1.52a6 6 0 0 1 5.417 4.978 4 4 0 0 0-.99.146A5.001 5.001 0 0 0 5 10a5 5 0 0 0 5 5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 13a3 3 0 0 0 2.09-.848 4 4 0 0 1 .886-1.773A3 3 0 1 0 10 13m8.494 1.667a3 3 0 1 0-4.987-3.333 3 3 0 0 0 4.987 3.333M16 17a4 4 0 0 0 2-.535v2.285a.25.25 0 0 1-.378.215L16 18l-1.622.965A.25.25 0 0 1 14 18.75v-2.285A4 4 0 0 0 16 17"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgMyLocationRibbon20Regular);

export { ForwardRef as default };
