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
var SvgDataEngineering28Filled = function SvgDataEngineering28Filled(_a, ref) {
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
    d: "M19.602 2.195A.98.98 0 0 0 19.009 2h-9.35c-.51 0-1.002.21-1.366.584L2.58 8.494c-.371.381-.58.902-.58 1.444v8.282c0 .408.118.803.334 1.136l.002.003.003.005q.104.166.239.31l1.359 1.497a5 5 0 0 1 .55-2.743c1.1-2.123 1.726-2.542 3.658-3.838 1.114-.747 2.664-1.786 4.99-3.612 2.95-2.315 5.898-5.948 6.732-7.567a.954.954 0 0 0-.265-1.216"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.803 24.244a7.4 7.4 0 0 1-.97-1.59c-.479-1.08-.674-2.3-.053-3.498.408-.788.706-1.246.996-1.588.284-.333.605-.61 1.131-.985.273-.195.6-.414.989-.675a77 77 0 0 0 3.68-2.598l1.512 2.374c1.177 1.842 2.504 3.67 4.423 4.618 1.42.701 2.893 1.05 4.164 1.082h.018l-1.86 1.864-.006-.006-2.24 2.193c-.36.35-.834.564-1.327.566H9.278a1.9 1.9 0 0 1-1.396-.611z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m25.324 18.74-.687.685c-.2.18-.79.45-1.885.43-1.061-.02-2.35-.313-3.612-.937-1.136-.561-2.058-1.538-2.943-2.766 4.542-2.94 6.949-6.563 6.949-6.563C24.156 8.102 26 9.11 26 10.7v6.536a2.3 2.3 0 0 1-.676 1.506Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataEngineering28Filled);

export { ForwardRef as default };
