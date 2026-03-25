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
var SvgDatatypeUniqueIdentifier16Filled = function SvgDatatypeUniqueIdentifier16Filled(_a, ref) {
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
    d: "M2 5.751a.75.75 0 1 0-1.5 0v3.5a2.75 2.75 0 1 0 5.5 0v-3.5a.75.75 0 1 0-1.5 0v3.5a1.25 1.25 0 1 1-2.5 0zm6.75 0a.75.75 0 1 0-1.5 0v5.5a.75.75 0 0 0 1.5 0zm2.094-.75-.047.001a.75.75 0 0 0-.797.749v5.5a.75.75 0 0 0 .797.748l.047.002h1.406a3.25 3.25 0 0 0 3.25-3.25v-.5a3.25 3.25 0 0 0-3.25-3.25zm.656 5.5v-4h.75c.966 0 1.75.783 1.75 1.75v.5a1.75 1.75 0 0 1-1.75 1.75z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatatypeUniqueIdentifier16Filled);

export { ForwardRef as default };
