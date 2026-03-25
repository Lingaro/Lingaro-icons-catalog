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
var SvgStreamSearch20Regular = function SvgStreamSearch20Regular(_a, ref) {
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
    d: "M13 3a6 6 0 0 0-6 6v.758a4.5 4.5 0 0 0-1-.502V9a7 7 0 0 1 7-7h.5a.5.5 0 0 1 0 1zM9.921 16.8A7 7 0 0 0 13 11v-1a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H14a2 2 0 0 0-2 2v1a6 6 0 0 1-2.801 5.077z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 10.5a4.48 4.48 0 0 1-1.003 2.832 4.5 4.5 0 0 0-.289-1.43c.188-.43.292-.903.292-1.402v-1A4.5 4.5 0 0 1 13.5 5h4a.5.5 0 0 1 0 1h-4A3.5 3.5 0 0 0 10 9.5zM4.5 17c.786 0 1.512-.26 2.096-.697l2.55 2.55a.5.5 0 1 0 .708-.707l-2.55-2.55A3.5 3.5 0 1 0 4.5 17m0-1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgStreamSearch20Regular);

export { ForwardRef as default };
