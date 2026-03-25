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
var SvgPartitionHint16Filled = function SvgPartitionHint16Filled(_a, ref) {
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
    d: "M2 2.75C2 1.784 2.784 1 3.75 1h8.5c.966 0 1.75.784 1.75 1.75v1.5A1.75 1.75 0 0 1 12.25 6h-8.5A1.75 1.75 0 0 1 2 4.25zM3.75 9a.75.75 0 0 0-.75.75v.75a.5.5 0 0 1-1 0v-.75C2 8.784 2.784 8 3.75 8h.75a.5.5 0 0 1 0 1zm8.5 5a.75.75 0 0 0 .75-.75v-.75a.5.5 0 0 1 1 0v.75A1.75 1.75 0 0 1 12.25 15h-.75a.5.5 0 0 1 0-1zm0-5a.75.75 0 0 1 .75.75v.75a.5.5 0 0 0 1 0v-.75A1.75 1.75 0 0 0 12.25 8h-.75a.5.5 0 0 0 0 1zm-8.5 5a.75.75 0 0 1-.75-.75v-.75a.5.5 0 0 0-1 0v.75c0 .966.784 1.75 1.75 1.75h.75a.5.5 0 0 0 0-1zM9 9H7a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1m0 6H7a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgPartitionHint16Filled);

export { ForwardRef as default };
