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
var SvgArrowDownDoubleWrap12Filled = function SvgArrowDownDoubleWrap12Filled(_a, ref) {
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
    d: "M8.707 1.7a.503.503 0 0 0-.323-.623 1.73 1.73 0 0 0-1.093.025.505.505 0 0 0-.291.64c.09.26.366.394.617.301a.8.8 0 0 1 .49-.008.48.48 0 0 0 .6-.335m-2.47.372a.483.483 0 0 0-.566.394A3 3 0 0 0 5.623 3v.6c0 .276.215.5.482.5a.49.49 0 0 0 .482-.5V3q0-.193.03-.34a.5.5 0 0 0-.38-.588M5.623 9q0 .193-.03.34a.5.5 0 0 0 .38.588.483.483 0 0 0 .566-.394q.048-.253.048-.534v-.6a.49.49 0 0 0-.482-.5.49.49 0 0 0-.482.5zm.482-1.9a.49.49 0 0 0 .482-.5V5.4c0-.276-.216-.5-.482-.5a.49.49 0 0 0-.482.5v1.2c0 .276.215.5.482.5m-.864 3.158a.48.48 0 0 0-.617-.301.7.7 0 0 1-.253.043.7.7 0 0 1-.254-.043.48.48 0 0 0-.616.301c-.09.26.04.547.29.64q.282.104.58.102.297 0 .58-.102c.25-.093.38-.38.29-.64M2 7.723A.75.75 0 0 0 .97 8.812l1 1a.75.75 0 0 0 1.06 0l1-1a.75.75 0 0 0-.78-1.238V2.75A.75.75 0 0 0 2.504 2H2.5a.5.5 0 0 0-.5.5zm6.75-.149a.75.75 0 0 0-.78 1.238l1 1a.75.75 0 0 0 1.06 0l1-1a.75.75 0 0 0-.78-1.238V2.75a.75.75 0 0 0-1.5 0z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgArrowDownDoubleWrap12Filled);

export { ForwardRef as default };
