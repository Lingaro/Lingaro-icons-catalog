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
var SvgFunnel20Filled = function SvgFunnel20Filled(_a, ref) {
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
    fill: "currentColor",
    d: "M17.883 3.914a1.5 1.5 0 0 0-.8-.8A1.5 1.5 0 0 0 16.5 3h-13A1.495 1.495 0 0 0 2 4.5a1.44 1.44 0 0 0 .47 1.086l5.061 4.828q.11.11.2.234a1.4 1.4 0 0 1 .27.852v4A1.5 1.5 0 0 0 9.5 17h1a1.5 1.5 0 0 0 1.5-1.5v-4a1.4 1.4 0 0 1 .272-.852 2 2 0 0 1 .2-.234l5.062-4.828A1.44 1.44 0 0 0 18 4.5c.002-.201-.038-.4-.117-.586"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgFunnel20Filled);

export { ForwardRef as default };
