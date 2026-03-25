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
var SvgPhoneDataBarVertical20Regular = function SvgPhoneDataBarVertical20Regular(_a, ref) {
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
    d: "M4.293 16.707A1 1 0 0 0 5 17h4v1H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v7.278A1.99 1.99 0 0 0 12 13V4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 .293.707M16 11a1 1 0 0 1 2 0v7a1 1 0 0 1-2 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 15a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0zm3-2a1 1 0 0 1 2 0v5a1 1 0 0 1-2 0zm-6 1a.5.5 0 0 0 0 1h2c.002-.325.085-.645.24-.93A.5.5 0 0 0 9 14z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgPhoneDataBarVertical20Regular);

export { ForwardRef as default };
