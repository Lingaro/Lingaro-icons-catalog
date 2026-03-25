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
var SvgTextBulletListSquarePulse24Regular = function SvgTextBulletListSquarePulse24Regular(_a, ref) {
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
    d: "M6.25 19.5h5.063c.173.534.412 1.037.709 1.5H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v5.772a6.5 6.5 0 0 0-1.5-.709V6.25a1.75 1.75 0 0 0-1.75-1.75H6.25A1.75 1.75 0 0 0 4.5 6.25v11.5c0 .966.784 1.75 1.75 1.75"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.75 8.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0m1.75 0a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75m.75 3a.75.75 0 1 0 0 1.5h1.813a6.5 6.5 0 0 1 2.646-1.5zm.248 3.75h-.248a.75.75 0 0 0-.17 1.48 6.5 6.5 0 0 1 .418-1.48M7.75 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 3.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2M23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-6.985-3a.5.5 0 0 1 .46.342l1.053 3.16 1.004-2.678a.5.5 0 0 1 .915-.048L20.31 17H21a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.447-.276l-.487-.975-1.098 2.927a.5.5 0 0 1-.942-.018l-1.069-3.205-.493 1.233A.5.5 0 0 1 15 18h-1a.5.5 0 0 1 0-1h.662l.874-2.186a.5.5 0 0 1 .479-.314"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTextBulletListSquarePulse24Regular);

export { ForwardRef as default };
