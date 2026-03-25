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
var SvgWindowRelationshipOff20Filled = function SvgWindowRelationshipOff20Filled(_a, ref) {
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
    d: "m14.648 15.354 2.5 2.5a.5.5 0 1 0 .707-.707l-15-15a.5.5 0 0 0-.708.707L13.794 14.5H10V13H2v3.5A1.5 1.5 0 0 0 3.5 18h5a1.5 1.5 0 0 0 1.5-1.5v-1h4c.232 0 .45-.053.647-.146ZM15.501 10v3.379l-1-1V10h-2a1.5 1.5 0 0 1-.446-.068l-.986-.986A1.5 1.5 0 0 1 11 8.5V5h8v3.5a1.5 1.5 0 0 1-1.5 1.5zm-4.5-6.5a1.5 1.5 0 0 1 1.5-1.5h5a1.5 1.5 0 0 1 1.5 1.5V4h-8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.001 11.5a1.5 1.5 0 0 1 1.5-1.5h5a1.5 1.5 0 0 1 1.5 1.5v.5h-8z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgWindowRelationshipOff20Filled);

export { ForwardRef as default };
