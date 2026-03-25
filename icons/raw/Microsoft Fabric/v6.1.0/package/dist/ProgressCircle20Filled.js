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
var SvgProgressCircle20Filled = function SvgProgressCircle20Filled(_a, ref) {
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
    d: "M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16m-.354 11.854A.5.5 0 0 0 10 14a4 4 0 1 0 0-8 .5.5 0 1 0 0 1 3 3 0 0 1 0 6 .5.5 0 0 0-.354.854m-2.21-.783a.5.5 0 0 0 .32.117v.003a.5.5 0 0 0 .323-.884 3 3 0 0 1-.94-1.407.5.5 0 0 0-.954.3c.23.73.664 1.38 1.252 1.87Zm-.785-3.584a.5.5 0 0 0 .478-.355l.035-.108a3 3 0 0 1 .89-1.307.5.5 0 1 0-.648-.761A4 4 0 0 0 6.218 8.7l-.046.143a.5.5 0 0 0 .479.644"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgProgressCircle20Filled);

export { ForwardRef as default };
