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
var SvgPowerBi24Regular = function SvgPowerBi24Regular(_a, ref) {
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
    d: "M17.75 22a2.75 2.75 0 0 0 2.75-2.75V4.75A2.75 2.75 0 0 0 17.75 2h-4A2.75 2.75 0 0 0 11 4.75V7H9.75A2.75 2.75 0 0 0 7 9.75V12H5.75A2.75 2.75 0 0 0 3 14.75v4.5A2.75 2.75 0 0 0 5.75 22zm0-18.5c.69 0 1.25.56 1.25 1.25v14.5c0 .69-.56 1.25-1.25 1.25H16.5V9.75A2.75 2.75 0 0 0 13.75 7H12.5V4.75c0-.69.56-1.25 1.25-1.25zm-5.25 17H15V9.75c0-.69-.56-1.25-1.25-1.25h-4c-.69 0-1.25.56-1.25 1.25V12h1.25a2.75 2.75 0 0 1 2.75 2.75zm-8-5.75c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v5.75H5.75c-.69 0-1.25-.56-1.25-1.25z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgPowerBi24Regular);

export { ForwardRef as default };
