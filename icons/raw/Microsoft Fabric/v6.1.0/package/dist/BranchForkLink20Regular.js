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
var SvgBranchForkLink20Regular = function SvgBranchForkLink20Regular(_a, ref) {
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
    d: "M9 5a3 3 0 1 0-3.5 2.959v4.082a3 3 0 1 0 1 0V11h4.196a3.5 3.5 0 0 1 1.804-.5h1c.607-.456 1-1.182 1-2v-.541a3 3 0 1 0-1 0V8.5A1.5 1.5 0 0 1 12 10H6.5V7.959A3 3 0 0 0 9 5M6 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4M16 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 11.5a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H16a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 14a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBranchForkLink20Regular);

export { ForwardRef as default };
