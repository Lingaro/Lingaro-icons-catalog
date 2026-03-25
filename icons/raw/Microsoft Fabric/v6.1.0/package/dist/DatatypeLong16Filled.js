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
var SvgDatatypeLong16Filled = function SvgDatatypeLong16Filled(_a, ref) {
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
    d: "M11.75 3.496a.75.75 0 0 1 .75.75v5.25h2.25a.75.75 0 1 1 0 1.5h-3a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 .75-.75m-6.015.734a2.5 2.5 0 0 1 4.268 1.743l.004.059a1 1 0 0 1-.004.138 2.7 2.7 0 0 1-1.015 1.794 1 1 0 0 1-.086.058l-1.627.94a1.34 1.34 0 0 0-.586.533l-.002.004h2.566a.75.75 0 1 1 0 1.5h-3.5a.75.75 0 0 1-.75-.725 2.84 2.84 0 0 1 1.538-2.62l1.56-.901a1.2 1.2 0 0 0 .404-.705v-.003L8.503 6a1 1 0 1 0-2 0 .75.75 0 0 1-1.5 0 2.5 2.5 0 0 1 .732-1.768ZM2.488 5.652l-.34.227a.75.75 0 0 1-.832-1.248l.006-.005 1.5-1a.75.75 0 0 1 1.166.624v6a.75.75 0 1 1-1.5 0z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatatypeLong16Filled);

export { ForwardRef as default };
