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
var SvgHexagonThreeRotated32Filled = function SvgHexagonThreeRotated32Filled(_a, ref) {
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
    d: "M17 2.423a2 2 0 0 0-2 0l-4.629 2.672a2 2 0 0 0-1 1.732v5.346a2 2 0 0 0 1 1.732l4.63 2.672a2 2 0 0 0 2 0l4.628-2.672a2 2 0 0 0 1-1.732V6.827a2 2 0 0 0-1-1.732zm-7.5 12.75a2 2 0 0 0-2 0l-4.629 2.672a2 2 0 0 0-1 1.732v5.346a2 2 0 0 0 1 1.732l4.63 2.672a2 2 0 0 0 2 0l4.628-2.672a2 2 0 0 0 1-1.732v-5.346a2 2 0 0 0-1-1.732zm15 0a2 2 0 0 0-2 0l-4.629 2.672a2 2 0 0 0-1 1.732v5.346a2 2 0 0 0 1 1.732l4.63 2.672a2 2 0 0 0 2 0l4.628-2.672a2 2 0 0 0 1-1.732v-5.346a2 2 0 0 0-1-1.732z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgHexagonThreeRotated32Filled);

export { ForwardRef as default };
