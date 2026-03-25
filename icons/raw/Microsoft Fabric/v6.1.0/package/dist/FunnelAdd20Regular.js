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
var SvgFunnelAdd20Regular = function SvgFunnelAdd20Regular(_a, ref) {
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
    fill: "currentColor",
    d: "M11.2 10.518c-.133.31-.2.645-.2.984v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4a2.53 2.53 0 0 0-.773-1.812l-5.07-4.83A.47.47 0 0 1 3 4.495a.46.46 0 0 1 .148-.351.5.5 0 0 1 .352-.141h5.715q.15-.52.4-1H3.5a1.5 1.5 0 0 0-1.386.917A1.5 1.5 0 0 0 2 4.502a1.44 1.44 0 0 0 .47 1.086l5.061 4.828q.11.108.2.234a1.4 1.4 0 0 1 .27.852v4a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-4a1.4 1.4 0 0 1 .272-.852c.023-.032.052-.06.077-.091a5.5 5.5 0 0 1-.9-.484 2.5 2.5 0 0 0-.25.443m7.711-5.894a4.5 4.5 0 1 0-.257 2.6 4.5 4.5 0 0 0 .26-2.6zm-2.06 1.232a.5.5 0 0 1-.35.146H15v1.5a.5.5 0 0 1-1 0v-1.5h-1.5a.5.5 0 0 1 0-1H14v-1.5a.5.5 0 0 1 1 0v1.5h1.5a.5.5 0 0 1 .353.854z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgFunnelAdd20Regular);

export { ForwardRef as default };
