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
var SvgDatabaseStackAsterisk16Regular = function SvgDatabaseStackAsterisk16Regular(_a, ref) {
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
    d: "M12.496.997a.5.5 0 0 1 .5.5v2.467l2.349-.763a.5.5 0 1 1 .309.951l-2.348.763 1.45 1.996a.5.5 0 0 1-.809.588l-1.45-1.995-1.449 1.995a.5.5 0 1 1-.809-.588l1.451-1.997-2.344-.762a.5.5 0 1 1 .309-.951l2.341.76V1.498a.5.5 0 0 1 .5-.5Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 1c.542 0 1.058.039 1.539.111a4.5 4.5 0 0 0-.8.917A10 10 0 0 0 8 2c-2.442 0-4 .888-4 1.5S5.559 5 8 5h.027q.06.525.231 1.006Q8.129 6.006 8 6a7.4 7.4 0 0 1-4-.979V8c0 .612 1.558 1.5 4 1.5 1.428 0 2.554-.304 3.242-.678a4.5 4.5 0 0 0 1.758.15V12.5c0 1.425-2.149 2.5-5 2.5s-5-1.075-5-2.5v-9C3 2.075 5.149 1 8 1m0 13c2.441 0 4-.889 4-1.5V9.537c-.897.593-2.328.963-4 .963s-3.103-.37-4-.963V12.5c0 .611 1.558 1.5 4 1.5"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabaseStackAsterisk16Regular);

export { ForwardRef as default };
