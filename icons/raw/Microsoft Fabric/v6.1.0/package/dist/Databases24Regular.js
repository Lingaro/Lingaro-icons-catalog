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
var SvgDatabases24Regular = function SvgDatabases24Regular(_a, ref) {
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
    d: "M14.854 2H3.25C2.56 2 2 2.56 2 3.25c0 .102.009.201.039.294.039.122 2.316 7.242 3.5 10.93.164.499.634.86 1.188.86h2.591l.791 2.466a1.25 1.25 0 0 0 1.191.867h2.589l.788 2.457A1.25 1.25 0 0 0 15.87 22h.297C19.389 22 22 20.508 22 18.667V6.083C22 3.828 19.297 2 14.854 2M3.6 3.5h11.255c3.534 0 5.646 1.313 5.646 2.583 0 .722-.636 1.441-1.833 1.939V7.94c0-1.527-1.333-2.607-2.977-2.607H7.824a1.25 1.25 0 0 0-1.192 1.628l2.205 6.872H6.91A8815 8815 0 0 1 3.6 3.5m4.565 3.333h7.525c.734 0 1.477.38 1.477 1.107v.522c-.674.127-1.44.204-2.313.204h-2.461a1.25 1.25 0 0 0-1.19 1.634l2.203 6.866H11.48zM16.167 20.5h-.115l-3.315-10.333h2.118c2.532 0 4.44-.557 5.646-1.433v9.933c0 .646-1.646 1.833-4.334 1.833"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabases24Regular);

export { ForwardRef as default };
