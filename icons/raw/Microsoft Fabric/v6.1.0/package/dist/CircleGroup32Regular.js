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
var SvgCircleGroup32Regular = function SvgCircleGroup32Regular(_a, ref) {
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
    d: "M20.91 6.047a5.002 5.002 0 0 0-9.82 0C6.912 7.923 4 12.122 4 17q0 .967.148 1.892a5 5 0 0 0 5.547 8.32A11.94 11.94 0 0 0 16 29a11.94 11.94 0 0 0 6.305-1.788 5 5 0 0 0 5.547-8.32q.147-.925.148-1.892c0-4.878-2.911-9.077-7.09-10.953M13 7a3 3 0 1 1 6 0 3 3 0 0 1-6 0m-1.843 1.249a5.002 5.002 0 0 0 9.686 0 10 10 0 0 1 5.099 9.84 5 5 0 0 0-5.112 7.67A9.95 9.95 0 0 1 16 27a9.95 9.95 0 0 1-4.83-1.241 5 5 0 0 0-5.112-7.67 10 10 0 0 1 5.099-9.84M4 23a3 3 0 1 1 6 0 3 3 0 0 1-6 0m21-3a3 3 0 1 1 0 6 3 3 0 0 1 0-6"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgCircleGroup32Regular);

export { ForwardRef as default };
