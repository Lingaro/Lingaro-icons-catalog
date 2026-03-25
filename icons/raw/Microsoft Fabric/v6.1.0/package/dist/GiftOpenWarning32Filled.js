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
var SvgGiftOpenWarning32Filled = function SvgGiftOpenWarning32Filled(_a, ref) {
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
    d: "M23 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M14 6a5 5 0 0 0-5 5 4 4 0 0 0 4 4 3 3 0 0 0 3-3 2 2 0 0 0-2-2 1 1 0 1 0 0 2 1 1 0 0 1-1 1 2 2 0 0 1-2-2 3 3 0 0 1 3-3 4 4 0 0 1 4 4 5 5 0 0 1-5 5 1 1 0 1 0 0 2 7 7 0 0 0 7-7 6 6 0 0 0-6-6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.682 16H7a1 1 0 0 0-.442.105l-4.005 2a1 1 0 1 0 .894 1.79l2.558-1.278V24a4 4 0 0 0 4 4h4.032c.057-.383.18-.768.377-1.14l4.119-7.76A8.96 8.96 0 0 1 13 21a3 3 0 0 1-2.557-4.57 6 6 0 0 1-.76-.43ZM28 9a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1zm-6.263 7.26-5.998 11.303c-.707 1.332.259 2.937 1.767 2.937h10.989c1.508 0 2.473-1.605 1.766-2.937L24.263 16.26c-.537-1.013-1.989-1.013-2.526 0m2.013 3.49v5.5a.75.75 0 0 1-1.5 0v-5.5a.75.75 0 0 1 1.5 0M24 28a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgGiftOpenWarning32Filled);

export { ForwardRef as default };
