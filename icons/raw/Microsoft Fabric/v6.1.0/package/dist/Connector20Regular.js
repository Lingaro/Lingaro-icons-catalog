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
var SvgConnector20Regular = function SvgConnector20Regular(_a, ref) {
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
    d: "M9 9V5h4.5C14.876 5 16 6.124 16 7.5V9h1.5a.5.5 0 0 1 0 1H16v1.5c0 1.376-1.124 2.5-2.5 2.5H12V9zm6 2.5v-4c0-.824-.676-1.5-1.5-1.5H10v2h3v5h.5c.824 0 1.5-.676 1.5-1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 14v-4H8V5H6.5A2.506 2.506 0 0 0 4 7.5V9H2.5a.5.5 0 0 0 0 1H4v1.5C4 12.876 5.124 14 6.5 14zM6.5 6H7v5h3v2H6.5c-.824 0-1.5-.676-1.5-1.5v-4C5 6.676 5.676 6 6.5 6"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgConnector20Regular);

export { ForwardRef as default };
