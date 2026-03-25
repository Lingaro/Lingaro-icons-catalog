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
var SvgBriefcasePulse20Regular = function SvgBriefcasePulse20Regular(_a, ref) {
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
    fill: "currentColor",
    d: "M8.75 3h2.5a.75.75 0 0 1 .75.75V5H8V3.75A.75.75 0 0 1 8.75 3M7 3.75V5H5.5A2.5 2.5 0 0 0 3 7.5v6A2.5 2.5 0 0 0 5.5 16h9a2.5 2.5 0 0 0 2.5-2.5v-6A2.5 2.5 0 0 0 14.5 5H13V3.75A1.75 1.75 0 0 0 11.25 2h-2.5A1.75 1.75 0 0 0 7 3.75M14.5 6A1.5 1.5 0 0 1 16 7.5v6a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 4 13.5v-6A1.5 1.5 0 0 1 5.5 6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M9.262 7.5a.5.5 0 0 1 .445.297l1.617 3.64.752-1.201.037-.053A.5.5 0 0 1 12.5 10h1a.5.5 0 0 1 0 1h-.724l-1.102 1.765a.5.5 0 0 1-.881-.062l-1.57-3.532-.776 1.553A.5.5 0 0 1 8 11H6.5a.5.5 0 1 1 0-1h1.191l1.112-2.223.037-.062a.5.5 0 0 1 .422-.215"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBriefcasePulse20Regular);

export { ForwardRef as default };
