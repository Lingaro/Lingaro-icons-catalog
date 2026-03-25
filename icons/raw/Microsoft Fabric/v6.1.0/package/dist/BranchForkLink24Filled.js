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
var SvgBranchForkLink24Filled = function SvgBranchForkLink24Filled(_a, ref) {
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
    d: "M11 5.5a3.5 3.5 0 0 1-3 3.465V11.5h6.25a2.25 2.25 0 0 0 2.25-2.25v-.395A3.502 3.502 0 0 1 17.5 2a3.5 3.5 0 0 1 .5 6.965v.285c0 1.39-.755 2.602-1.878 3.25h-.372a4.7 4.7 0 0 0-2.124.5H8v2.035a3.5 3.5 0 1 1-1.5.11v-6.29A3.502 3.502 0 0 1 7.5 2 3.5 3.5 0 0 1 11 5.5m12 11.75a3.75 3.75 0 0 0-3.75-3.75l-.102.007A.75.75 0 0 0 19.25 15l.154.005a2.25 2.25 0 0 1-.154 4.495l-.003.005-.102.007a.75.75 0 0 0 .108 1.493V21l.2-.005A3.75 3.75 0 0 0 23 17.25"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 14.25a.75.75 0 0 0-.75-.75l-.2.005a3.75 3.75 0 0 0 .2 7.495l.102-.007a.75.75 0 0 0-.102-1.493l-.154-.005A2.25 2.25 0 0 1 15.75 15l.102-.007a.75.75 0 0 0 .648-.743"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 17.25a.75.75 0 0 0-.75-.75h-3.5l-.102.007A.75.75 0 0 0 15.75 18h3.5l.102-.007A.75.75 0 0 0 20 17.25"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBranchForkLink24Filled);

export { ForwardRef as default };
