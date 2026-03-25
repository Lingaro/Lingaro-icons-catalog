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
var SvgLockClosedDatabase20Regular = function SvgLockClosedDatabase20Regular(_a, ref) {
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
    d: "M19 17c0 1.105-1.567 2-3.5 2s-3.5-.895-3.5-2v-3.08q.255.207.53.362c.81.463 1.862.718 2.97.718s2.16-.255 2.97-.718q.275-.155.53-.362z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 2a3 3 0 0 1 3 3v1h1a3 3 0 0 1 3 3v.127a9 9 0 0 0-1-.112V9a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h5v.5c0 .179.03.345.08.5H6a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h1V5a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v1h4V5a2 2 0 0 0-2-2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 10c1.933 0 3.5.895 3.5 2s-1.567 2-3.5 2-3.5-.895-3.5-2 1.567-2 3.5-2"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgLockClosedDatabase20Regular);

export { ForwardRef as default };
