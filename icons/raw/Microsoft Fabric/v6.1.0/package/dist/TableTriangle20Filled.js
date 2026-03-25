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
var SvgTableTriangle20Filled = function SvgTableTriangle20Filled(_a, ref) {
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
    d: "M13 7h4V5.5A2.5 2.5 0 0 0 14.5 3H13zm-6 5V8H3v4zm1 0h4V8H8zm5-4v3.345l.2-.345a1.518 1.518 0 0 1 2.6 0l.577 1H17V8zm-1 5.075L9.732 17H8v-4h4zM7 13H3v1.5A2.5 2.5 0 0 0 5.5 17H7zm5-6V3H8v4zM7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m14.93 11.5 3.9 6.75h.004a.5.5 0 0 1-.433.75h-7.8a.5.5 0 0 1-.436-.75l3.9-6.75a.522.522 0 0 1 .866 0Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTableTriangle20Filled);

export { ForwardRef as default };
