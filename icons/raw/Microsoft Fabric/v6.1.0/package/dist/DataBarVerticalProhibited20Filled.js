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
var SvgDataBarVerticalProhibited20Filled = function SvgDataBarVerticalProhibited20Filled(_a, ref) {
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
    d: "M5 3.001a2 2 0 0 0-2 2v10a2 2 0 0 0 4 0v-10a2 2 0 0 0-2-2m5 3a2 2 0 0 0-2 2v7a2 2 0 0 0 1.577 1.955A5.5 5.5 0 0 1 12 9.6V8.002a2 2 0 0 0-2-2Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 14.501a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0m1 0c0 .786.26 1.512.697 2.096l4.9-4.9A3.5 3.5 0 0 0 11 14.5Zm3.5 3.5a3.5 3.5 0 0 0 2.803-5.596l-4.9 4.9a3.5 3.5 0 0 0 2.097.696"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataBarVerticalProhibited20Filled);

export { ForwardRef as default };
