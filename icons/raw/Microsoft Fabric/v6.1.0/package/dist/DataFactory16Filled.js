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
var SvgDataFactory16Filled = function SvgDataFactory16Filled(_a, ref) {
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
    d: "M5.059 1a.485.485 0 0 0-.48.553 8.72 8.72 0 0 0 8.63 7.465h1.787V5.96c0-.644-.521-1.165-1.165-1.165h-.483A4.08 4.08 0 0 1 9.447 1.91l-.154-.497A.585.585 0 0 0 8.736 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.103 5.666H1.495c-.273 0-.495.263-.495.585v3.5c0 .322.222.584.495.584h8.891c.239 0 .439-.201.485-.467a1 1 0 0 0 .01-.117v-.013a9.73 9.73 0 0 1-5.778-4.072"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.386 11.335c.895 0 1.407-.737 1.485-1.408q.657.09 1.338.091h1.787l.004-.003v.025c0 .645-.521 1.166-1.165 1.166h-.483A4.08 4.08 0 0 0 9.45 14.09l-.154.497A.585.585 0 0 1 8.74 15H5.052a.478.478 0 0 1-.472-.546 8.6 8.6 0 0 1 1.105-3.12h4.701Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataFactory16Filled);

export { ForwardRef as default };
