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
var SvgCalculatorBrackets16Filled = function SvgCalculatorBrackets16Filled(_a, ref) {
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
    d: "M1 3.75A2.75 2.75 0 0 1 3.75 1H5.5a.75.75 0 0 1 0 1.5H3.75c-.69 0-1.25.56-1.25 1.25v8.531c0 .69.56 1.25 1.25 1.25H5.5a.75.75 0 0 1 0 1.5H3.75A2.75 2.75 0 0 1 1 12.281zm13 8.531a2.75 2.75 0 0 1-2.75 2.75H9.5a.75.75 0 1 1 0-1.5h1.75c.69 0 1.25-.56 1.25-1.25V3.75c0-.69-.56-1.25-1.25-1.25H9.5a.75.75 0 1 1 0-1.5h1.75A2.75 2.75 0 0 1 14 3.75z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.5 4A1.5 1.5 0 0 0 4 5.5v5A1.5 1.5 0 0 0 5.5 12h4a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 9.5 4zm0 4h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1m4 0a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zm-4 2h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1m4 0a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zM5 5.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgCalculatorBrackets16Filled);

export { ForwardRef as default };
