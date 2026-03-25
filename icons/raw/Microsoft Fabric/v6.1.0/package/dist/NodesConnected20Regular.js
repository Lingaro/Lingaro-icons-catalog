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
var SvgNodesConnected20Regular = function SvgNodesConnected20Regular(_a, ref) {
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
    d: "M6 10c.924 0 1.775-.314 2.453-.84l5.824 5.824a2 2 0 1 0 .707-.707L9.16 8.453a3.98 3.98 0 0 0 .83-2.741l4.209-.842a2 2 0 1 0-.196-.98l-4.208.841A4.002 4.002 0 0 0 2 6a4 4 0 0 0 2.731 3.795l-.841 4.208a2 2 0 1 0 .977.194l.003.002.842-4.21Q5.855 10 6 10m0-1a3 3 0 1 1 0-6 3 3 0 0 1 0 6m10 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2M5 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0M17 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgNodesConnected20Regular);

export { ForwardRef as default };
