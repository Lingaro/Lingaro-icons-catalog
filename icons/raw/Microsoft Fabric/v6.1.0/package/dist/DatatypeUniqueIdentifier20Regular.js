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
var SvgDatatypeUniqueIdentifier20Regular = function SvgDatatypeUniqueIdentifier20Regular(_a, ref) {
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
    d: "M3 6.501a.5.5 0 1 0-1 0v4.5a3 3 0 0 0 6 0v-4.5a.5.5 0 1 0-1 0v4.5a2 2 0 0 1-4 0zm7-.5a.5.5 0 0 1 .492.41l.008.09v7a.5.5 0 0 1-.992.09L9.5 13.5v-7A.5.5 0 0 1 10 6Zm4.555 0H12.5a.5.5 0 0 0-.5.5v7l.008.09a.5.5 0 0 0 .492.41h2.005a3.5 3.5 0 0 0 3.5-3.5v-1.05a3.45 3.45 0 0 0-3.45-3.45m-.05 7H13v-6h1.555a2.45 2.45 0 0 1 2.45 2.45v1.05a2.5 2.5 0 0 1-2.5 2.5"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatatypeUniqueIdentifier20Regular);

export { ForwardRef as default };
