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
var SvgWindowRelationshipOff16Filled = function SvgWindowRelationshipOff16Filled(_a, ref) {
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
    clipPath: "url(#i802c6d-a)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9.001 2.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5V3h-7zm4 5.5v2.879l-1-1V8h-1.5a1.5 1.5 0 0 1-.446-.068l-.986-.986A1.5 1.5 0 0 1 9 6.5V4h7v2.5A1.5 1.5 0 0 1 14.5 8zm-1.231 4.476 2.377 2.378a.5.5 0 1 0 .707-.707l-13-13a.5.5 0 1 0-.707.707l9.647 9.646H8V11H1v2.5A1.5 1.5 0 0 0 2.5 15h4A1.5 1.5 0 0 0 8 13.5v-1h3.5q.138 0 .269-.024Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.501 8a1.5 1.5 0 0 0-1.5 1.5v.5h7v-.5a1.5 1.5 0 0 0-1.5-1.5z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "i802c6d-a"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0h16v16H0z"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgWindowRelationshipOff16Filled);

export { ForwardRef as default };
