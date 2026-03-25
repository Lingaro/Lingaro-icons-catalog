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
var SvgTableKql24Filled = function SvgTableKql24Filled(_a, ref) {
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
    d: "M17.97 20.97a.75.75 0 0 1 1.06 1.06l-.75.75a.75.75 0 0 1-1.06-1.06zm-2-2a.75.75 0 0 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06-1.06zM21.5 14a.5.5 0 0 1 .5.5v6.293a.5.5 0 0 1-.854.354l-6.293-6.293a.5.5 0 0 1 .354-.854zM8 21H6.25A3.25 3.25 0 0 1 3 17.75V16h5zm5.6-5q-.107.063-.204.143l-.133.12-.75.75a1.75 1.75 0 0 0 1.026 2.972l-.276.278c-.213.213-.36.467-.44.737H9.5v-5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.97 16.97a.75.75 0 0 1 1.06 1.06l-.75.75a.75.75 0 0 1-1.06-1.06zM8 14.5H3v-5h5zm6.5-1.327a1.52 1.52 0 0 0-.795 1.327H9.5v-5h5zM21 13h-5V9.5h5zM8 8H3V6.25A3.25 3.25 0 0 1 6.25 3H8zm6.5 0h-5V3h5zm3.25-5A3.25 3.25 0 0 1 21 6.25V8h-5V3z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTableKql24Filled);

export { ForwardRef as default };
