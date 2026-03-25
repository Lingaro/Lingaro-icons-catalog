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
var SvgDataFactory16Regular = function SvgDataFactory16Regular(_a, ref) {
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
    d: "M13.83 4.794c.644 0 1.165.521 1.165 1.165v.014L15 5.956v4.084c0 .644-.521 1.166-1.165 1.166h-.483a4.08 4.08 0 0 0-3.901 2.883l-.154.497A.585.585 0 0 1 8.74 15H5.052a.478.478 0 0 1-.473-.546 8.56 8.56 0 0 1 1.799-4.119H1.584A.585.585 0 0 1 1 9.749v-3.5c0-.321.262-.584.584-.584h4.75A8.7 8.7 0 0 1 4.58 1.553.485.485 0 0 1 5.06 1h3.677c.255 0 .48.168.556.413l.154.497a4.08 4.08 0 0 0 3.902 2.884zM7.25 6.665H2v2.669h9.665v-.452A8.7 8.7 0 0 1 7.25 6.665m6.745-.706v2.06l-.063-.001h-.724A7.72 7.72 0 0 1 5.678 2h2.75l.063.205a5.08 5.08 0 0 0 4.857 3.589h.482c.092 0 .165.073.165.165",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataFactory16Regular);

export { ForwardRef as default };
