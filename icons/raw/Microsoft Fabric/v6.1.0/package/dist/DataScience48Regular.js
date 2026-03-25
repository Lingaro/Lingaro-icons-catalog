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
var SvgDataScience48Regular = function SvgDataScience48Regular(_a, ref) {
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
    d: "M38.5 9.8h-.02L25.54 4.36C25.01 4.13 24.42 4 23.8 4s-1.18.13-1.67.32h-.02L9.83 9.31c-.91.37-1.52 1.24-1.56 2.23-.02.43.1.85.29 1.22l7.45 12.04-7.03 7.46-.06.07c-1.32 1.62-1.23 4.06.31 5.56q.51.495 1.14.78l.04.02 12.91 5.23c.43.1.87.08 1.26-.08l13.54-6.12c.15-.07.29-.16.41-.28.6-.57.65-1.56.12-2.21l-5.87-7.08 7.52-12.53c.37-.64.56-1.36.56-2.09 0-1.56-.88-3.06-2.37-3.72zm-.34 4.54L31.1 26.11l-8.82 14.71-10.88-4.43c-.15-.07-.28-.16-.4-.28-.59-.57-.65-1.55-.12-2.2l12.19-12.96c.34-.41.53-.94.53-1.53 0-.94-.52-1.71-1.25-2.12l-11.58-5.68.92-.37 11.34-4.6c.24-.09.5-.15.77-.15s.53.06.77.16l12.92 5.42c.53.23.89.79.89 1.44 0 .3-.08.58-.22.81z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataScience48Regular);

export { ForwardRef as default };
