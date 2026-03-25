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
var SvgBuildingData20Filled = function SvgBuildingData20Filled(_a, ref) {
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
    d: "M5.5 2A1.5 1.5 0 0 0 4 3.5v14a.5.5 0 0 0 .5.5H7v-3.5a.5.5 0 0 1 .5-.5H9v-3.69l.007.005a2.5 2.5 0 0 1 .281-.974.749.749 0 0 1 .462-1.34c.206 0 .393.082.528.217a5 5 0 0 1 .554-.36c.62-.344 1.361-.594 2.168-.732V3.5A1.5 1.5 0 0 0 11.5 2zm4.25 4.534a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M8 11.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m0-3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m0-2.966a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 15h1v1.5c0 .573.194 1.075.5 1.5H8zm7.88-6.88c.4.072.777.174 1.12.301 1.206.449 2 1.212 2 2.08 0 1.38-2.015 2.5-4.5 2.5S10 11.88 10 10.5 12.015 8 14.5 8c.481 0 .945.041 1.38.119Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 14c1.38 0 2.678-.308 3.668-.858.293-.163.578-.36.833-.59L19 16.5c0 1.38-2.015 2.5-4.5 2.5S10 17.88 10 16.5v-3.946c.255.23.54.426.832.588.99.55 2.288.858 3.668.858"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBuildingData20Filled);

export { ForwardRef as default };
