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
var SvgCloudArrowUpDown20Filled = function SvgCloudArrowUpDown20Filled(_a, ref) {
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
    d: "M10 4c2.817 0 4.415 1.923 4.647 4.246h.07c1.814 0 3.283 1.512 3.283 3.377q0 .129-.01.255l-.448-.448a1.5 1.5 0 0 0-2.121 0l-1.591 1.59a1.5 1.5 0 0 0-.189.231V12.5a1.5 1.5 0 1 0-3 0v1.857A1.5 1.5 0 0 0 9.264 15H5.282C3.469 15 2 13.488 2 11.623s1.47-3.377 3.282-3.377h.071C5.587 5.908 7.183 4 10 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m18.5 13.793-1.646-1.647a.5.5 0 0 0-.708 0L14.5 13.793a.5.5 0 0 0 .707.707l.793-.793V17.5a.5.5 0 0 0 1 0v-3.793l.793.793a.5.5 0 0 0 .707-.707M13.44 15.5l-.794.793V12.5a.5.5 0 1 0-1 0v3.793l-.792-.793a.5.5 0 0 0-.708.707l1.647 1.647a.5.5 0 0 0 .707 0l1.646-1.647a.5.5 0 0 0-.707-.707Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgCloudArrowUpDown20Filled);

export { ForwardRef as default };
