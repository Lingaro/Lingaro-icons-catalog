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
var SvgHexagonThreeRotated24Filled = function SvgHexagonThreeRotated24Filled(_a, ref) {
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
    d: "M3.556 19.854a1.75 1.75 0 0 1-.875-1.516v-3.175c0-.626.333-1.203.875-1.516l2.75-1.588a1.75 1.75 0 0 1 1.75 0l2.75 1.588c.541.313.875.89.875 1.516v3.175a1.75 1.75 0 0 1-.875 1.516l-2.75 1.587a1.75 1.75 0 0 1-1.75 0zm10.124-1.516c0 .625.334 1.203.876 1.516l2.75 1.587a1.75 1.75 0 0 0 1.75 0l2.75-1.587a1.75 1.75 0 0 0 .875-1.516v-3.175a1.75 1.75 0 0 0-.875-1.516l-2.75-1.588a1.75 1.75 0 0 0-1.75 0l-2.75 1.588a1.75 1.75 0 0 0-.875 1.516zm-5.5-9.5c0 .625.334 1.203.876 1.516l2.75 1.587a1.75 1.75 0 0 0 1.75 0l2.75-1.587a1.75 1.75 0 0 0 .875-1.516V5.663a1.75 1.75 0 0 0-.875-1.516l-2.75-1.588a1.75 1.75 0 0 0-1.75 0l-2.75 1.588a1.75 1.75 0 0 0-.875 1.516z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgHexagonThreeRotated24Filled);

export { ForwardRef as default };
