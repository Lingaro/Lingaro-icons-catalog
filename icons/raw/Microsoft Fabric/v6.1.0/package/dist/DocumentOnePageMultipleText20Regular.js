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
var SvgDocumentOnePageMultipleText20Regular = function SvgDocumentOnePageMultipleText20Regular(_a, ref) {
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
    d: "M6 5.751a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75zm4.5.281a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zM6 9.532a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h6a.5.5 0 1 0 0-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 2.001a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-10a2 2 0 0 0-2-2zm-1 12v-10a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 8.001a1 1 0 0 1 1 1v5.06a3.94 3.94 0 0 1-3.94 3.94H7a1 1 0 0 1-1-1h7a3 3 0 0 0 3-3z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDocumentOnePageMultipleText20Regular);

export { ForwardRef as default };
