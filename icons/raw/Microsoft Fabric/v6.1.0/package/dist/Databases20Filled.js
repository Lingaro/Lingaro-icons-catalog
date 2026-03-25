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
var SvgDatabases20Filled = function SvgDatabases20Filled(_a, ref) {
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
    d: "M5.704 5.969a1 1 0 0 1 .953-1.302h6.294c1.315 0 2.382.766 2.382 1.954v.998C16.411 7.043 17 6.172 17 5.167 17 3.391 15.108 2 11.856 2H3a1 1 0 0 0-1 1c0 .081.007.161.031.235.031.098 1.853 5.794 2.8 8.744a1 1 0 0 0 .95.688h2.073z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 9.333h-.316l2.558 7.962c.198.617.871.779 1.216.677C17.168 17.467 18 16.55 18 15.334V5.167c0 2.074-1.855 4.166-6 4.166"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8.333h-.317a1 1 0 0 0-.952 1.307l.775 2.414 1.052 3.279h-2.07a1 1 0 0 1-.95-.688l-2.88-8.979h6.293c.666 0 1.382.299 1.382.954v1.403a8.3 8.3 0 0 1-2.333.31"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabases20Filled);

export { ForwardRef as default };
