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
var SvgDatatypeDecimal16Filled = function SvgDatatypeDecimal16Filled(_a, ref) {
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
    d: "M8.286 10.832a.75.75 0 0 0 .475.169h3.5a.75.75 0 1 0 0-1.5h-2.5a2.4 2.4 0 0 1 1.163-.839l.013-.004.012-.006c1.005-.454 1.535-1 1.804-1.542.265-.533.26-1.034.258-1.354v-.014A2.33 2.33 0 0 0 10.546 3.5a2.45 2.45 0 0 0-2.362 1.468l-.004.01a.75.75 0 0 0 1.396.55.98.98 0 0 1 .951-.528l.018.001h.017a.9.9 0 0 1 .949.842c.002.236-.001.44-.128.657-.129.221-.41.493-1.053.782-1.298.586-1.894 1.322-2.152 1.95-.256.623-.166 1.107-.153 1.169a.75.75 0 0 0 .26.43Zm-4.798-5.18-.34.227a.75.75 0 0 1-.832-1.248l.006-.005 1.5-1a.75.75 0 0 1 1.166.624v6a.75.75 0 1 1-1.5 0zM7 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatatypeDecimal16Filled);

export { ForwardRef as default };
