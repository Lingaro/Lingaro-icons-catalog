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
var SvgShapeEllipse20Filled = function SvgShapeEllipse20Filled(_a, ref) {
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
    d: "M2 10q0-.922.32-1.71a5.5 5.5 0 0 1 .875-1.454A6.5 6.5 0 0 1 4.47 5.672a9.1 9.1 0 0 1 3.484-1.477Q8.961 4 10 4q1.04 0 2.047.195a9 9 0 0 1 1.96.617 8.7 8.7 0 0 1 1.516.86q.72.507 1.274 1.164.555.657.875 1.445.32.79.328 1.719 0 .915-.328 1.71a5.6 5.6 0 0 1-.875 1.454 6.5 6.5 0 0 1-1.274 1.164q-.727.508-1.515.867a8.8 8.8 0 0 1-1.961.61Q11.039 15.993 10 16q-1.04 0-2.047-.188a8.6 8.6 0 0 1-1.96-.617 9 9 0 0 1-1.509-.86 6.7 6.7 0 0 1-1.273-1.17 5.6 5.6 0 0 1-.883-1.454A4.4 4.4 0 0 1 2 10"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgShapeEllipse20Filled);

export { ForwardRef as default };
