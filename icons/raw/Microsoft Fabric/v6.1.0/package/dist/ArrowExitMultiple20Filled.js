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
var SvgArrowExitMultiple20Filled = function SvgArrowExitMultiple20Filled(_a, ref) {
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
    d: "M3.49 14.5v-9c0-1.105.89-2 1.988-2h5.777A.75.75 0 0 0 12 2.75a.75.75 0 0 0-.745-.75H5.478C3.558 2 2 3.567 2 5.5v9C2 16.433 3.557 18 5.478 18h5.777a.75.75 0 0 0 .745-.75.75.75 0 0 0-.745-.75H5.478a1.994 1.994 0 0 1-1.987-2Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.238 5.177a.75.75 0 0 1 1.06 0l1.768 1.768a.75.75 0 0 1 0 1.06l-1.768 1.768a.75.75 0 1 1-1.06-1.06l.212-.213h-5.7a.75.75 0 0 1 0-1.5H15l-.762-.762a.75.75 0 0 1 0-1.06Zm-3.19 5a.75.75 0 0 0-1.061 0l-1.768 1.768a.75.75 0 0 0 0 1.06l1.768 1.768a.75.75 0 1 0 1.06-1.06l-.212-.213h5.7a.75.75 0 0 0 0-1.5h-6.25l.763-.762a.75.75 0 0 0 0-1.06Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgArrowExitMultiple20Filled);

export { ForwardRef as default };
