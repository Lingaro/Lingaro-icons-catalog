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
var SvgDatabaseStackAsterisk16Filled = function SvgDatabaseStackAsterisk16Filled(_a, ref) {
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
    d: "M12.496.997a.5.5 0 0 1 .5.5v2.467l2.349-.763a.5.5 0 1 1 .309.951l-2.348.763 1.45 1.996a.5.5 0 0 1-.809.588l-1.45-1.995-1.449 1.995a.5.5 0 1 1-.809-.588l1.451-1.997-2.344-.762a.5.5 0 1 1 .309-.951l2.341.76V1.498a.5.5 0 0 1 .5-.5ZM9.53 1.12A10 10 0 0 0 8 1C5.239 1 3 2.119 3 3.5S5.239 6 8 6l.255-.003A4.5 4.5 0 0 1 8 4.5a4.5 4.5 0 0 1 1.53-3.38m-.788 5.856Q8.378 7 8 7c-2.136 0-3.943-.587-5-1.513V8c0 1.355 2.29 2.5 5 2.5 2.004 0 3.779-.626 4.567-1.5H12.5a4.5 4.5 0 0 1-3.758-2.024"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 9.959V12.5C3 13.925 5.149 15 8 15s5-1.075 5-2.5V9.959c-1.066.936-2.889 1.541-5 1.541s-3.934-.606-5-1.541"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabaseStackAsterisk16Filled);

export { ForwardRef as default };
