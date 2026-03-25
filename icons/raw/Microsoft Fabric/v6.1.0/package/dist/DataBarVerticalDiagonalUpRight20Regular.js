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
var SvgDataBarVerticalDiagonalUpRight20Regular = function SvgDataBarVerticalDiagonalUpRight20Regular(_a, ref) {
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
    d: "M11.318 2.318a4.5 4.5 0 1 1 6.364 6.364 4.5 4.5 0 0 1-6.364-6.364m5.096 1.768v-.003a.5.5 0 0 0-.144-.349l-.002-.002-.002-.002a.5.5 0 0 0-.352-.144h-2.828a.5.5 0 1 0 0 1h1.621L12.732 6.56a.5.5 0 0 0 .708.707l1.974-1.975v1.621a.5.5 0 0 0 1 0zM5 3a2 2 0 0 0-2 2v10a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2M4 5a1 1 0 0 1 2 0v10a1 1 0 1 1-2 0zm5.05 1.24A2 2 0 0 0 8 8v7a2 2 0 1 0 4 0v-4.6a5.5 5.5 0 0 1-1-.657V15a1 1 0 1 1-2 0V8c0-.278.114-.53.297-.712A5.5 5.5 0 0 1 9.05 6.24m3.96 4.556q-.01.1-.01.204v4a2 2 0 1 0 4 0v-4a2 2 0 0 0-.08-.56 5.4 5.4 0 0 1-.94.358q.02.098.02.202v4a1 1 0 1 1-2 0v-4.023a5.5 5.5 0 0 1-.99-.181"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataBarVerticalDiagonalUpRight20Regular);

export { ForwardRef as default };
