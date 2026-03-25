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
var SvgArrowDownDouble24Regular = function SvgArrowDownDouble24Regular(_a, ref) {
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
    d: "M7.5 18.44V3.75a.75.75 0 0 0-1.5 0v14.69l-1.72-1.72a.75.75 0 0 0-1.061 1.06l3 3a.75.75 0 0 0 1.06 0l3.001-3a.75.75 0 1 0-1.06-1.06zm10.5 0 .001-14.69a.75.75 0 0 0-1.5 0v14.69l-1.72-1.72a.75.75 0 1 0-1.061 1.06l3 3a.75.75 0 0 0 1.06 0l3.001-3a.75.75 0 1 0-1.06-1.06z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgArrowDownDouble24Regular);

export { ForwardRef as default };
