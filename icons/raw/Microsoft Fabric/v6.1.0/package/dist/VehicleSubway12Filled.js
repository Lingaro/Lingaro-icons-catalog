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
var SvgVehicleSubway12Filled = function SvgVehicleSubway12Filled(_a, ref) {
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
    d: "M2 3.5A2.5 2.5 0 0 1 4.5 1h3A2.5 2.5 0 0 1 10 3.5V5H2zM2 6v1.5a2.5 2.5 0 0 0 1.703 2.37l-1.449.905a.5.5 0 0 0 .53.848L5.382 10h1.49l2.597 1.623a.5.5 0 1 0 .53-.848l-1.543-.964A2.5 2.5 0 0 0 10 7.5V6zm2.5 2.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m3 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgVehicleSubway12Filled);

export { ForwardRef as default };
