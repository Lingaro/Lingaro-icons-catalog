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
var SvgFolderTable24Filled = function SvgFolderTable24Filled(_a, ref) {
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
    d: "M2 8V6.25A3.25 3.25 0 0 1 5.25 3h2.879a2.25 2.25 0 0 1 1.59.659l1.531 1.53L8.659 7.78a.75.75 0 0 1-.53.22z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 9.5v8.25A3.25 3.25 0 0 0 5.25 21h4.416a4.8 4.8 0 0 1-.166-1.25v-6.5a4.75 4.75 0 0 1 4.75-4.75h6.5c.432 0 .851.058 1.249.166A3.25 3.25 0 0 0 18.75 5.5h-5.69L9.72 8.841a2.25 2.25 0 0 1-1.591.659z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 13.25A3.25 3.25 0 0 1 14.25 10h6.5A3.25 3.25 0 0 1 24 13.25v6.5A3.25 3.25 0 0 1 20.75 23h-6.5A3.25 3.25 0 0 1 11 19.75zm3.25-1.75a1.75 1.75 0 0 0-1.75 1.75V14H15v-2.5zM15 18v-2.5h-2.5V18zm1.5-2.5V18h2v-2.5zm3.5 0V18h2.5v-2.5zm-1.5 4h-2v2h2zm4 0H20v2h.75a1.75 1.75 0 0 0 1.75-1.75zm-1.75-8H20V14h2.5v-.75a1.75 1.75 0 0 0-1.75-1.75M16.5 14h2v-2.5h-2zM15 21.5v-2h-2.5v.25c0 .966.784 1.75 1.75 1.75z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgFolderTable24Filled);

export { ForwardRef as default };
