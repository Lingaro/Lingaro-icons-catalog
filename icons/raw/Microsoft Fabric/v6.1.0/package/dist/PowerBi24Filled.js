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
var SvgPowerBi24Filled = function SvgPowerBi24Filled(_a, ref) {
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
    d: "M3.938 22.818q.033.03.069.059h-.07zM19 3.246c0-.69-.56-1.25-1.25-1.25h-4c-.69 0-1.25.56-1.25 1.25v2.25h1.25a2.75 2.75 0 0 1 2.75 2.75V22h1.25c.69 0 1.25-.56 1.25-1.25zM15 22h-2.5v-8.754a2.75 2.75 0 0 0-2.75-2.75H8.5v-2.25c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25zM5.75 11.996c-.69 0-1.25.56-1.25 1.25v7.504c0 .69.56 1.25 1.25 1.25H11v-8.754c0-.69-.56-1.25-1.25-1.25z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgPowerBi24Filled);

export { ForwardRef as default };
