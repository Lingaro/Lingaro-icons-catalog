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
var SvgNotebookArrowDiagonalUpRight20Regular = function SvgNotebookArrowDiagonalUpRight20Regular(_a, ref) {
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
    d: "M11.318 2.318a4.5 4.5 0 1 1 6.364 6.364 4.5 4.5 0 0 1-6.364-6.364m5.096 1.768v-.003a.5.5 0 0 0-.144-.349l-.003-.002-.002-.002a.5.5 0 0 0-.351-.144h-2.829a.5.5 0 1 0 0 1h1.622L12.732 6.56a.5.5 0 0 0 .707.707l1.975-1.975v1.621a.5.5 0 0 0 1 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 16v-5.023a5.5 5.5 0 0 1-1 0V16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4.6a5.4 5.4 0 0 1 .657-1H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2m2-5.6a5.5 5.5 0 0 1-1 .393V12h.5a.5.5 0 0 0 .5-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.022 5H5.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h4.1a5.5 5.5 0 0 1-.393-1H6V6h3.022a5.5 5.5 0 0 1 0-1M16 13h.5a.5.5 0 0 1 .5.5V15a.5.5 0 0 1-.5.5H16z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgNotebookArrowDiagonalUpRight20Regular);

export { ForwardRef as default };
