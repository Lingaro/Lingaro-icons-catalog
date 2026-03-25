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
var SvgHexagonThreeRotated12Filled = function SvgHexagonThreeRotated12Filled(_a, ref) {
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
    d: "M1.827 8.747a1 1 0 0 0 .498.865l1 .58a1 1 0 0 0 1.004 0l1-.58a1 1 0 0 0 .498-.865V7.583a1 1 0 0 0-.498-.865l-1-.58a1 1 0 0 0-1.004 0l-1 .58a1 1 0 0 0-.498.865zm2.5-4.33a1 1 0 0 0 .498.865l1 .58a1 1 0 0 0 1.004 0l1-.58a1 1 0 0 0 .498-.865V3.253a1 1 0 0 0-.498-.865l-1-.58a1 1 0 0 0-1.004 0l-1 .58a1 1 0 0 0-.498.865zm2.998 5.195a1 1 0 0 1-.498-.865V7.583a1 1 0 0 1 .498-.865l1-.58a1 1 0 0 1 1.004 0l1 .58a1 1 0 0 1 .498.865v1.164a1 1 0 0 1-.498.865l-1 .58a1 1 0 0 1-1.004 0z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgHexagonThreeRotated12Filled);

export { ForwardRef as default };
