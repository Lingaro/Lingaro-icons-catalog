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
var SvgFolderTable16Filled = function SvgFolderTable16Filled(_a, ref) {
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
    d: "M0 4.5A2.5 2.5 0 0 1 2.5 2h2.086a1.5 1.5 0 0 1 1.06.44L7 3.792l-.496.496A4 4 0 0 0 4.535 6H0zM0 7h4.126Q4.001 7.481 4 8v5q.001.519.126 1H2.5A2.5 2.5 0 0 1 0 11.5zm5 1a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3zm3-2a2 2 0 0 0-2 2h2zm4 0H9v2h3zm3 2a2 2 0 0 0-2-2v2zm-3 1H9v3h3zm3 0h-2v3h2zm-3 4H9v2h3zm1 2a2 2 0 0 0 2-2h-2zm-5-3V9H6v3zm-2 1a2 2 0 0 0 2 2v-2z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgFolderTable16Filled);

export { ForwardRef as default };
