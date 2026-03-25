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
var SvgFolderOpenDataBar20Filled = function SvgFolderOpenDataBar20Filled(_a, ref) {
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
    d: "M2 5.5A2.5 2.5 0 0 1 4.5 3h2.664c.325 0 .64.105.9.3l1.6 1.2h4.832a2.5 2.5 0 0 1 2.5 2.5v.002H5.824A1.5 1.5 0 0 0 4.35 8.215l-1.577 8.09A2.5 2.5 0 0 1 2 14.498z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.773 16.407a.5.5 0 0 0 .491.595H10V15a2 2 0 0 1 3-1.732V11a2 2 0 1 1 4 0v.268q.264-.155.572-.222l.475-2.449a.5.5 0 0 0-.491-.595H5.824a.5.5 0 0 0-.491.404l-1.56 8Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 11a1 1 0 1 1 2 0v7a1 1 0 1 1-2 0zm-3 4a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0zm7-3a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-5a1 1 0 0 0-1-1"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgFolderOpenDataBar20Filled);

export { ForwardRef as default };
