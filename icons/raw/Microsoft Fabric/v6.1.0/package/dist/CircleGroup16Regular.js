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
var SvgCircleGroup16Regular = function SvgCircleGroup16Regular(_a, ref) {
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
    d: "M8 1a2.5 2.5 0 0 0-2.5 2.544A6 6 0 0 0 2 9v.05a2.5 2.5 0 1 0 2.017 4.437A5.98 5.98 0 0 0 8 15a5.98 5.98 0 0 0 3.983-1.513A2.5 2.5 0 1 0 14 9.05V9a6 6 0 0 0-3.5-5.456V3.5A2.5 2.5 0 0 0 8 1m5 8.05a2.5 2.5 0 0 0-1.675 3.684A4.98 4.98 0 0 1 8 14a4.98 4.98 0 0 1-3.325-1.266A2.5 2.5 0 0 0 3 9.05V9a5 5 0 0 1 2.728-4.455 2.5 2.5 0 0 0 4.544 0A5 5 0 0 1 13 9.05M6.5 3.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m-4 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m9.5 1.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgCircleGroup16Regular);

export { ForwardRef as default };
