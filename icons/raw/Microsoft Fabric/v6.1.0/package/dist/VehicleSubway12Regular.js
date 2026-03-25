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
var SvgVehicleSubway12Regular = function SvgVehicleSubway12Regular(_a, ref) {
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
    d: "M5.25 7.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m2.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.5 1A2.5 2.5 0 0 0 2 3.5v4a2.5 2.5 0 0 0 1.594 2.33l-1.381.864a.5.5 0 1 0 .53.848L5.21 10h1.542l2.468 1.543a.5.5 0 0 0 .53-.848l-1.368-.856A2.5 2.5 0 0 0 10 7.5v-4A2.5 2.5 0 0 0 7.5 1zM3 3.5A1.5 1.5 0 0 1 4.5 2h3A1.5 1.5 0 0 1 9 3.5V5H3zM3 6h6v1.5A1.5 1.5 0 0 1 7.5 9h-3A1.5 1.5 0 0 1 3 7.5z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgVehicleSubway12Regular);

export { ForwardRef as default };
