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
var SvgWindowAsterisk20Filled = function SvgWindowAsterisk20Filled(_a, ref) {
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
    d: "M10.353 8.146a.5.5 0 0 1 .146.354v2.123l1.848-1.067a.5.5 0 0 1 .5.866L11 11.489l1.848 1.067a.5.5 0 0 1-.5.866L10.5 12.355V14.5a.5.5 0 0 1-1 0v-2.145l-1.848 1.067a.5.5 0 1 1-.5-.866L9 11.489l-1.848-1.067a.5.5 0 0 1 .5-.866L9.5 10.623V8.5a.5.5 0 0 1 .854-.354Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM4 14V7h12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgWindowAsterisk20Filled);

export { ForwardRef as default };
