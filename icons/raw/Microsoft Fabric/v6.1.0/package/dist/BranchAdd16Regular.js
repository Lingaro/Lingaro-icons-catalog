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
var SvgBranchAdd16Regular = function SvgBranchAdd16Regular(_a, ref) {
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
    d: "M4.453 1a2.5 2.5 0 0 1 .628 4.931c.161.431.554.838 1.092 1.175q-.301.383-.532.815a7 7 0 0 1-.64-.455v2.584l.018.005a5.6 5.6 0 0 0 .014 1.044 1.503 1.503 0 0 0-1.918.827 1.5 1.5 0 0 0 2.632 1.408l.02-.033q.268.45.614.841a2.5 2.5 0 1 1-2.38-4.092v-4.1a2.501 2.501 0 0 1-1.205-4.281A2.5 2.5 0 0 1 4.453 1m.34 1.029a1.5 1.5 0 1 0-.586 2.943 1.5 1.5 0 0 0 .585-2.943Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 6a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 2a.5.5 0 0 0-.5.5V10H8.5a.5.5 0 0 0 0 1H10v1.5a.5.5 0 1 0 1 0V11h1.5a.5.5 0 0 0 0-1H11V8.5a.5.5 0 0 0-.5-.5"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBranchAdd16Regular);

export { ForwardRef as default };
