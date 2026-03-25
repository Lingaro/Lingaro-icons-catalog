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
var SvgBranchEdit16Regular = function SvgBranchEdit16Regular(_a, ref) {
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
    d: "M11.809 6.547a1.871 1.871 0 0 1 2.646 2.646l-4.83 4.83a2.2 2.2 0 0 1-1.021.577l-1.498.374a.89.89 0 0 1-1.078-1.078l.374-1.498c.096-.386.296-.739.578-1.02l4.829-4.83Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.453 1a2.5 2.5 0 0 1 .628 4.931c.38 1.016 2.038 1.898 3.884 2.045l-.894.895A7 7 0 0 1 5 7.466v2.584a2.5 2.5 0 0 1 1.238.656c-.24.246-.437.529-.585.836a1.501 1.501 0 0 0-2.625 1.251 1.5 1.5 0 0 0 1.982 1.116c-.04.356.025.697.165.997A2.5 2.5 0 1 1 4 10.05v-4.1a2.501 2.501 0 0 1-1.204-4.281A2.5 2.5 0 0 1 4.453 1m.34 1.029a1.5 1.5 0 1 0-.586 2.943 1.5 1.5 0 0 0 .585-2.943Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBranchEdit16Regular);

export { ForwardRef as default };
