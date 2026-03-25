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
var SvgHexagonThreeRotated16Regular = function SvgHexagonThreeRotated16Regular(_a, ref) {
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
    d: "M2 12.162a1 1 0 0 0 .498.865l2 1.16a1 1 0 0 0 1.004 0l2-1.16A1 1 0 0 0 8 12.162V9.838a1 1 0 0 0-.498-.865l-2-1.16a1 1 0 0 0-1.004 0l-2 1.16A1 1 0 0 0 2 9.838zm1 0V9.838l2-1.16 2 1.16v2.324l-2 1.16zm6 0a1 1 0 0 0 .498.865l2 1.16a1 1 0 0 0 1.004 0l2-1.16a1 1 0 0 0 .498-.865V9.838a1 1 0 0 0-.498-.865l-2-1.16a1 1 0 0 0-1.004 0l-2 1.16A1 1 0 0 0 9 9.838zm1 0V9.838l2-1.16 2 1.16v2.324l-2 1.16zM5.998 7.027a1 1 0 0 1-.498-.865V3.838a1 1 0 0 1 .498-.865l2-1.16a1 1 0 0 1 1.004 0l2 1.16a1 1 0 0 1 .498.865v2.324a1 1 0 0 1-.498.865l-2 1.16a1 1 0 0 1-1.004 0zM6.5 3.838v2.324l2 1.16 2-1.16V3.838l-2-1.16z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgHexagonThreeRotated16Regular);

export { ForwardRef as default };
