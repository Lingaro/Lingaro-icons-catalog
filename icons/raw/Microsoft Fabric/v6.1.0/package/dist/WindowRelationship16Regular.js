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
var SvgWindowRelationship16Regular = function SvgWindowRelationship16Regular(_a, ref) {
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
    d: "M10.5 1A1.5 1.5 0 0 0 9 2.5v4A1.5 1.5 0 0 0 10.5 8H12v3a.5.5 0 0 1-.5.5H8v-2A1.5 1.5 0 0 0 6.5 8h-4A1.5 1.5 0 0 0 1 9.5v4A1.5 1.5 0 0 0 2.5 15h4A1.5 1.5 0 0 0 8 13.5v-1h3.5A1.5 1.5 0 0 0 13 11V8h1.5A1.5 1.5 0 0 0 16 6.5v-4A1.5 1.5 0 0 0 14.5 1zM15 6.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V4h5zm-5-4a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5V3h-5zm-3 11a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11h5zm-5-4a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v.5H2z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgWindowRelationship16Regular);

export { ForwardRef as default };
