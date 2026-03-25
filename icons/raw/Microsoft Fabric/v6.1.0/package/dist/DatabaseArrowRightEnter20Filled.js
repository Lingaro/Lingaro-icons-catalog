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
var SvgDatabaseArrowRightEnter20Filled = function SvgDatabaseArrowRightEnter20Filled(_a, ref) {
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
    d: "M16 5c0 1.657-2.686 3-6 3S4 6.657 4 5c0-1.656 2.686-3 6-3s6 1.344 6 3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 7.12c-.383.363-.84.662-1.31.896-1.252.626-2.912.985-4.69.985s-3.438-.359-4.69-.985A5.5 5.5 0 0 1 4 7.121v2.087a5.5 5.5 0 0 1 5.745 8.79L10 18c3.314 0 6-1.344 6-3z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M5.5 10a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m2.353 4.854-2 2a.5.5 0 1 1-.707-.707L6.293 15H3.5a.5.5 0 0 1 0-1h2.793l-1.147-1.147a.5.5 0 1 1 .708-.707l2 2a.5.5 0 0 1 .146.35v.007a.5.5 0 0 1-.144.348z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabaseArrowRightEnter20Filled);

export { ForwardRef as default };
