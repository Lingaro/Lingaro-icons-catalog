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
var SvgShapesThree20Filled = function SvgShapesThree20Filled(_a, ref) {
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
    d: "M5.75 3A1.75 1.75 0 0 0 4 4.75V8.6c.75-.384 1.6-.6 2.5-.6 1.363 0 2.61.496 3.572 1.317l1.914-3.354.014-.024V4.75A1.75 1.75 0 0 0 10.25 3zm11.982 12h-5.939A5.5 5.5 0 0 0 12 13.5c0-1.3-.45-2.493-1.204-3.435l2.058-3.606a.903.903 0 0 1 1.573 0l4.091 7.169c.348.61-.088 1.372-.786 1.372"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 13.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgShapesThree20Filled);

export { ForwardRef as default };
