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
var SvgWindowTree20Regular = function SvgWindowTree20Regular(_a, ref) {
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
    clipPath: "url(#i1a9ed8-a)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12.501 0a1.5 1.5 0 0 0-1.5 1.5V2h-5.5a1.5 1.5 0 0 0-1.5 1.5V6h-2.5a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 1.5 1.5h2.5v2.5a1.5 1.5 0 0 0 1.5 1.5h5.5v.5a1.5 1.5 0 0 0 1.5 1.5h5a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-1.5-1.5h-5a1.5 1.5 0 0 0-1.5 1.5V17h-5.5a.5.5 0 0 1-.5-.5V14h1.5a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-1.5-1.5h-1.5V3.5a.5.5 0 0 1 .5-.5h5.5v3.5a1.5 1.5 0 0 0 1.5 1.5h5a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-1.5-1.5zm-.5 3h6v3.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5zm6-1h-6v-.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5zm-6 16.5V15h6v3.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5m0-4.5v-.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v.5zm-11-5h6v3.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5zm6-1h-6v-.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "i1a9ed8-a"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0h20v20H0z"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgWindowTree20Regular);

export { ForwardRef as default };
