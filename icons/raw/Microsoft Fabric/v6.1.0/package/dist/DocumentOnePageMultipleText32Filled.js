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
var SvgDocumentOnePageMultipleText32Filled = function SvgDocumentOnePageMultipleText32Filled(_a, ref) {
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
    d: "M5 5.501a3.5 3.5 0 0 1 3.5-3.5h11a3.5 3.5 0 0 1 3.5 3.5v16a3.5 3.5 0 0 1-3.5 3.5h-11a3.5 3.5 0 0 1-3.5-3.5zm4.75 1.5a.75.75 0 0 0-.75.75v2.5c0 .414.336.75.75.75h2a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-.75-.75zm5.25 1a1 1 0 1 0 0 2h2.906a1 1 0 0 0 0-2zm-5 5a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm0 5a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 29a5.49 5.49 0 0 1-4.243-2H21.5a3.5 3.5 0 0 0 3.5-3.5V8.259a5.49 5.49 0 0 1 2 4.243v11a5.5 5.5 0 0 1-5.5 5.5h-6Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDocumentOnePageMultipleText32Filled);

export { ForwardRef as default };
