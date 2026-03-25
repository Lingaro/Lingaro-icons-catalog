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
var SvgWindowTree20Filled = function SvgWindowTree20Filled(_a, ref) {
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
    d: "M12.501 0a1.5 1.5 0 0 0-1.5 1.5V2h-5.5a1.5 1.5 0 0 0-1.5 1.5V6h-2.5a1.5 1.5 0 0 0-1.5 1.5V8h8v-.5a1.5 1.5 0 0 0-1.5-1.5h-1.5V3.5a.5.5 0 0 1 .5-.5h5.5v3.5a1.5 1.5 0 0 0 1.5 1.5h5a1.5 1.5 0 0 0 1.5-1.5V3h-8V2h8v-.5a1.5 1.5 0 0 0-1.5-1.5zm-4.5 9h-8v3.5a1.5 1.5 0 0 0 1.5 1.5h2.5v2.5a1.5 1.5 0 0 0 1.5 1.5h5.5v.5a1.5 1.5 0 0 0 1.5 1.5h5a1.5 1.5 0 0 0 1.5-1.5V15h-8v2h-5.5a.5.5 0 0 1-.5-.5V14h1.5a1.5 1.5 0 0 0 1.5-1.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.001 14h8v-.5a1.5 1.5 0 0 0-1.5-1.5h-5a1.5 1.5 0 0 0-1.5 1.5z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgWindowTree20Filled);

export { ForwardRef as default };
