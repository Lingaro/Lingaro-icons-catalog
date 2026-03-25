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
var SvgMyLocationRadar20Filled = function SvgMyLocationRadar20Filled(_a, ref) {
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
    d: "M5.5 10a4.5 4.5 0 0 0 4.445 4.5c0 1.045.292 2.022.798 2.854a.75.75 0 0 1-1.493-.104v-1.296a6 6 0 0 1-5.204-5.204H2.75a.75.75 0 0 1 0-1.5h1.296A6 6 0 0 1 9.25 4.046V2.75a.75.75 0 0 1 1.5 0v1.296a6 6 0 0 1 5.17 4.974 5.6 5.6 0 0 0-1.51.077A4.502 4.502 0 0 0 5.5 10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m10 13 .153-.004a5.51 5.51 0 0 1 2.819-3.41A3 3 0 1 0 10 13"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 11a3.5 3.5 0 1 0 2.684 5.747l.71.709a4.5 4.5 0 1 1-1.517-7.047q-.214.105-.393.282l-.032.033-.371.446A3.5 3.5 0 0 0 15.5 11"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.398 11.399a.5.5 0 0 1 0 .707l-1.932 2.324a1 1 0 1 1-.707-.707l1.932-2.325a.5.5 0 0 1 .707 0Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgMyLocationRadar20Filled);

export { ForwardRef as default };
