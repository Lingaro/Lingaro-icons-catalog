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
var SvgDiagramBranchLink20Regular = function SvgDiagramBranchLink20Regular(_a, ref) {
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
    fillRule: "evenodd",
    d: "M13 4.124c0-.621-.504-1.125-1.125-1.125h-5.75C5.504 2.999 5 3.503 5 4.124v2.75c0 .621.504 1.125 1.125 1.125h.99l-2.4 4h-1.59c-.621 0-1.125.504-1.125 1.125v2.75c0 .621.504 1.125 1.125 1.125h3.75c.621 0 1.125-.504 1.125-1.125v-2.75c0-.621-.504-1.125-1.125-1.125h-.993l2.4-4h1.434l2.4 4h1.166l-2.4-4h.993c.621 0 1.125-.504 1.125-1.125zm-1.125-.125c.069 0 .125.056.125.125v2.75a.125.125 0 0 1-.125.125h-5.75A.125.125 0 0 1 6 6.874v-2.75c0-.069.056-.125.125-.125zm-5 9c.069 0 .125.056.125.125v2.75c0 .07-.056.125-.125.125h-3.75A.125.125 0 0 1 3 15.874v-2.75c0-.069.056-.125.125-.125z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 13.499a2.5 2.5 0 0 0 0 5h.5a.5.5 0 1 0 0-1h-.5a1.5 1.5 0 1 1 0-3h.5a.5.5 0 1 0 0-1zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H16a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 15.499a.5.5 0 0 0 0 1h4a.5.5 0 1 0 0-1z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDiagramBranchLink20Regular);

export { ForwardRef as default };
