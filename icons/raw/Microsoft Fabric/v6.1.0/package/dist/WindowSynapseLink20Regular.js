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
var SvgWindowSynapseLink20Regular = function SvgWindowSynapseLink20Regular(_a, ref) {
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
    clipPath: "url(#ieabff5-a)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3.001 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3.467a4.5 4.5 0 0 0-1-.356V7h-12v7a2 2 0 0 0 2 2h5.53c.057.279.193.544.41.76q.125.126.26.24H6a3 3 0 0 1-3-3zm3-2a2 2 0 0 0-2 2h12a2 2 0 0 0-2-2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.558 11.429c.447-.268.858-.429 1.443-.429 1.335 0 2.5 1.087 2.5 2.5 0 1.424-1.076 2.5-2.5 2.5-.672 0-1.243-.25-1.646-.654a.5.5 0 0 0-.708.708c.597.596 1.426.946 2.354.946 1.806 0 3.234-1.273 3.467-3H19.5a.5.5 0 0 0 0-1h-1.034c-.247-1.735-1.76-3-3.465-3-.815 0-1.403.239-1.957.571a.5.5 0 1 0 .514.858"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.001 14.75a1.25 1.25 0 0 1-1.146-.75h-3.354a.5.5 0 1 1 0-1h3.354a1.25 1.25 0 1 1 1.146 1.75"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "ieabff5-a"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0h20v20H0z"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgWindowSynapseLink20Regular);

export { ForwardRef as default };
