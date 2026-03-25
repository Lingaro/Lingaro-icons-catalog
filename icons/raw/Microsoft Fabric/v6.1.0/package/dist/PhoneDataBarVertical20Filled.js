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
var SvgPhoneDataBarVertical20Filled = function SvgPhoneDataBarVertical20Filled(_a, ref) {
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
    d: "M4.5 2A1.5 1.5 0 0 0 3 3.5v13A1.5 1.5 0 0 0 4.5 18H9v-3H7a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .235.059A2 2 0 0 1 12 13.268V13a2 2 0 0 1 1-1.732V3.5A1.5 1.5 0 0 0 11.5 2zm11.793 8.293A1 1 0 0 0 16 11v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1.707-.707"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.293 14.293A1 1 0 0 0 10 15v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1.707-.707m3-2A1 1 0 0 0 13 13v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1.707-.707"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgPhoneDataBarVertical20Filled);

export { ForwardRef as default };
