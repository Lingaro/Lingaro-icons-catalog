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
var SvgIotPerson20Filled = function SvgIotPerson20Filled(_a, ref) {
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
    d: "M14 5.991a2 2 0 1 0-1.482-.657L11.24 7.267A3 3 0 0 0 10 7a3 3 0 0 0-1.444.37l-.944-1.186a2 2 0 1 0-.775.632l.935 1.175a3 3 0 0 0-.637 2.903l-1.633.786a2 2 0 1 0 .452.892l1.635-.787a3 3 0 0 0 2.874 1.18l.012.035h.196a3 3 0 0 1-.17-1.063 3 3 0 0 1 2.352-2.867 3 3 0 0 0-.784-1.243l1.284-1.943q.306.106.647.107"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0m1.5 4.5c0 1.245-1 2.5-3.5 2.5S10 17.75 10 16.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgIotPerson20Filled);

export { ForwardRef as default };
