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
var SvgTableLightningLink20Regular = function SvgTableLightningLink20Regular(_a, ref) {
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
    d: "M3.2 3a2.5 2.5 0 0 0 0 5h.5a.5.5 0 1 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 1 0 0-1zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 1 1 0 3h-.5a.5.5 0 0 0 0 1h.5a2.5 2.5 0 1 0 0-5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.7 5.5a.5.5 0 0 1 .5-.5h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.7 14.5V8.965Q2.945 9 3.2 9h.5v3h3V9h.5q.255 0 .5-.035V12h4V8H9.65a3.5 3.5 0 0 0 .713-1H11.7V4h-1.337a3.5 3.5 0 0 0-.714-1h4.55a2.5 2.5 0 0 1 2.5 2.5V9h-1V8h-3v2.404L11.619 13H7.7v3h3.086c.203.567.74 1 1.415 1H5.2a2.5 2.5 0 0 1-2.5-2.5m1 0a1.5 1.5 0 0 0 1.355 1.493L5.2 16h1.5v-3h-3zm9-10.5v3h3V5.5a1.5 1.5 0 0 0-1.356-1.493L14.2 4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.952 16h-1.75a.5.5 0 0 1-.462-.692l2.083-5a.5.5 0 0 1 .462-.308h3.473a.5.5 0 0 1 .474.658L17.452 13h1.097a.75.75 0 0 1 .512 1.298l-4.873 4.548c-.364.34-.947-.004-.826-.487z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTableLightningLink20Regular);

export { ForwardRef as default };
