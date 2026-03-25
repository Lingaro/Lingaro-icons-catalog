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
var SvgPartitionHint32Regular = function SvgPartitionHint32Regular(_a, ref) {
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
    d: "M7.5 2A3.5 3.5 0 0 0 4 5.5v4A3.5 3.5 0 0 0 7.5 13h17A3.5 3.5 0 0 0 28 9.5v-4A3.5 3.5 0 0 0 24.5 2zM6 5.5A1.5 1.5 0 0 1 7.5 4h17A1.5 1.5 0 0 1 26 5.5v4a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 6 9.5zm0 14A1.5 1.5 0 0 1 7.5 18H9a1 1 0 1 0 0-2H7.5A3.5 3.5 0 0 0 4 19.5V21a1 1 0 1 0 2 0zM23 16a1 1 0 1 0 0 2h1.5a1.5 1.5 0 0 1 1.5 1.5V21a1 1 0 1 0 2 0v-1.5a3.5 3.5 0 0 0-3.5-3.5zM6 25a1 1 0 1 0-2 0v1.5A3.5 3.5 0 0 0 7.5 30H9a1 1 0 1 0 0-2H7.5A1.5 1.5 0 0 1 6 26.5zm22 0a1 1 0 1 0-2 0v1.5a1.5 1.5 0 0 1-1.5 1.5H23a1 1 0 1 0 0 2h1.5a3.5 3.5 0 0 0 3.5-3.5zm-14.875-8a1 1 0 0 1 1-1h4.125a1 1 0 1 1 0 2h-4.125a1 1 0 0 1-1-1m1 11a1 1 0 1 0 0 2h4.125a1 1 0 1 0 0-2z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgPartitionHint32Regular);

export { ForwardRef as default };
