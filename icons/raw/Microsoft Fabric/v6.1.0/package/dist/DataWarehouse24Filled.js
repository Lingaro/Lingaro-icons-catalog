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
var SvgDataWarehouse24Filled = function SvgDataWarehouse24Filled(_a, ref) {
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
    fillRule: "evenodd",
    d: "M17.003 19.601c0 .65.196 1.256.525 1.764h-3.026v-.005a1 1 0 0 1-1-.997v-3.412c0-.84-.448-1.582-1.118-1.99l-4.147-2.558a2.34 2.34 0 0 0-2.461-.006l-3.771 2.328V12.95a.84.84 0 0 1 .4-.624l6.656-4.11a.84.84 0 0 1 .88 0l6.657 4.11c.245.145.405.41.405.714v6.56Zm1.505 0a1.748 1.748 0 1 0 3.496 0V9.126a.82.82 0 0 0-.39-.704l-5.35-3.302-.004-.003-3.828-2.362a.8.8 0 0 0-.425-.115.85.85 0 0 0-.445.13C9.236 4.207 4.37 7.208 2.4 8.421a.84.84 0 0 0-.395.71v1.68l6.271-3.873a2.34 2.34 0 0 1 2.46.007l6.64 4.099a2.32 2.32 0 0 1 1.127 1.996zM12.21 21.36l.003.005L4.5 21.36a2.495 2.495 0 0 1-2.495-2.492v-2.002a.85.85 0 0 1 .39-.62l4.166-2.57a.84.84 0 0 1 .88 0s2.27 1.402 4.16 2.566a.83.83 0 0 1 .401.709v3.412c0 .355.074.692.207.997Z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataWarehouse24Filled);

export { ForwardRef as default };
