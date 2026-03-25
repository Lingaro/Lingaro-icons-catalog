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
var SvgPipelineNote20Filled = function SvgPipelineNote20Filled(_a, ref) {
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
    d: "M3.5 4A1.5 1.5 0 0 0 2 5.5v9a1.5 1.5 0 0 0 3 .001V5.5A1.5 1.5 0 0 0 3.5 4M15 9V5.5a1.5 1.5 0 0 1 3 0v3.55a2.5 2.5 0 0 0-.5-.05zm-1-3v3h-2.5A2.5 2.5 0 0 0 9 11.5V14H6V6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 11.5a1.5 1.5 0 0 1 1.5-1.5h6a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5zm6.5 3.5h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1m-4-3a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgPipelineNote20Filled);

export { ForwardRef as default };
