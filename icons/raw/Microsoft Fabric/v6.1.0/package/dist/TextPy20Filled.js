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
var SvgTextPy20Filled = function SvgTextPy20Filled(_a, ref) {
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
    d: "M10.774 5.062a.75.75 0 1 0-1.218.876l3.194 4.436v3.876a.75.75 0 0 0 1.5 0v-4.044l3.073-4.268a.75.75 0 1 0-1.217-.876L13.44 8.765zm-7.458-.309A.75.75 0 0 0 2.5 5.5v8.75a.75.75 0 0 0 1.5 0v-3h1.75a3.25 3.25 0 1 0 0-6.5H3.389zM4 6.25h1.75a1.75 1.75 0 1 1 0 3.5H4z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTextPy20Filled);

export { ForwardRef as default };
