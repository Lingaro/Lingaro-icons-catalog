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
var SvgRealTimeIntelligence32Filled = function SvgRealTimeIntelligence32Filled(_a, ref) {
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
    d: "M16.919 2c-.511 0-.966.217-1.288.56L4.142 15.594h6.628c2.685 0 4.969-.835 5.643-3.308l.002-.007v.007l2.19-8.075A1.75 1.75 0 0 0 16.918 2ZM29.37 14.657c.385-.415.626-.967.63-1.574a2.5 2.5 0 0 0-.282-1.1 2.33 2.33 0 0 0-2.056-1.23h-8.759l-.557 2.057h-.002c-.905 3.324-3.965 4.784-7.574 4.784H3.822a1.822 1.822 0 1 0 0 3.644v.004h17.261c.708 0 1.342.315 1.77.813zm-7.957 8.915a.32.32 0 0 1-.063.193l-4.998 5.671c-.322.343-.777.56-1.288.56a1.75 1.75 0 0 1-1.687-2.21l1.233-4.544h6.473a.33.33 0 0 1 .33.33",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgRealTimeIntelligence32Filled);

export { ForwardRef as default };
