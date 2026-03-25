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
var SvgWindowRelationship20Filled = function SvgWindowRelationship20Filled(_a, ref) {
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
    d: "M12.5 2A1.5 1.5 0 0 0 11 3.5V4h8v-.5A1.5 1.5 0 0 0 17.5 2zM11 8.5V5h8v3.5a1.5 1.5 0 0 1-1.5 1.5h-2v4a1.5 1.5 0 0 1-1.5 1.5h-4v1A1.5 1.5 0 0 1 8.5 18h-5A1.5 1.5 0 0 1 2 16.5V13h8v1.5h4a.5.5 0 0 0 .5-.5v-4h-2A1.5 1.5 0 0 1 11 8.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 11.5A1.5 1.5 0 0 1 3.5 10h5a1.5 1.5 0 0 1 1.5 1.5v.5H2z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgWindowRelationship20Filled);

export { ForwardRef as default };
