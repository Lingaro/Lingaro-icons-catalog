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
var SvgGiftOpenWarning24Regular = function SvgGiftOpenWarning24Regular(_a, ref) {
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
    d: "M16 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2M8 9.5a3 3 0 0 1 3-3 3.75 3.75 0 0 1 3.75 3.75 4.5 4.5 0 0 1-4.5 4.5.75.75 0 1 0 0 1.5c1.412 0 2.71-.488 3.735-1.304l1.28-2.563a2.5 2.5 0 0 1 .875-.986 6 6 0 0 0 .11-1.147C16.25 7.35 13.9 5 11 5a4.5 4.5 0 0 0-4.5 4.5 3.75 3.75 0 0 0 3.75 3.75 3 3 0 0 0 3-3A2.25 2.25 0 0 0 11 8a1.5 1.5 0 0 0-1.5 1.5.75.75 0 0 0 1.5 0 .75.75 0 0 1 .75.75 1.5 1.5 0 0 1-1.5 1.5A2.25 2.25 0 0 1 8 9.5m3.214 11H7.25a1.75 1.75 0 0 1-1.75-1.75v-6a.75.75 0 0 0-1.166-.624l-3 2a.75.75 0 1 0 .832 1.248L4 14.151v4.599A3.25 3.25 0 0 0 7.25 22h3.805c-.1-.482-.06-1.002.159-1.5M19.5 4.25a.75.75 0 0 1 .75.75v.75H21a.75.75 0 0 1 0 1.5h-.75V8a.75.75 0 0 1-1.5 0v-.75H18a.75.75 0 0 1 0-1.5h.75V5a.75.75 0 0 1 .75-.75m-3.339 8.58-3.997 7.998A1.5 1.5 0 0 0 13.507 23h7.994a1.5 1.5 0 0 0 1.343-2.172l-3.997-7.998c-.553-1.107-2.133-1.107-2.686 0m1.843 2.666v3.001a.5.5 0 0 1-1 0v-3.001a.5.5 0 0 1 1 0m-.5 5.503a.5.5 0 1 1 0-1.001.5.5 0 0 1 0 1Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgGiftOpenWarning24Regular);

export { ForwardRef as default };
