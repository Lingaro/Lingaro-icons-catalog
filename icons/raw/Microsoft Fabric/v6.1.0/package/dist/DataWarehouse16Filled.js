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
var SvgDataWarehouse16Filled = function SvgDataWarehouse16Filled(_a, ref) {
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
    d: "m8.299 1.528 6.424 3.965a.57.57 0 0 1 .273.493v7.322c0 .687-.558 1.246-1.25 1.246s-1.25-.56-1.25-1.245l.001-4.584c0-.57-.301-1.076-.764-1.354L7.087 4.502a1.59 1.59 0 0 0-1.67-.004L1.003 7.223V5.989c0-.21.112-.395.277-.496a5936 5936 0 0 0 6.41-3.955.59.59 0 0 1 .609-.01M1.003 8.662v1.3l2.665-1.645a1.59 1.59 0 0 1 1.67.004s2.241 1.384 2.901 1.79c.455.277.759.78.759 1.35v2.338c0 .41.335.747.75.747v.003h2.122a2.23 2.23 0 0 1-.374-1.24l.001-4.584a.58.58 0 0 0-.283-.5L6.556 5.35a.59.59 0 0 0-.616 0L1.284 8.225a.59.59 0 0 0-.28.437Zm7.164 5.887-.001-.003a1.7 1.7 0 0 1-.168-.747V11.46a.58.58 0 0 0-.28-.497C6.396 10.15 4.807 9.17 4.807 9.17a.59.59 0 0 0-.616 0l-2.915 1.799a.6.6 0 0 0-.273.433v1.4a1.74 1.74 0 0 0 1.747 1.745l.022.003h5.395Z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataWarehouse16Filled);

export { ForwardRef as default };
