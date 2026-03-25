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
var SvgDatatypeString20Filled = function SvgDatatypeString20Filled(_a, ref) {
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
    d: "M13.363 10.937a2.5 2.5 0 0 0-.713-1.062 2.5 2.5 0 0 0-1.894-4.124H8.5a.75.75 0 0 0-.75.75v7a.75.75 0 0 0 .75.75H11c.536 0 1.049-.168 1.481-.486s.745-.757.904-1.27a2.5 2.5 0 0 0-.022-1.558M9.25 9.251v-2h1.499c.264 0 .521.108.708.294s.292.442.293.706a1 1 0 0 1-1 1zm1.75 3.5H9.25v-2H11a1.003 1.003 0 0 1 1 1 1.003 1.003 0 0 1-1 1m4.866-5.134A1.25 1.25 0 0 1 18 8.501a.75.75 0 0 0 1.5 0 2.75 2.75 0 1 0-5.5 0v3a2.75 2.75 0 1 0 5.5 0 .75.75 0 0 0-1.5 0 1.25 1.25 0 0 1-2.5 0v-3c0-.332.132-.65.366-.884M1.06 14.205a.76.76 0 0 0 .573-.027.75.75 0 0 0 .386-.427l.447-1.25H5.16l.446 1.249a.75.75 0 0 0 .387.429.8.8 0 0 0 .28.07.75.75 0 0 0 .719-.429.76.76 0 0 0 .026-.571L4.52 6.25a.75.75 0 0 0-1.413-.001l-2.5 6.999a.75.75 0 0 0 .453.959zm3.564-3.204H3.002l.811-2.271z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatatypeString20Filled);

export { ForwardRef as default };
