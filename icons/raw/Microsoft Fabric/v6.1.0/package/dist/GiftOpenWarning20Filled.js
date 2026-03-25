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
var SvgGiftOpenWarning20Filled = function SvgGiftOpenWarning20Filled(_a, ref) {
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
    d: "M13.5 4.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M6.5 8a3 3 0 0 1 3-3A3.5 3.5 0 0 1 13 8.5a4 4 0 0 1-4 4 .5.5 0 0 1 0-1 3 3 0 0 0 3-3A2.5 2.5 0 0 0 9.5 6a2 2 0 0 0-2 2A1.5 1.5 0 0 0 9 9.5a1 1 0 0 0 1-1 .5.5 0 0 0-.5-.5.5.5 0 0 1-1 0 1 1 0 0 1 1-1A1.5 1.5 0 0 1 11 8.5a2 2 0 0 1-2 2A2.5 2.5 0 0 1 6.5 8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.054 10h1.073c.389.557.934.995 1.573 1.25A1.5 1.5 0 0 0 9 13.5c.828 0 1.61-.201 2.297-.558l-2.079 4.162a2 2 0 0 0-.213.896H6.5A2.5 2.5 0 0 1 4 15.5v-4.117L2.257 12.43a.5.5 0 1 1-.514-.858l2.025-1.215A2.5 2.5 0 0 1 5.054 10M17 5.5a.5.5 0 0 0-1 0V6h-.5a.5.5 0 0 0 0 1h.5v.5a.5.5 0 0 0 1 0V7h.5a.5.5 0 0 0 0-1H17zm-3.397 5.054-3.496 6.998A1 1 0 0 0 11.002 19h6.996a1 1 0 0 0 .895-1.448l-3.5-6.999a1 1 0 0 0-1.79 0Zm1.395 1.941v3.002a.5.5 0 1 1-1 0v-3.002a.5.5 0 1 1 1 0m-.5 5.504a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgGiftOpenWarning20Filled);

export { ForwardRef as default };
