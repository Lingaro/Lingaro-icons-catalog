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
var SvgArrowDownDouble12Filled = function SvgArrowDownDouble12Filled(_a, ref) {
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
    d: "M4.25 2.75a.75.75 0 0 0-1.5 0v5.293a.75.75 0 0 0-.78 1.237l1 1a.75.75 0 0 0 1.06 0l1-1a.75.75 0 0 0-.78-1.237zM8.5 2a.75.75 0 0 1 .75.75v5.293a.75.75 0 0 1 .78 1.237l-1 1a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 0 1 .78-1.237V2.75A.75.75 0 0 1 8.5 2"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgArrowDownDouble12Filled);

export { ForwardRef as default };
