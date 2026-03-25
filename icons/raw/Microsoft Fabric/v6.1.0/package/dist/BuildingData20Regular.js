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
var SvgBuildingData20Regular = function SvgBuildingData20Regular(_a, ref) {
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
    d: "M4 17.5a.5.5 0 0 0 .5.5h5a2.6 2.6 0 0 1-.449-1H8v-2h1v-1H7.5a.5.5 0 0 0-.5.5V17H5V3.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v3.865q.478-.15 1-.24V3.5A1.5 1.5 0 0 0 11.5 2h-6A1.5 1.5 0 0 0 4 3.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.288 9.341c.233-.444.588-.82.99-1.123a.75.75 0 1 0-.99 1.124Zm.462-2.807a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M8 11.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M7.25 9.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M8 5.784a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m7.88 2.336c.4.072.777.174 1.12.301 1.206.449 2 1.212 2 2.08 0 1.38-2.015 2.5-4.5 2.5S10 11.88 10 10.5 12.015 8 14.5 8c.481 0 .945.041 1.38.119Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 14c1.38 0 2.678-.308 3.668-.858.293-.163.578-.36.833-.59L19 16.5c0 1.38-2.015 2.5-4.5 2.5S10 17.88 10 16.5v-3.946c.255.23.54.426.832.588.99.55 2.288.858 3.668.858"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBuildingData20Regular);

export { ForwardRef as default };
