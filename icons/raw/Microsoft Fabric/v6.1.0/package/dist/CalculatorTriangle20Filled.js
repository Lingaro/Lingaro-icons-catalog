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
var SvgCalculatorTriangle20Filled = function SvgCalculatorTriangle20Filled(_a, ref) {
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
    d: "M13.5 2h-7A2.5 2.5 0 0 0 4 4.5v11A2.5 2.5 0 0 0 6.5 18h2.594c.006-.236.07-.476.205-.7l3.139-5.473A.999.999 0 0 1 13 10c.185 0 .358.05.506.137.284-.237.638-.337.993-.337.5 0 1 .3 1.3.7l.201.35V4.5A2.5 2.5 0 0 0 13.5 2m-6 2h5A1.5 1.5 0 0 1 14 5.5v1A1.5 1.5 0 0 1 12.5 8h-5A1.5 1.5 0 0 1 6 6.5v-1A1.5 1.5 0 0 1 7.5 4m.5 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2m1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.83 17.845h.004a.5.5 0 0 1-.433.75h-7.8a.5.5 0 0 1-.436-.75l3.9-6.75a.52.52 0 0 1 .866 0l3.9 6.75Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgCalculatorTriangle20Filled);

export { ForwardRef as default };
