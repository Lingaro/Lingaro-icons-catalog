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
var SvgBookOpenDataCloud12Filled = function SvgBookOpenDataCloud12Filled(_a, ref) {
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
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#i60c7d5-a)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 2.5C0 1.534.784.75 1.75.75h2c.788 0 1.499.331 2 .863a2.74 2.74 0 0 1 2-.863h2c.966 0 1.75.784 1.75 1.75v6a1.75 1.75 0 0 1-1.75 1.75H7.311l-.061.002a.69.69 0 0 0-.506.238 1 1 0 0 0-.244.662.75.75 0 1 1-1.5 0 1 1 0 0 0-.244-.662.69.69 0 0 0-.506-.238q-.03 0-.061-.002H1.75A1.75 1.75 0 0 1 0 8.5zm5 6.25V3.5c0-.69-.56-1.25-1.25-1.25h-2a.25.25 0 0 0-.25.25v6c0 .138.112.25.25.25zm1.5 0h3.25A.25.25 0 0 0 10 8.5v-6a.25.25 0 0 0-.25-.25h-2c-.69 0-1.25.56-1.25 1.25z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "i60c7d5-a"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0h12v12H0z"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBookOpenDataCloud12Filled);

export { ForwardRef as default };
