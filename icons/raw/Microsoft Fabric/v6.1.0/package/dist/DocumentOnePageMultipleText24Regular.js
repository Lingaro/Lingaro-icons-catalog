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
var SvgDocumentOnePageMultipleText24Regular = function SvgDocumentOnePageMultipleText24Regular(_a, ref) {
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
    d: "M7 6.251a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75zm4.75.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zM7 11.251a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75m.75 2.781a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 4.251a2.25 2.25 0 0 1 2.25-2.25h9a2.25 2.25 0 0 1 2.25 2.25v13a2.25 2.25 0 0 1-2.25 2.25h-9A2.25 2.25 0 0 1 4 17.251zm1.504-.077-.004.077v13c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75v-13a.75.75 0 0 0-.75-.75h-9a.75.75 0 0 0-.746.673"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.75 22.001a2.25 2.25 0 0 1-2.121-1.5h8.622a3.25 3.25 0 0 0 3.25-3.25V8.938l.84.84c.423.423.66.995.66 1.592v5.881a4.75 4.75 0 0 1-4.75 4.75z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDocumentOnePageMultipleText24Regular);

export { ForwardRef as default };
