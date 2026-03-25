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
var SvgCalculatorMultipleBrackets20Filled = function SvgCalculatorMultipleBrackets20Filled(_a, ref) {
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
    d: "M2 4.75A2.75 2.75 0 0 1 4.75 2h1.5a.75.75 0 0 1 0 1.5h-1.5c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h1.5a.75.75 0 0 1 0 1.5h-1.5A2.75 2.75 0 0 1 2 15.25zM15.25 2A2.75 2.75 0 0 1 18 4.75v10.5A2.75 2.75 0 0 1 15.25 18h-1.5a.75.75 0 0 1 0-1.5h1.5c.69 0 1.25-.56 1.25-1.25V4.75c0-.69-.56-1.25-1.25-1.25h-1.5a.75.75 0 0 1 0-1.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 6.5A1.5 1.5 0 0 1 7.5 5h4A1.5 1.5 0 0 1 13 6.5v6a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 6 12.5zM7.5 6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm1 2h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1m-1 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm1 2h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1m2 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm-.5-1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0-.5.5m.5-2.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 15c.456.607 1.182 1 2 1h2a2.5 2.5 0 0 0 2.5-2.5v-4c0-.818-.393-1.544-1-2v6a1.5 1.5 0 0 1-1.5 1.5z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgCalculatorMultipleBrackets20Filled);

export { ForwardRef as default };
