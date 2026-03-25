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
var SvgBranchEdit16Filled = function SvgBranchEdit16Filled(_a, ref) {
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
    d: "M4.445 1.003a2.5 2.5 0 0 1 2.524 2.183 2.5 2.5 0 0 1-1.897 2.746c.38 1.017 2.043 1.901 3.892 2.046l-.896.896a7 7 0 0 1-3.075-1.406v2.584c.47.097.9.327 1.24.659-.388.402-.665.9-.801 1.444l-.375 1.498c-.112.448-.055.883.12 1.254a2.5 2.5 0 1 1-1.184-4.855v-4.1a2.498 2.498 0 0 1 .452-4.95Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.809 6.547a1.871 1.871 0 0 1 2.646 2.646l-4.83 4.83a2.2 2.2 0 0 1-1.021.577l-1.498.374a.89.89 0 0 1-1.078-1.078l.374-1.498c.096-.386.296-.739.578-1.02l4.829-4.83Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBranchEdit16Filled);

export { ForwardRef as default };
