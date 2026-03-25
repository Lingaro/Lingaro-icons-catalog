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
var SvgDataScience16Filled = function SvgDataScience16Filled(_a, ref) {
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
    d: "m6.862 15.003.283-.473 3.598-6.01 2.7-4.51a.6.6 0 0 0 .082-.312.6.6 0 0 0-.338-.553L8.27 1.061a.74.74 0 0 0-.583-.004L3.022 2.97l4.4 2.182a.93.93 0 0 1 .476.815.94.94 0 0 1-.203.589l-5.166 5.786c-.2.248-.18.625.046.844a.5.5 0 0 0 .154.107zM5.025 8.044l1.42-1.589-.001-.003a.475.475 0 0 0-.094-.716L2.748 3.95a.65.65 0 0 0 .064.47zm3.353 6.374 3.04-5.076 2.215 2.7a.637.637 0 0 1-.047.848.5.5 0 0 1-.156.108l-4.592 1.986a.39.39 0 0 1-.39-.119.42.42 0 0 1-.07-.447",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataScience16Filled);

export { ForwardRef as default };
