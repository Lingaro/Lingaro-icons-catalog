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
var SvgProgressCircle20Regular = function SvgProgressCircle20Regular(_a, ref) {
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
    d: "M7.757 13.188a.5.5 0 0 1-.32-.117A4 4 0 0 1 6.185 11.2a.5.5 0 0 1 .954-.3 3 3 0 0 0 .94 1.407.5.5 0 0 1-.322.884zM6.65 9.487a.5.5 0 0 1-.479-.644l.047-.143a4 4 0 0 1 1.188-1.744.5.5 0 1 1 .648.76 3 3 0 0 0-.89 1.308l-.035.108a.5.5 0 0 1-.478.355Zm2.996 4.367A.5.5 0 0 0 10 14a4 4 0 1 0 0-8 .5.5 0 1 0 0 1 3 3 0 0 1 0 6 .5.5 0 0 0-.354.854"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 10a8 8 0 1 0-16 0 8 8 0 0 0 16 0m-1 0a7 7 0 1 1-14 0 7 7 0 0 1 14 0"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgProgressCircle20Regular);

export { ForwardRef as default };
