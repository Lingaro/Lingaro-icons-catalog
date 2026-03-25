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
var SvgBorderNoneEye20Regular = function SvgBorderNoneEye20Regular(_a, ref) {
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
    d: "M8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM4.053 5.54A2 2 0 0 1 5.54 4.052a.51.51 0 0 0 .462-.6.51.51 0 0 0-.663-.38 3 3 0 0 0-2.265 2.265.51.51 0 0 0 .38.663.51.51 0 0 0 .6-.462ZM5.54 15.947a2 2 0 0 1-1.487-1.486.51.51 0 0 0-.6-.463.51.51 0 0 0-.38.664 3 3 0 0 0 2.265 2.265.505.505 0 1 0 .201-.98Zm9.122-12.874a.51.51 0 0 0-.663.38.51.51 0 0 0 .462.6 2 2 0 0 1 1.486 1.486.507.507 0 0 0 .6.463.51.51 0 0 0 .38-.664 3 3 0 0 0-2.265-2.265m2.334 8.492a5.7 5.7 0 0 0-.996-.37V8.5a.5.5 0 0 1 1 0v3a1 1 0 0 1-.004.065M9.052 16c.066.331.193.67.368 1H8.5a.5.5 0 0 1 0-1zM3.5 12a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5M16 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 12c-2.764 0-4.5 2.318-4.5 3.5 0 1.2 1.739 3.5 4.5 3.5s4.5-2.318 4.5-3.5c0-1.2-1.739-3.5-4.5-3.5m0 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBorderNoneEye20Regular);

export { ForwardRef as default };
