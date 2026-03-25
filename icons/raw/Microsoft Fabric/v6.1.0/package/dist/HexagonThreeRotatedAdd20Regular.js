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
var SvgHexagonThreeRotatedAdd20Regular = function SvgHexagonThreeRotatedAdd20Regular(_a, ref) {
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
    d: "M6.926 8.787a1.25 1.25 0 0 1-.625-1.083v-3.17c0-.446.238-.86.625-1.082l2.75-1.586a1.25 1.25 0 0 1 1.25 0l2.75 1.586c.386.223.625.636.625 1.082v3.17c0 .447-.239.86-.626 1.083l-.783.452a5.5 5.5 0 0 0-2.103 1.202 1.25 1.25 0 0 1-1.113-.068zm.375-1.083c0 .09.047.172.125.217l2.75 1.586a.25.25 0 0 0 .25 0l2.75-1.586a.25.25 0 0 0 .125-.217v-3.17a.25.25 0 0 0-.125-.216l-2.75-1.586a.25.25 0 0 0-.25 0l-2.75 1.586a.25.25 0 0 0-.125.216zM9 14.5c0-.978.255-1.896.702-2.691a1.25 1.25 0 0 0-.527-.597l-2.75-1.585a1.25 1.25 0 0 0-1.249 0l-2.75 1.585a1.25 1.25 0 0 0-.625 1.083v3.17c0 .447.238.86.625 1.083l2.75 1.586a1.25 1.25 0 0 0 1.25 0l2.75-1.586a1.3 1.3 0 0 0 .172-.12A5.5 5.5 0 0 1 9 14.5m-6.074 1.182a.25.25 0 0 1-.125-.217v-3.17a.25.25 0 0 1 .125-.216l2.75-1.586a.25.25 0 0 1 .25 0l2.75 1.586a.25.25 0 0 1 .125.216v3.17a.25.25 0 0 1-.125.217l-2.75 1.585a.25.25 0 0 1-.25 0zM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgHexagonThreeRotatedAdd20Regular);

export { ForwardRef as default };
