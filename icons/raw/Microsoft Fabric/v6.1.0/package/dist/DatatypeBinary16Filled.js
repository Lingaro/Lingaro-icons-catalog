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
var SvgDatatypeBinary16Filled = function SvgDatatypeBinary16Filled(_a, ref) {
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
    d: "M5.75 4.001c-1.027 0-1.77.487-2.212 1.254C3.129 5.965 3 6.87 3 7.751c0 .88.129 1.786.538 2.495.441.768 1.185 1.255 2.212 1.255s1.77-.487 2.213-1.255c.408-.71.537-1.614.537-2.495 0-.88-.129-1.786-.537-2.496-.442-.767-1.186-1.254-2.213-1.254M4.5 7.751c0-.776.121-1.371.338-1.747.183-.319.44-.503.912-.503s.73.184.912.503c.217.376.338.97.338 1.747 0 .776-.121 1.371-.338 1.747-.183.319-.44.503-.912.503s-.73-.184-.912-.503c-.217-.376-.338-.97-.338-1.747m6.147-1.372.34-.227v4.599a.75.75 0 1 0 1.5 0v-6a.75.75 0 0 0-1.165-.624l-1.5 1-.006.004a.75.75 0 0 0 .831 1.248"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatatypeBinary16Filled);

export { ForwardRef as default };
