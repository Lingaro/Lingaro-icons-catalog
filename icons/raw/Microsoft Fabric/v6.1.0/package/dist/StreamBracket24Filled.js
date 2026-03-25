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
var SvgStreamBracket24Filled = function SvgStreamBracket24Filled(_a, ref) {
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
    d: "M2 4.5a1 1 0 0 0 2 0v-1a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 .5.5v1a1 1 0 1 0 2 0v-1A2.5 2.5 0 0 0 19.5 1h-15A2.5 2.5 0 0 0 2 3.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.75 5a5.25 5.25 0 0 0-5.25 5.25v.5a.75.75 0 0 1-.75.75h-1a.75.75 0 0 0 0 1.5h1A2.25 2.25 0 0 0 11 10.75v-.5a3.75 3.75 0 0 1 3.75-3.75h1.5a.75.75 0 0 0 0-1.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 10.75a3.25 3.25 0 0 1 3.25-3.25h2a.75.75 0 0 1 0 1.5h-2a1.75 1.75 0 0 0-1.75 1.75v.498q0 .03-.002.06l.002.06v.878a3.25 3.25 0 0 1-3.25 3.25h-2.5a.75.75 0 0 1 0-1.5h2.5a1.75 1.75 0 0 0 1.75-1.75v-.877q0-.03.002-.06L12 11.248zm9 6.75a1 1 0 0 1 1 1v1a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 19.5v-1a1 1 0 1 1 2 0v1a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-1a1 1 0 0 1 1-1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.75 16.5h2a3.75 3.75 0 0 0 3.75-3.75v-.5A2.25 2.25 0 0 1 16.75 10h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 0-.75.75v.5c0 2.9-2.35 5.25-5.25 5.25h-2a.75.75 0 0 1 0-1.5"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgStreamBracket24Filled);

export { ForwardRef as default };
