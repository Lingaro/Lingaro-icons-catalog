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
var SvgDatabases28Filled = function SvgDatabases28Filled(_a, ref) {
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
    d: "M7.557 7.953A1.5 1.5 0 0 1 8.987 6h9.441C20.401 6 22 7.176 22 8.98v1.458c1.634-.862 2.5-2.187 2.5-3.7C24.5 4.081 21.669 2 16.803 2H3.499A1.5 1.5 0 0 0 2 3.5c0 .122.011.241.046.353.065.204 2.78 8.691 4.199 13.116a1.5 1.5 0 0 0 1.425 1.032h3.109l-2.16-6.732-.001-.006-1.062-3.309z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.018 12.977h-.494l3.95 12.286c.232.72.85.779 1.17.72 2.967-.552 4.355-2.133 4.355-3.983V6.743c-.003 3.103-2.78 6.233-8.981 6.233z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.019 11.477h-.494a1.5 1.5 0 0 0-1.43 1.961l2.749 8.563h-3.112a1.5 1.5 0 0 1-1.425-1.032L8.987 7.501h9.44c1 0 2.074.463 2.074 1.48v2.047c-.992.286-2.151.449-3.482.449"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabases28Filled);

export { ForwardRef as default };
