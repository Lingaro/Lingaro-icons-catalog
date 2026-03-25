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
var SvgMyLocationRibbon32Regular = function SvgMyLocationRibbon32Regular(_a, ref) {
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
    d: "M16 2a1 1 0 0 1 1 1v3l-.001.05c4.056.401 7.4 3.227 8.561 7.009a7.5 7.5 0 0 0-1.935.513 8 8 0 1 0-4.125 9.625q.21.545.5 1.047v.924a10 10 0 0 1-3.001.783L17 26v3a1 1 0 1 1-2 0v-3l.001-.05A10 10 0 0 1 6.05 17H3a1 1 0 1 1 0-2h3l.05.001A10 10 0 0 1 15 6.05V3a1 1 0 0 1 1-1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 11a5 5 0 0 1 4.968 4.436 7.47 7.47 0 0 0-1.95 4.551A5 5 0 1 1 16 11m8 4.6a5.47 5.47 0 0 1 2.5-.6 5.5 5.5 0 1 1-2.5.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 30.05a.95.95 0 0 0 1.444.811L26.5 29l3.056 1.861A.95.95 0 0 0 31 30.05v-4.518a6.73 6.73 0 0 1-4.973 1.702A6.7 6.7 0 0 1 22 25.531z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgMyLocationRibbon32Regular);

export { ForwardRef as default };
