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
var SvgWindowRelationship16Filled = function SvgWindowRelationship16Filled(_a, ref) {
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
    d: "M9 2.5A1.5 1.5 0 0 1 10.5 1h4A1.5 1.5 0 0 1 16 2.5V3H9zM9 4v2.5A1.5 1.5 0 0 0 10.5 8H12v3a.5.5 0 0 1-.5.5H8V11H1v2.5A1.5 1.5 0 0 0 2.5 15h4A1.5 1.5 0 0 0 8 13.5v-1h3.5A1.5 1.5 0 0 0 13 11V8h1.5A1.5 1.5 0 0 0 16 6.5V4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.5 8A1.5 1.5 0 0 0 1 9.5v.5h7v-.5A1.5 1.5 0 0 0 6.5 8z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgWindowRelationship16Filled);

export { ForwardRef as default };
