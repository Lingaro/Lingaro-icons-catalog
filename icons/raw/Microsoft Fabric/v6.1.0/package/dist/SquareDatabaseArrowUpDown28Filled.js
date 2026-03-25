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
var SvgSquareDatabaseArrowUpDown28Filled = function SvgSquareDatabaseArrowUpDown28Filled(_a, ref) {
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
    d: "M3 6.75A3.75 3.75 0 0 1 6.75 3h14.5A3.75 3.75 0 0 1 25 6.75v9.806a2.3 2.3 0 0 0-.514-.056c-.6 0-1.164.234-1.59.659l-2.146 2.147v-.556c0-1.24-1.01-2.25-2.25-2.25v-3.446c-.255.23-.54.425-.832.588-.99.55-2.288.858-3.668.858s-2.678-.309-3.668-.858a4.6 4.6 0 0 1-.832-.588V17c0 1.38 2.015 2.5 4.5 2.5.82 0 1.588-.122 2.25-.334v2.6c-.6.001-1.163.235-1.587.659A2.248 2.248 0 0 0 14.229 25H6.75A3.75 3.75 0 0 1 3 21.25zM14 8.5c-2.485 0-4.5 1.12-4.5 2.5s2.015 2.5 4.5 2.5 4.5-1.12 4.5-2.5-2.015-2.5-4.5-2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.495 27a.75.75 0 0 1-.537-.22l-2.234-2.234a.75.75 0 0 1 1.06-1.06l.966.965V18.75a.75.75 0 0 1 1.5 0v5.69l.955-.955a.75.75 0 0 1 1.06 1.061l-2.234 2.234a.75.75 0 0 1-.536.22m6.745-6.451.965.966a.75.75 0 0 0 1.06-1.061l-2.234-2.234a.75.75 0 0 0-.536-.22.75.75 0 0 0-.537.22l-2.234 2.234a.75.75 0 0 0 1.06 1.06l.955-.954v5.69a.75.75 0 1 0 1.5 0v-5.701Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSquareDatabaseArrowUpDown28Filled);

export { ForwardRef as default };
