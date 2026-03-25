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
var SvgCircleChart20Regular = function SvgCircleChart20Regular(_a, ref) {
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
    fillRule: "evenodd",
    d: "M11.087 8.797A3 3 0 0 1 10 9c-.43 0-.839-.09-1.209-.253L7.04 12.53a2.5 2.5 0 1 1-.895-.446l1.803-3.896a3 3 0 1 1 4 .093l1.894 3.807a2.502 2.502 0 0 1 3.16 2.412 2.5 2.5 0 1 1-4.052-1.96zM12 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0M5.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m9.002 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgCircleChart20Regular);

export { ForwardRef as default };
