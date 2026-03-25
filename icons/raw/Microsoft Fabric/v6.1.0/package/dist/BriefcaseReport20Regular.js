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
var SvgBriefcaseReport20Regular = function SvgBriefcaseReport20Regular(_a, ref) {
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
    d: "M6 3.75V5H4.5A2.5 2.5 0 0 0 2 7.5v6A2.5 2.5 0 0 0 4.5 16H10v-1H4.5A1.5 1.5 0 0 1 3 13.5v-3c.418.314.937.5 1.5.5H8v.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V11h3v-1h-3v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.5H4.5A1.5 1.5 0 0 1 3 8.5v-1A1.5 1.5 0 0 1 4.5 6h9A1.5 1.5 0 0 1 15 7.5V8c.364 0 .706.097 1 .268V7.5A2.5 2.5 0 0 0 13.5 5H12V3.75A1.75 1.75 0 0 0 10.25 2h-2.5A1.75 1.75 0 0 0 6 3.75M7 5V3.75A.75.75 0 0 1 7.75 3h2.5a.75.75 0 0 1 .75.75V5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 10a1 1 0 1 0-2 0v7a1 1 0 1 0 2 0zm-5 4a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0zm7-3a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-5a1 1 0 0 0-1-1"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBriefcaseReport20Regular);

export { ForwardRef as default };
