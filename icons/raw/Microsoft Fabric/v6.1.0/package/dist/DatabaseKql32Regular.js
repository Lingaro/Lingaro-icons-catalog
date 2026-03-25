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
var SvgDatabaseKql32Regular = function SvgDatabaseKql32Regular(_a, ref) {
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
    d: "M27 7c0-2.76-4.925-5-11-5S5 4.24 5 7v18c0 2.762 4.925 5 11 5 .833 0 1.645-.042 2.425-.121a3 3 0 0 1-1.529-.82 3 3 0 0 1-.685-1.06l-.211.002c-2.82 0-5.275-.524-6.95-1.286C7.192 25.872 7 25.115 7 25V9.876c1.99 1.285 5.28 2.125 9 2.125s7.01-.84 9-2.125v5.12h2zm-2 0c0 .115-.193.872-2.05 1.715-1.675.762-4.13 1.286-6.95 1.286s-5.275-.524-6.95-1.286C7.192 7.872 7 7.115 7 7s.193-.87 2.05-1.714C10.724 4.524 13.18 4 16 4s5.275.524 6.95 1.286C24.808 6.129 25 6.886 25 7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20.125 17h8.054a.805.805 0 0 1 .806.806v8.053a.806.806 0 0 1-1.375.57l-8.053-8.053A.806.806 0 0 1 20.126 17Zm-.754 6.049.707-.708a1 1 0 0 0-1.414-1.414l-.707.707a1 1 0 1 0 1.414 1.415m3.182.353a1 1 0 0 1 0 1.414l-2.829 2.828a1 1 0 0 1-1.414-1.414l2.829-2.828a1 1 0 0 1 1.414 0m2.474 2.475a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabaseKql32Regular);

export { ForwardRef as default };
