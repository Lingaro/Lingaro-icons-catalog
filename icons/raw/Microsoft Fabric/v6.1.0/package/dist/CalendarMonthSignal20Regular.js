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
var SvgCalendarMonthSignal20Regular = function SvgCalendarMonthSignal20Regular(_a, ref) {
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
    d: "M14.5 3A2.5 2.5 0 0 1 17 5.5v6.267a8 8 0 0 0-1-.688V5.5A1.5 1.5 0 0 0 14.5 4h-9A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16h4.537c.107.265.285.522.463.7a1.5 1.5 0 0 0-.23.3H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 11q.045 0 .09.004c-.064.19-.09.393-.09.596 0 .4.2.7.4.9a1.3 1.3 0 0 0-.29.494A1 1 0 1 1 10 11m-2 1a1 1 0 1 0-2 0 1 1 0 0 0 2 0M7 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2m4 1a1 1 0 1 0-2 0 1 1 0 0 0 2 0m2-1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m-1.538 4.02a7 7 0 0 1 7.518 7.518.5.5 0 1 1-.997-.076 6 6 0 0 0-6.445-6.445.5.5 0 1 1-.076-.997"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.445 13.03a5 5 0 0 1 5.524 5.524.5.5 0 1 1-.993-.109 4 4 0 0 0-4.42-4.42.5.5 0 1 1-.11-.995Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.4 15.06a3 3 0 0 1 3.54 3.54.5.5 0 0 1-.98-.2 2 2 0 0 0-2.36-2.36.5.5 0 1 1-.2-.98"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgCalendarMonthSignal20Regular);

export { ForwardRef as default };
