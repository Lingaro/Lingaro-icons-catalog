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
var SvgTableTextCdc20Regular = function SvgTableTextCdc20Regular(_a, ref) {
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
    clipPath: "url(#i1aaf7f-a)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9a2.5 2.5 0 0 0 2.2 2.482A3 3 0 0 1 5.035 16v-.073A1.5 1.5 0 0 1 4 14.5V13h1.206a3 3 0 0 1 .593-1H4V8h3v3.184A3 3 0 0 1 8 11V8h4v3h1V8h3v3.796a3 3 0 0 1 1-.612zM12 7H8V4h4zm1-3h1.5l.145.007A1.5 1.5 0 0 1 16 5.5V7h-3zM4 7V5.5l.007-.144A1.5 1.5 0 0 1 5.5 4H7v3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.035 14a1 1 0 0 1 2 0 .5.5 0 0 0 1 0 2 2 0 0 0-4 0v2a2 2 0 0 0 4 0 .5.5 0 0 0-1 0 1 1 0 0 1-2 0zm10 0a1 1 0 0 1 2 0 .5.5 0 1 0 1 0 2 2 0 0 0-4 0v2a2 2 0 0 0 4 0 .5.5 0 0 0-1 0 1 1 0 0 1-2 0zm-6-1.5a.5.5 0 0 1 .5-.5h1.5a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1.5a.5.5 0 0 1-.5-.5zm1 .5v4h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "i1aaf7f-a"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0h20v20H0z"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTableTextCdc20Regular);

export { ForwardRef as default };
