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
var SvgDataFactory20Filled = function SvgDataFactory20Filled(_a, ref) {
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
    d: "M6.639 2.004c-.336 0-.596.3-.548.632a9.96 9.96 0 0 0 9.861 8.532h2.044V7.672c0-.736-.596-1.332-1.332-1.332h-.552a4.67 4.67 0 0 1-4.459-3.296l-.176-.568a.67.67 0 0 0-.635-.472z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.861 7.336H2.566c-.312 0-.566.3-.566.668v4c0 .368.254.668.566.668h10.16c.313 0 .566-.3.566-.668v-.162a10.98 10.98 0 0 1-6.43-4.506Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.727 13.671c.996 0 1.547-.88 1.565-1.629q.814.125 1.66.125h2.044l.004-.004v.172c0 .736-.596 1.332-1.332 1.332h-.552a4.67 4.67 0 0 0-4.458 3.296l-.176.568a.67.67 0 0 1-.636.472H6.63a.546.546 0 0 1-.54-.624c.2-1.351.67-2.604 1.35-3.708h5.286Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataFactory20Filled);

export { ForwardRef as default };
