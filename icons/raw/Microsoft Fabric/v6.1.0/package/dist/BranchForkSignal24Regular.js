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
var SvgBranchForkSignal24Regular = function SvgBranchForkSignal24Regular(_a, ref) {
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
    d: "M11 5.5a3.5 3.5 0 0 1-3 3.465V11.5h5.4q-.75 0-1.2.6a1.9 1.9 0 0 0-.374.9H8v2.035a3.5 3.5 0 1 1-1.5.11v-6.29A3.502 3.502 0 0 1 7.5 2 3.5 3.5 0 0 1 11 5.5m-3.5 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4m2 11a2 2 0 1 0-4 0 2 2 0 0 0 4 0m7.356-6.553A9.3 9.3 0 0 0 14 11.5h.25a2.25 2.25 0 0 0 2.25-2.25v-.395A3.502 3.502 0 0 1 17.5 2a3.5 3.5 0 0 1 .5 6.965v.285a3.74 3.74 0 0 1-1.144 2.697M17.5 7.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.453 12.517a8.5 8.5 0 0 1 9.03 9.03.75.75 0 1 1-1.497-.095 7 7 0 0 0-7.438-7.438.75.75 0 0 1-.095-1.497"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.43 15.027a6 6 0 0 1 6.544 6.544.75.75 0 0 1-1.494-.141 4.5 4.5 0 0 0-4.91-4.91.75.75 0 0 1-.14-1.493"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.365 17.558a3.5 3.5 0 0 1 4.078 4.078.75.75 0 1 1-1.476-.271 2 2 0 0 0-2.332-2.331.75.75 0 0 1-.27-1.476"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBranchForkSignal24Regular);

export { ForwardRef as default };
