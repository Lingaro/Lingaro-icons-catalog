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
var SvgDataBarVerticalProhibited32Filled = function SvgDataBarVerticalProhibited32Filled(_a, ref) {
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
    d: "M5 7a3 3 0 1 1 6 0v18a3 3 0 1 1-6 0zm8 6a3 3 0 1 1 6 0v1.935A9 9 0 0 0 14 23a8.96 8.96 0 0 0 1.486 4.956A3 3 0 0 1 13 25z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23 30.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15m0-2a5.48 5.48 0 0 1-3.117-.968l7.649-7.65A5.5 5.5 0 0 1 23 28.5m3.118-10.032-7.65 7.65a5.5 5.5 0 0 1 7.65-7.65"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataBarVerticalProhibited32Filled);

export { ForwardRef as default };
