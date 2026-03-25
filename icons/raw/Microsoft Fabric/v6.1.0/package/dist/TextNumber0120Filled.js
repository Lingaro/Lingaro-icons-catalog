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
var SvgTextNumber0120Filled = function SvgTextNumber0120Filled(_a, ref) {
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
    d: "M7.75 6c-1.027 0-1.77.487-2.213 1.254C5.13 7.964 5 8.87 5 9.75s.129 1.786.537 2.495c.442.768 1.186 1.255 2.213 1.255s1.77-.487 2.213-1.255c.408-.71.537-1.614.537-2.495 0-.88-.129-1.786-.537-2.496C9.52 6.487 8.777 6 7.75 6M6.5 9.75c0-.776.121-1.371.338-1.747.183-.319.44-.503.912-.503s.73.184.912.503c.217.376.338.97.338 1.747 0 .776-.121 1.371-.338 1.747-.183.319-.44.503-.912.503s-.73-.184-.912-.503c-.217-.376-.338-.97-.338-1.747"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m12.472 8.151-.34.227A.75.75 0 0 1 11.3 7.13l.005-.004 1.5-1a.75.75 0 0 1 1.166.624v6a.75.75 0 1 1-1.5 0z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTextNumber0120Filled);

export { ForwardRef as default };
