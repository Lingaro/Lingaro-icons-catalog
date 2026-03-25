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
var SvgBriefcasePulse24Regular = function SvgBriefcasePulse24Regular(_a, ref) {
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
    d: "M10.25 3.5h3.5a.75.75 0 0 1 .75.75V6h-5V4.25a.75.75 0 0 1 .75-.75M8 4.25V6H6.25A3.25 3.25 0 0 0 3 9.25v7.5A3.25 3.25 0 0 0 6.25 20h11.5A3.25 3.25 0 0 0 21 16.75v-7.5A3.25 3.25 0 0 0 17.75 6H16V4.25A2.25 2.25 0 0 0 13.75 2h-3.5A2.25 2.25 0 0 0 8 4.25m9.75 3.25c.966 0 1.75.784 1.75 1.75v7.5a1.75 1.75 0 0 1-1.75 1.75H6.25a1.75 1.75 0 0 1-1.75-1.75v-7.5c0-.966.784-1.75 1.75-1.75z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M10.572 9a.75.75 0 0 1 .7.432l2.197 4.686.691-1.217a.75.75 0 0 1 .652-.38H16.5a.75.75 0 0 1 0 1.5h-1.251l-1.19 2.1a.75.75 0 0 1-1.332-.053l-2.079-4.434-.764 1.916a.75.75 0 0 1-.697.471H7.5a.75.75 0 0 1 0-1.5h1.18l1.217-3.05.048-.099A.75.75 0 0 1 10.572 9"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBriefcasePulse24Regular);

export { ForwardRef as default };
