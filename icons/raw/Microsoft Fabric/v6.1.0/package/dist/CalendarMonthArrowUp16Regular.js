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
var SvgCalendarMonthArrowUp16Regular = function SvgCalendarMonthArrowUp16Regular(_a, ref) {
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
    d: "M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v2.1a5.5 5.5 0 0 0-1-.393V4.5A1.5 1.5 0 0 0 11.5 3h-7A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h1.707q.148.524.393 1H4.5A2.5 2.5 0 0 1 2 11.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 6.022a5.6 5.6 0 0 0-1.98.18A1 1 0 1 1 12 6v.021ZM5 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2m4-3a1 1 0 1 0-2 0 1 1 0 0 0 2 0m7 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-4.854-2.353-2 2a.5.5 0 0 0 .708.707L11 10.707V13.5a.5.5 0 0 0 1 0v-2.793l1.146 1.147a.5.5 0 0 0 .708-.708l-2-2A.5.5 0 0 0 11.503 9h-.006a.5.5 0 0 0-.348.144z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgCalendarMonthArrowUp16Regular);

export { ForwardRef as default };
