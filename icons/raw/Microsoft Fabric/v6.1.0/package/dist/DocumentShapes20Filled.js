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
var SvgDocumentShapes20Filled = function SvgDocumentShapes20Filled(_a, ref) {
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
    d: "M9.024 11.043 10.731 14H7.317z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 6.501v-4.5H5.5a1.5 1.5 0 0 0-1.5 1.5v13a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5v-8.5h-4.5a1.5 1.5 0 0 1-1.5-1.5M11.63 15l-.032.001H6.402a.5.5 0 0 1-.433-.75l2.598-4.5a.5.5 0 0 1 .447-.25.5.5 0 0 1 .468.249l2.598 4.5a.5.5 0 0 1-.433.75h-.018Zm1.065-1.685-.506-.877a1.25 1.25 0 1 0-1.224-2.12l-.506-.876a2.25 2.25 0 1 1 2.236 3.872Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 2.251v4.25a.5.5 0 0 0 .5.5h4.25z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDocumentShapes20Filled);

export { ForwardRef as default };
