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
var SvgRealTimeIntelligence32Regular = function SvgRealTimeIntelligence32Regular(_a, ref) {
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
    d: "m6.663 14.578 9.729-9.86-.91 7.038h-.001a3.83 3.83 0 0 1-3.696 2.82zm-3.852 1.156a3.28 3.28 0 0 0-.805 2.176 3.33 3.33 0 0 0 3.333 3.332h8.81l-.838 7.005a1.75 1.75 0 0 0 3.037 1.19l13.022-14.78-.027.03.02-.023h-.007l.003-.003.004-.005c.385-.415.626-.96.63-1.566v-.015l-.007.008v-.015a2.33 2.33 0 0 0-2.33-2.316H17.637l.964-6.542c.02-.11.063-.3.063-.462A1.75 1.75 0 0 0 16.914 2c-.51 0-.965.217-1.287.56L3.203 15.352s-.279.253-.392.382m2.528.841v.003a1.332 1.332 0 0 0 0 2.664h13.066a4.32 4.32 0 0 1 3.102 1.308l3.424-3.885 2.963-3.365a.4.4 0 0 0 .092-.16v-.056a.33.33 0 0 0-.33-.33H17.26a5.83 5.83 0 0 1-5.475 3.821zm10.882 4.667-.637 6.037 4.596-5.217-.003-.003a2.33 2.33 0 0 0-1.772-.817z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgRealTimeIntelligence32Regular);

export { ForwardRef as default };
