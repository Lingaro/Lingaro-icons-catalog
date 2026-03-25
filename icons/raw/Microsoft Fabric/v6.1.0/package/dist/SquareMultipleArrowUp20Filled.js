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
var SvgSquareMultipleArrowUp20Filled = function SvgSquareMultipleArrowUp20Filled(_a, ref) {
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
    d: "M3.5 4A1.5 1.5 0 0 0 2 5.5v2A1.5 1.5 0 0 0 3.5 9h2A1.5 1.5 0 0 0 7 7.5v-2A1.5 1.5 0 0 0 5.5 4zm6 0A1.5 1.5 0 0 0 8 5.5v2A1.5 1.5 0 0 0 9.5 9h2A1.5 1.5 0 0 0 13 7.5v-2A1.5 1.5 0 0 0 11.5 4zM14 5.5A1.5 1.5 0 0 1 15.5 4h2A1.5 1.5 0 0 1 19 5.5v2A1.5 1.5 0 0 1 17.5 9h-2A1.5 1.5 0 0 1 14 7.5zm-3.788 5.306a.75.75 0 0 1 .819.163l1.649 1.65a.75.75 0 0 1-1.06 1.06l-.004-.002-.366-.367v4.19a.75.75 0 1 1-1.5 0v-4.19l-.37.37a.75.75 0 0 1-1.06-1.06l.003-.004 1.646-1.647a.8.8 0 0 1 .243-.163"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSquareMultipleArrowUp20Filled);

export { ForwardRef as default };
