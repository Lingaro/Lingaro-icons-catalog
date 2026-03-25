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
var SvgBookOpenDataCloud20Filled = function SvgBookOpenDataCloud20Filled(_a, ref) {
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
    d: "M9.5 17.75c0-.295-.116-.606-.38-.87a1.23 1.23 0 0 0-.87-.38h-4C3.036 16.5 2 15.464 2 14.25v-9C2 4.036 3.036 3 4.25 3h4a2.74 2.74 0 0 1 2 .866 2.74 2.74 0 0 1 2-.866h4c1.214 0 2.25 1.036 2.25 2.25v9c0 1.214-1.036 2.25-2.25 2.25h-4c-.295 0-.606.116-.87.38s-.38.575-.38.87a.75.75 0 0 1-1.5 0m-6-12.5c0-.386.364-.75.75-.75h4c.686 0 1.25.564 1.25 1.25v9.564A2.66 2.66 0 0 0 8.25 15h-4c-.386 0-.75-.364-.75-.75zM11 15.314A2.66 2.66 0 0 1 12.25 15h4c.386 0 .75-.364.75-.75v-9c0-.386-.364-.75-.75-.75h-4c-.686 0-1.25.564-1.25 1.25z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBookOpenDataCloud20Filled);

export { ForwardRef as default };
