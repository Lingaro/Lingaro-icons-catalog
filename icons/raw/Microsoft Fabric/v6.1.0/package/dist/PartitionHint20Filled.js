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
var SvgPartitionHint20Filled = function SvgPartitionHint20Filled(_a, ref) {
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
    d: "M5 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-.25 8a.75.75 0 0 0-.75.75v1.75a.5.5 0 0 1-1 0v-1.75C3 9.784 3.784 9 4.75 9H6.5a.5.5 0 0 1 0 1zM4 16.25c0 .414.336.75.75.75H6.5a.5.5 0 0 1 0 1H4.75A1.75 1.75 0 0 1 3 16.25V14.5a.5.5 0 0 1 1 0zM15.25 10a.75.75 0 0 1 .75.75v1.75a.5.5 0 0 0 1 0v-1.75A1.75 1.75 0 0 0 15.25 9H13.5a.5.5 0 0 0 0 1zm.75 6.25a.75.75 0 0 1-.75.75H13.5a.5.5 0 0 0 0 1h1.75A1.75 1.75 0 0 0 17 16.25V14.5a.5.5 0 0 0-1 0zM8 17.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M8.5 9a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgPartitionHint20Filled);

export { ForwardRef as default };
