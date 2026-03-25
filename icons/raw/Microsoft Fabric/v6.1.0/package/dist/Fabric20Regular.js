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
var SvgFabric20Regular = function SvgFabric20Regular(_a, ref) {
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
    d: "M5.138 8.892 15.72 7.329l1.149-4.252-9.715 1.436a1.88 1.88 0 0 0-1.5 1.352v.002l-.83 3.088a9 9 0 0 1 .315-.063Zm-.45-3.29L2.1 15.072a2.252 2.252 0 0 0 1.902 2.9 3.8 3.8 0 0 0 1.077-.016l1.846-.255a1.17 1.17 0 0 0 .968-.851l.873-3.206 2.855-.417a.68.68 0 0 0 .555-.498l1.038-4.02 2.88-.425a.64.64 0 0 0 .53-.468l1.355-5.006a.637.637 0 0 0-.614-.81 1 1 0 0 0-.081.005L7 3.525a2.87 2.87 0 0 0-2.312 2.077M4.6 10.205c.134-.107.423-.26 1.11-.387l6.43-.95-.88 3.402-7.196 1.048q-.258.042-.486.09l.741-2.721c.098-.29.177-.398.281-.482M3 15.734q.002-.236.08-.441c.057-.146.369-.843 1.485-1.033l3.12-.454-.757 2.78a.17.17 0 0 1-.14.124l-1.846.255-.009.001a3.2 3.2 0 0 1-.821.011A1.25 1.25 0 0 1 3 15.734",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgFabric20Regular);

export { ForwardRef as default };
