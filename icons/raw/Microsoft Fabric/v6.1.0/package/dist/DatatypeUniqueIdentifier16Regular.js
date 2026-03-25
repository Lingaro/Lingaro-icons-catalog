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
var SvgDatatypeUniqueIdentifier16Regular = function SvgDatatypeUniqueIdentifier16Regular(_a, ref) {
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
    d: "M2 5.501a.5.5 0 1 0-1 0v4a2.5 2.5 0 1 0 5 0v-4a.5.5 0 1 0-1 0v4a1.5 1.5 0 1 1-3 0zm6-.5a.5.5 0 0 1 .492.41l.008.09v6a.5.5 0 0 1-.992.09L7.5 11.5v-6A.5.5 0 0 1 8 5Zm3.75 0H10.5a.5.5 0 0 0-.5.5v6l.008.09a.5.5 0 0 0 .492.41h1.25A3.25 3.25 0 0 0 15 8.751v-.5a3.25 3.25 0 0 0-3.25-3.25m0 6H11v-5h.75A2.25 2.25 0 0 1 14 8.251v.5a2.25 2.25 0 0 1-2.25 2.25"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatatypeUniqueIdentifier16Regular);

export { ForwardRef as default };
