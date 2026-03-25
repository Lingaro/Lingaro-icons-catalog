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
var SvgProgressBar20Filled = function SvgProgressBar20Filled(_a, ref) {
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
    d: "M4.5 4.75A1.75 1.75 0 0 0 2.75 6.5v1c0 .966.784 1.75 1.75 1.75h11a1.75 1.75 0 0 0 1.75-1.75v-1a1.75 1.75 0 0 0-1.75-1.75zm3.5 3v-1.5h7.5a.25.25 0 0 1 .25.25v1a.25.25 0 0 1-.25.25zm-3.5 3a1.75 1.75 0 0 0-1.75 1.75v1c0 .966.784 1.75 1.75 1.75h11a1.75 1.75 0 0 0 1.75-1.75v-1a1.75 1.75 0 0 0-1.75-1.75zm7.5 3v-1.5h3.5a.25.25 0 0 1 .25.25v1a.25.25 0 0 1-.25.25z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgProgressBar20Filled);

export { ForwardRef as default };
