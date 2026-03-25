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
var SvgDataScience32Regular = function SvgDataScience32Regular(_a, ref) {
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
    fillRule: "evenodd",
    d: "m7.016 26.532 8.727 3.452c.24.039.483.007.707-.092l9.55-4.79a.9.9 0 0 0 .268-.196c.391-.397.425-1.081.08-1.53l-4.268-4.39 4.938-8.571.008-.015a3.16 3.16 0 0 0 .39-1.532c0-1.11-.585-2.267-1.72-2.805l-.02-.01-8.414-3.767a3.2 3.2 0 0 0-2.581-.03l-.016.006-7.982 3.456a2 2 0 0 0-.934 2.842l4.903 7.89-4.664 5.29-.043.056c-.919 1.202-.869 2.986.221 4.117.245.26.533.468.85.62Zm18.26-17.1c.09-.163.14-.357.14-.564 0-.447-.235-.836-.576-.998l-8.4-3.76a1.2 1.2 0 0 0-.498-.11c-.174 0-.342.039-.499.104l-7.967 3.45 7.516 3.937c.476.285.812.816.812 1.47 0 .408-.128.777-.347 1.062L7.534 23.01c-.341.447-.308 1.127.079 1.522a.9.9 0 0 0 .263.195l6.972 2.805z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataScience32Regular);

export { ForwardRef as default };
