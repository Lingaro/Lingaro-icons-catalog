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
var SvgDatabaseTable20Filled = function SvgDatabaseTable20Filled(_a, ref) {
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
    d: "M10 8c3.314 0 6-1.343 6-3s-2.686-3-6-3-6 1.343-6 3 2.686 3 6 3m-2 9q0 .435.09.845C5.711 17.445 4 16.323 4 15V7.12c.383.362.84.661 1.31.896 1.103.551 2.523.895 4.061.969A4 4 0 0 0 8 12z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 12a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3zm3-2a2 2 0 0 0-2 2h2zm1 0v2h3v-2zm4 0v2h2a2 2 0 0 0-2-2m-1 3h-3v3h3zm3 0h-2v3h2zm-3 4h-3v2h3zm1 2a2 2 0 0 0 2-2h-2zm-5-6h-2v3h2zm0 4h-2a2 2 0 0 0 2 2z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabaseTable20Filled);

export { ForwardRef as default };
