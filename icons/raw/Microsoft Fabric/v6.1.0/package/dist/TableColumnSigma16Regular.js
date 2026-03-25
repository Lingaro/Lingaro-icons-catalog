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
var SvgTableColumnSigma16Regular = function SvgTableColumnSigma16Regular(_a, ref) {
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
    d: "M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h4.351l.94-1H6v-2h4v1.778l1-1.064v-.428L9.791 10H6V6h8V4.5A2.5 2.5 0 0 0 11.5 2zM10 5H6V3h4zm3-.5V5h-2V3h.5A1.5 1.5 0 0 1 13 4.5M4.5 13A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3H5v10z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 16h6a.5.5 0 0 0 0-1h-4.845l2.968-3.158a.5.5 0 0 0 0-.684L10.655 8H15.5a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.364.842l3.438 3.658-3.438 3.658A.5.5 0 0 0 9.5 16"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTableColumnSigma16Regular);

export { ForwardRef as default };
