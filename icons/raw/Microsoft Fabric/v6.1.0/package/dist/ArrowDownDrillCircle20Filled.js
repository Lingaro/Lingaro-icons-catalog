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
var SvgArrowDownDrillCircle20Filled = function SvgArrowDownDrillCircle20Filled(_a, ref) {
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
    d: "M18 10a8 8 0 0 1-.581 3H2.582A8 8 0 1 1 18 10m-5.353-1.854L10.5 10.293V5.5a.5.5 0 1 0-1 0v4.793L7.355 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 1 0-.708-.708",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.264 14h5.666a8.04 8.04 0 0 1-2.808 2.858zm1.925 3.34-3.132-3.133-3.166 3.166A8 8 0 0 0 10 18a8 8 0 0 0 3.189-.66M8.85 14l-2.9 2.9A8.04 8.04 0 0 1 3.07 14z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgArrowDownDrillCircle20Filled);

export { ForwardRef as default };
