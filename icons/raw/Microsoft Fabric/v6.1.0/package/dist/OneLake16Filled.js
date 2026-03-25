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
var SvgOneLake16Filled = function SvgOneLake16Filled(_a, ref) {
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
    d: "M8.9 2.131a2 2 0 0 0-.142-.156c-.871-.871-2.267-.888-3.117-.037a2.17 2.17 0 0 0-.502 2.257c.234.99.865 2.224 2.167 3.74a11.8 11.8 0 0 0 2.513 2.205c.317-.263.638-.55.956-.85 1.149-1.082 2.92-1.037 4.048-.169A6.25 6.25 0 0 0 8.9 2.131m-.33 8.753c-1.695.696-2.981.633-3.926.28A7.22 7.22 0 0 1 4.32 5.44c.4.982 1.079 2.062 2.101 3.253.74.862 1.532 1.559 2.304 2.11a1 1 0 0 1-.155.08Zm3.004-.746c.924-.871 2.427-.528 2.953.383a5.9 5.9 0 0 1-1.151 1.938l-.046.05a7 7 0 0 1-.788.718l-.003.002-.024.018a6.9 6.9 0 0 1-3.098 1.347 6.94 6.94 0 0 1-6.508-2.447c1.233.593 2.778.842 4.643.546.725-.114 1.446-.511 2.07-.94.65-.448 1.319-1.018 1.952-1.615m-8.142 1.188a8.4 8.4 0 0 1-.143-6.45q-.075.04-.15.083C1.486 5.913.9 8.102 1.921 9.873a3.7 3.7 0 0 0 1.511 1.453",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgOneLake16Filled);

export { ForwardRef as default };
