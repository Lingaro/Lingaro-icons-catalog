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
var SvgListShield16Filled = function SvgListShield16Filled(_a, ref) {
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
    d: "M11.12 6.16a.535.535 0 0 1 .76 0c.508.532 1.484 1.378 2.683 1.552a.5.5 0 0 1 .437.482v2.323c0 3.122-2.784 4.255-3.386 4.463a.34.34 0 0 1-.227 0C10.785 14.772 8 13.64 8 10.517V8.194a.5.5 0 0 1 .437-.482c1.199-.174 2.174-1.02 2.682-1.553ZM7.021 11c.045.553.163 1.052.334 1.5H2.75a.75.75 0 0 1 0-1.5zm.595-4C7.256 7.26 7 7.677 7 8.194V8.5H2.75a.75.75 0 0 1 0-1.5zm2.634-4a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgListShield16Filled);

export { ForwardRef as default };
