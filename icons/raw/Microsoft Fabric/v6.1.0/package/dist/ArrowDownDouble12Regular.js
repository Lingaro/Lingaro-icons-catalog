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
var SvgArrowDownDouble12Regular = function SvgArrowDownDouble12Regular(_a, ref) {
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
    d: "M9.854 8.854a.5.5 0 0 0-.708-.708L9 8.293V2.5a.5.5 0 0 0-1 0v5.793l-.146-.147a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0zm-5 0a.5.5 0 1 0-.708-.708L4 8.293V2.5a.5.5 0 0 0-1 0v5.793l-.146-.147a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgArrowDownDouble12Regular);

export { ForwardRef as default };
