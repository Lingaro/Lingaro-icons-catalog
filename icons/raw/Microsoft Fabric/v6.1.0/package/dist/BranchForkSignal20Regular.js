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
var SvgBranchForkSignal20Regular = function SvgBranchForkSignal20Regular(_a, ref) {
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
    d: "M9 5a3 3 0 1 0-3.5 2.959v4.082a3 3 0 1 0 1 0V11h3.592a1.3 1.3 0 0 1 .308-.5c.3-.3.6-.5 1-.5H6.5V7.959A3 3 0 0 0 9 5M6 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4m8.5-8.5c0 .662-.257 1.264-.677 1.71A8 8 0 0 0 12 10a1.5 1.5 0 0 0 1.5-1.5v-.541a3 3 0 1 1 1 0zM16 5a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-4.538 6.02a7 7 0 0 1 7.518 7.518.5.5 0 1 1-.997-.076 6 6 0 0 0-6.445-6.445.5.5 0 1 1-.076-.997"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.445 13.03a5 5 0 0 1 5.524 5.524.5.5 0 1 1-.993-.109 4 4 0 0 0-4.42-4.42.5.5 0 1 1-.11-.995Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.4 15.06a3 3 0 0 1 3.54 3.54.5.5 0 0 1-.98-.2 2 2 0 0 0-2.36-2.36.5.5 0 1 1-.2-.98"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBranchForkSignal20Regular);

export { ForwardRef as default };
