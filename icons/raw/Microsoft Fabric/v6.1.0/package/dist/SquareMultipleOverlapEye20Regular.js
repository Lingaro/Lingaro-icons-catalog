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
var SvgSquareMultipleOverlapEye20Regular = function SvgSquareMultipleOverlapEye20Regular(_a, ref) {
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
    d: "M6 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8q0 .087-.007.171c-.3-.225-.632-.43-.993-.604V4a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v1H6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 8v3.021q-.524.046-1 .176V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.42c.184.348.421.687.694 1H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2m2 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 12c-2.764 0-4.5 2.318-4.5 3.5 0 1.2 1.739 3.5 4.5 3.5s4.5-2.318 4.5-3.5c0-1.2-1.739-3.5-4.5-3.5m0 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSquareMultipleOverlapEye20Regular);

export { ForwardRef as default };
