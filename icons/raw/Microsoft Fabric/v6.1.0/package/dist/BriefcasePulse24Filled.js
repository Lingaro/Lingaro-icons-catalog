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
var SvgBriefcasePulse24Filled = function SvgBriefcasePulse24Filled(_a, ref) {
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
    fill: "currentColor",
    d: "M13.75 2A2.25 2.25 0 0 1 16 4.25V6h1.75A3.25 3.25 0 0 1 21 9.25v7.5A3.25 3.25 0 0 1 17.75 20H6.25A3.25 3.25 0 0 1 3 16.75v-7.5A3.25 3.25 0 0 1 6.25 6H8V4.25A2.25 2.25 0 0 1 10.25 2zm-3.178 7a.75.75 0 0 0-.627.372l-.048.1-1.217 3.05H7.5a.75.75 0 0 0 0 1.5h1.688a.75.75 0 0 0 .696-.472l.764-1.916 2.08 4.434a.75.75 0 0 0 1.33.052l1.191-2.099H16.5a.75.75 0 0 0 0-1.5h-1.687a.75.75 0 0 0-.653.38l-.691 1.217-2.196-4.686a.75.75 0 0 0-.7-.432m-.322-5.5a.75.75 0 0 0-.75.75V6h5V4.25a.75.75 0 0 0-.75-.75z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBriefcasePulse24Filled);

export { ForwardRef as default };
