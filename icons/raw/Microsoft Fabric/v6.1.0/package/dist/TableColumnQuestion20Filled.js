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
var SvgTableColumnQuestion20Filled = function SvgTableColumnQuestion20Filled(_a, ref) {
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
    d: "M7 3H5.5A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17H7zm1 0h4v4H8zm6.5 0A2.5 2.5 0 0 1 17 5.5V7h-4V3zM8 12h1.6A5.52 5.52 0 0 1 12 9.6V8H8zm9-2.4a5.5 5.5 0 0 0-2.5-.6 5.5 5.5 0 0 0-1.5.207V8h4zM8 17h1.6a5.5 5.5 0 0 1-.6-2.5 5.5 5.5 0 0 1 .207-1.5H8z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-4.5 1.88a.625.625 0 1 1 0 1.25.625.625 0 0 1 0-1.25m0-4.877c1.031 0 1.853.846 1.853 1.95 0 .586-.214.908-.727 1.319l-.277.214c-.246.194-.329.3-.346.448l-.011.156A.5.5 0 0 1 14 15.5c0-.57.21-.884.716-1.288l.278-.215c.288-.23.36-.342.36-.544 0-.558-.382-.95-.854-.95-.494 0-.859.366-.854.945a.5.5 0 1 1-1 .01c-.01-1.137.806-1.955 1.854-1.955",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTableColumnQuestion20Filled);

export { ForwardRef as default };
