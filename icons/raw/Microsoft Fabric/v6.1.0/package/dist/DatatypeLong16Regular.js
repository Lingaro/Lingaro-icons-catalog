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
var SvgDatatypeLong16Regular = function SvgDatatypeLong16Regular(_a, ref) {
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
    d: "M5.658 4.66A2.25 2.25 0 0 1 9.5 6.234l.004.066a.5.5 0 0 1-.002.092 2.44 2.44 0 0 1-.921 1.627 1 1 0 0 1-.057.039l-1.627.94A1.6 1.6 0 0 0 6.058 10h2.941a.5.5 0 1 1 0 1.001H5.5a.5.5 0 0 1-.5-.483 2.59 2.59 0 0 1 1.407-2.392l1.584-.915a1.44 1.44 0 0 0 .512-.898l-.002-.03A2.25 2.25 0 0 1 5.658 4.66m-1.922-.6A.5.5 0 0 1 4 4.501v6a.5.5 0 0 1-1 0V5.435l-.723.482a.5.5 0 1 1-.554-.832l1.5-1a.5.5 0 0 1 .513-.025M12 4.501a.5.5 0 0 0-1 0v6a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1H12z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatatypeLong16Regular);

export { ForwardRef as default };
