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
var SvgBorderNoneEye20Filled = function SvgBorderNoneEye20Filled(_a, ref) {
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
    d: "M8 3.75A.75.75 0 0 1 8.75 3h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 8 3.75m0 12.5a.75.75 0 0 1 .75-.75H9c0 .484.156 1.001.42 1.5h-.67a.75.75 0 0 1-.75-.75m9-5q0 .155-.058.29a5.7 5.7 0 0 0-1.442-.454V8.75a.75.75 0 0 1 1.5 0zM4.604 5.449a1.5 1.5 0 0 1 .939-.878.75.75 0 0 0-.586-1.38v-.005a3 3 0 0 0-1.77 1.77h.004a.75.75 0 1 0 1.413.493m10.793 0a1.5 1.5 0 0 0-.938-.878.75.75 0 0 1 .586-1.38v-.005a3 3 0 0 1 1.77 1.77h-.005a.75.75 0 1 1-1.413.493M3 11.25a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-1.5 0zm2.453 4.148a1.5 1.5 0 0 1-.849-.846.75.75 0 1 0-1.413.492h-.005a3 3 0 0 0 1.77 1.77v-.004a.75.75 0 1 0 .497-1.412M16 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 12c-2.764 0-4.5 2.318-4.5 3.5 0 1.2 1.739 3.5 4.5 3.5s4.5-2.318 4.5-3.5c0-1.2-1.739-3.5-4.5-3.5m0 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBorderNoneEye20Filled);

export { ForwardRef as default };
