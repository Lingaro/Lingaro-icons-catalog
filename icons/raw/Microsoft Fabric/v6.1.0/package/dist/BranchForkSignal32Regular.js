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
var SvgBranchForkSignal32Regular = function SvgBranchForkSignal32Regular(_a, ref) {
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
    d: "M10 11.9A5.002 5.002 0 0 0 9 2a5 5 0 0 0-1 9.9v8.2A5.002 5.002 0 0 0 9 30a5 5 0 0 0 1-9.9V18h5.399a3 3 0 0 1-.36-2H10zM9 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6m3 15a3 3 0 1 1-6 0 3 3 0 0 1 6 0m12-12a5 5 0 0 1-.276 1.641 15 15 0 0 0-1.895-.64c.11-.313.171-.65.171-1.001v-1.1A5.002 5.002 0 0 1 23 2a5 5 0 0 1 1 9.9zm-1-3a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.96 6.032a1 1 0 0 1 1-1 13 13 0 0 1 13 13v.01c0 .15 0 .33-.012.514a1 1 0 1 1-1.996-.116c.007-.121.007-.247.007-.408a11 11 0 0 0-11-11 1 1 0 0 1-1-1Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.044 19.032a1 1 0 1 0-.01 2 7.04 7.04 0 0 1 7.005 7.076v.005c0 .147 0 .247-.008.34a1 1 0 1 0 1.994.158c.014-.18.014-.352.014-.485v-.01a9.04 9.04 0 0 0-8.995-9.084"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.04 25.032a3 3 0 0 1 2.975 3.388 1 1 0 1 0 1.983.26 5 5 0 0 0-4.96-5.648 1 1 0 0 0 .001 2Zm0 4.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBranchForkSignal32Regular);

export { ForwardRef as default };
