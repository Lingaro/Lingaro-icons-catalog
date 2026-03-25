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
var SvgBriefcasePulse20Filled = function SvgBriefcasePulse20Filled(_a, ref) {
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
    d: "M11.25 2c.966 0 1.75.784 1.75 1.75V5h1.5A2.5 2.5 0 0 1 17 7.5v6a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 13.5v-6A2.5 2.5 0 0 1 5.5 5H7V3.75C7 2.784 7.784 2 8.75 2zM9.262 7.5a.5.5 0 0 0-.422.215l-.037.061L7.69 10H6.5a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .447-.276l.776-1.553 1.57 3.532a.5.5 0 0 0 .88.062L12.777 11h.724a.5.5 0 0 0 0-1h-1a.5.5 0 0 0-.387.183l-.037.052-.752 1.202-1.617-3.64a.5.5 0 0 0-.445-.297M8.75 3a.75.75 0 0 0-.75.75V5h4V3.75a.75.75 0 0 0-.75-.75z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBriefcasePulse20Filled);

export { ForwardRef as default };
