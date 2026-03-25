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
var SvgDataFactory48Regular = function SvgDataFactory48Regular(_a, ref) {
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
    d: "M40.598 14.84a3.325 3.325 0 0 1 3.323 3.33v11.78l.01-.12c0 1.84-1.487 3.33-3.323 3.33H39.23a11.65 11.65 0 0 0-11.129 8.24l-.439 1.42c-.22.7-.858 1.18-1.587 1.18H15.557c-.828 0-1.467-.74-1.347-1.56a24.47 24.47 0 0 1 5.13-11.77H5.667C4.749 30.67 4 29.92 4 29V19c0-.92.749-1.67 1.667-1.67h13.549A24.86 24.86 0 0 1 14.21 5.58c-.12-.83.529-1.58 1.367-1.58h10.49c.728 0 1.367.48 1.586 1.18l.44 1.42a11.65 11.65 0 0 0 11.127 8.24zm-19.146 4.99H6.5v8.34h28.274v-1.59a24.83 24.83 0 0 1-13.322-6.75m19.969-1.66v6.265a6 6 0 0 0-.534-.025h-2.066c-10.676 0-19.799-7.54-21.914-17.91h8.538l.258.835v.002C27.533 13.28 33.01 17.34 39.22 17.34h1.378c.45 0 .823.366.823.83",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataFactory48Regular);

export { ForwardRef as default };
