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
var SvgRealTimeIntelligence28Filled = function SvgRealTimeIntelligence28Filled(_a, ref) {
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
    d: "M14.78 2c-.44 0-.83.19-1.1.48L3.09 14.495l6.74-.01a5.06 5.06 0 0 0 2.72-1.01c.74-.56 1.32-1.34 1.65-2.209.138-.353 2.02-7.357 2.02-7.357.04-.13.05-.26.05-.4 0-.83-.67-1.499-1.5-1.499zM26 11.506c0-.37-.12-.76-.33-1.07-.3-.48-.82-.81-1.37-.91a3 3 0 0 0-.55-.03h-7.49l-.46 1.71a6.506 6.506 0 0 1-6.27 4.788H3.25c-.69 0-1.25.56-1.25 1.25s.56 1.249 1.27 1.249h14.85c.17 0 .33.02.49.06.14.03.32.11.44.17.27.15.51.35.7.62l5.51-6.248s.39-.44.53-.71.21-.58.21-.88Zm-13.14 8.486h5.25v.01c.28 0 .5.22.5.5 0 .06-.03.16-.03.16L14.3 25.52a1.5 1.5 0 0 1-2.6-1.02c0-.14.01-.27.05-.4z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgRealTimeIntelligence28Filled);

export { ForwardRef as default };
