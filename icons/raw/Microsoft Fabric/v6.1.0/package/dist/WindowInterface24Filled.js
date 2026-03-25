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
var SvgWindowInterface24Filled = function SvgWindowInterface24Filled(_a, ref) {
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
    d: "M3.001 6.25A3.25 3.25 0 0 1 6.251 3h11.5a3.25 3.25 0 0 1 3.25 3.25v9.006a4.5 4.5 0 0 0-1.5-.256V8.5h-15v9.25a1.75 1.75 0 0 0 1.5 1.732v.018c0 .537.12 1.045.337 1.5H6.25A3.25 3.25 0 0 1 3 17.75z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23.001 19.5a3.5 3.5 0 0 1-6.92.75h-4.194a2.501 2.501 0 1 1 0-1.5h4.194a3.501 3.501 0 0 1 6.92.75m-1.5 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-11 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgWindowInterface24Filled);

export { ForwardRef as default };
