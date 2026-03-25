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
var SvgTextNumber12S20Filled = function SvgTextNumber12S20Filled(_a, ref) {
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
    d: "m15.16 6.023-.104-.01a2.37 2.37 0 0 0-2.625 2.247c0 .867.547 1.404 1.04 1.703.458.28.982.428 1.27.509l.036.01.097.027c.3.085.578.163.806.301.21.128.288.25.288.45 0 .383-.126.512-.227.58-.15.103-.409.17-.76.17l-.064.003a1.76 1.76 0 0 1-1.26-.39.75.75 0 0 0-.95 1.16c.647.53 1.473.79 2.306.727.48-.003 1.075-.09 1.573-.43.559-.381.882-1.002.882-1.82 0-.873-.495-1.418-1.007-1.73-.42-.256-.907-.39-1.186-.466l-.09-.025c-.31-.089-.66-.19-.935-.357-.245-.15-.311-.273-.318-.398a.87.87 0 0 1 .965-.779l.017.002c.705.064 1.103.11 1.407.346a.75.75 0 0 0 .92-1.185c-.673-.523-1.5-.595-2.08-.645Zm-7.874 7.318a.75.75 0 0 0 .475.169h3.5a.75.75 0 1 0 0-1.5h-2.5a2.4 2.4 0 0 1 1.163-.839l.013-.004.012-.005c1.005-.455 1.535-1 1.804-1.542.265-.534.26-1.034.258-1.355V8.25a2.33 2.33 0 0 0-2.465-2.24 2.45 2.45 0 0 0-2.362 1.467l-.004.01a.75.75 0 0 0 1.396.55.98.98 0 0 1 .951-.528l.017.002.018-.001a.9.9 0 0 1 .949.842c.002.236-.001.44-.128.657-.129.222-.41.493-1.053.782-1.298.587-1.894 1.322-2.152 1.951-.256.623-.166 1.106-.153 1.168a.75.75 0 0 0 .26.431ZM4.147 8.388l.34-.227v4.599a.75.75 0 1 0 1.5 0v-6a.75.75 0 0 0-1.165-.624l-1.5 1-.006.004a.75.75 0 0 0 .831 1.248"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTextNumber12S20Filled);

export { ForwardRef as default };
