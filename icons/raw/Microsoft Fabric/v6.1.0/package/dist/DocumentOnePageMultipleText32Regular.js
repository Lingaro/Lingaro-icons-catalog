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
var SvgDocumentOnePageMultipleText32Regular = function SvgDocumentOnePageMultipleText32Regular(_a, ref) {
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
    d: "M9 7.751a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1-.75-.75zm6 .25a1 1 0 1 0 0 2h2.906a1 1 0 0 0 0-2zm-6 6a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1m1 4a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 2.001a3.5 3.5 0 0 0-3.5 3.5v16a3.5 3.5 0 0 0 3.5 3.5h11a3.5 3.5 0 0 0 3.5-3.5v-16a3.5 3.5 0 0 0-3.5-3.5zM7 5.501a1.5 1.5 0 0 1 1.5-1.5h11a1.5 1.5 0 0 1 1.5 1.5v16a1.5 1.5 0 0 1-1.5 1.5h-11a1.5 1.5 0 0 1-1.5-1.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 29a5.49 5.49 0 0 1-4.243-2H21.5a3.5 3.5 0 0 0 3.5-3.5V8.259a5.49 5.49 0 0 1 2 4.243v11a5.5 5.5 0 0 1-5.5 5.5h-6Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDocumentOnePageMultipleText32Regular);

export { ForwardRef as default };
