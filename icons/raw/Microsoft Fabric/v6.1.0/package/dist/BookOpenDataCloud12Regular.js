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
var SvgBookOpenDataCloud12Regular = function SvgBookOpenDataCloud12Regular(_a, ref) {
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
    d: "M0 2.5A1.5 1.5 0 0 1 1.5 1h2c.818 0 1.544.393 2 1 .456-.607 1.182-1 2-1h2A1.5 1.5 0 0 1 11 2.5v6A1.5 1.5 0 0 1 9.5 10H7.05l-.05.002a.94.94 0 0 0-.69.32c-.194.213-.31.51-.31.83a.5.5 0 1 1-1 0c0-.32-.116-.617-.31-.83a.94.94 0 0 0-.69-.32L3.95 10H1.5A1.5 1.5 0 0 1 0 8.5zM5 9V3.5A1.5 1.5 0 0 0 3.5 2h-2a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5zm1 0h3.5a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-2A1.5 1.5 0 0 0 6 3.5z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBookOpenDataCloud12Regular);

export { ForwardRef as default };
