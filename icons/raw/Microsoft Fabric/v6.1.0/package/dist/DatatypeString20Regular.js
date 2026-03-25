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
var SvgDatatypeString20Regular = function SvgDatatypeString20Regular(_a, ref) {
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
    d: "m3.529 6.333-2.5 7a.5.5 0 1 0 .942.336l.596-1.668h2.866l.596 1.668a.5.5 0 0 0 .942-.336l-2.5-7a.5.5 0 0 0-.942 0m1.547 4.668H2.924L4 7.988zm7.868-2.248a2.25 2.25 0 0 1-.666 1.148 2.248 2.248 0 0 1-1.278 4.1H8.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h2.25a2.248 2.248 0 0 1 2.194 2.752m-1.31.381a1.252 1.252 0 0 0-.883-2.133H8.999v2.5h1.75c.331 0 .649-.132.883-.367ZM9 13.001h2a1.25 1.25 0 0 0 0-2.5H9zm6.44-5.561A1.5 1.5 0 0 1 18 8.501a.5.5 0 1 0 1 0 2.5 2.5 0 0 0-5 0v3a2.5 2.5 0 0 0 5 0 .5.5 0 1 0-1 0 1.5 1.5 0 0 1-3 0v-3c0-.398.158-.78.44-1.06Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatatypeString20Regular);

export { ForwardRef as default };
