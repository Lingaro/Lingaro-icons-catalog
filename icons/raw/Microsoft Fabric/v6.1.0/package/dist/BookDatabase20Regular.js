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
var SvgBookDatabase20Regular = function SvgBookDatabase20Regular(_a, ref) {
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
    d: "M4 4v12a2 2 0 0 0 2 2h3.5a2.6 2.6 0 0 1-.449-1H6a1 1 0 0 1-1-1h4v-1H5V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3.014q.515.027 1 .112V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm1 0v1h6V5zm10 3.42a6.5 6.5 0 0 0-1.12-.3A8 8 0 0 0 14.5 8C12.015 8 10 9.12 10 10.5s2.015 2.5 4.5 2.5 4.5-1.12 4.5-2.5c0-.867-.794-1.63-2-2.08"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.168 13.142c-.99.55-2.288.858-3.668.858s-2.678-.309-3.668-.858a4.6 4.6 0 0 1-.832-.588v3.945c0 1.381 2.015 2.5 4.5 2.5S19 17.88 19 16.5l.001-3.946a4.5 4.5 0 0 1-.833.589Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBookDatabase20Regular);

export { ForwardRef as default };
