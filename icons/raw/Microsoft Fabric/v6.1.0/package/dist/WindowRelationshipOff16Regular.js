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
var SvgWindowRelationshipOff16Regular = function SvgWindowRelationshipOff16Regular(_a, ref) {
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
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#i143024-a)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13.001 8v2.879l-1-1V8h-1.5a1.5 1.5 0 0 1-.446-.068l-.986-.986A1.5 1.5 0 0 1 9 6.5v-4A1.5 1.5 0 0 1 10.5 1h4A1.5 1.5 0 0 1 16 2.5v4A1.5 1.5 0 0 1 14.5 8zm2-1.5V4h-5v2.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5m-5-4V3h5v-.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5m1.769 9.976 2.377 2.378a.5.5 0 1 0 .707-.707l-13-13a.5.5 0 1 0-.707.707l9.647 9.646H8v-2A1.5 1.5 0 0 0 6.5 8h-4A1.5 1.5 0 0 0 1 9.5v4A1.5 1.5 0 0 0 2.5 15h4A1.5 1.5 0 0 0 8 13.5v-1h3.5q.138 0 .269-.024ZM7 13.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11h5zm-5-4a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v.5H2z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "i143024-a"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0h16v16H0z"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgWindowRelationshipOff16Regular);

export { ForwardRef as default };
