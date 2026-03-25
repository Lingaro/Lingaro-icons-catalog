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
var SvgHomeMoreLightning20Regular = function SvgHomeMoreLightning20Regular(_a, ref) {
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
    d: "M16 9v-.557a.5.5 0 0 0-.166-.372l-5.5-4.943a.5.5 0 0 0-.668 0l-5.5 4.943A.5.5 0 0 0 4 8.443V15.5a.5.5 0 0 0 .5.5h5.337c.202.567.74 1 1.415 1H4.5A1.5 1.5 0 0 1 3 15.5V8.443c0-.425.18-.831.498-1.116l5.5-4.943a1.5 1.5 0 0 1 2.005 0l5.5 4.943A1.5 1.5 0 0 1 17 8.443v.569A2 2 0 0 0 16.808 9z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m.267 2.964.605-1.454a1 1 0 1 0-.605 1.454M7 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2m5.362 2a.5.5 0 0 1 .485.621l-.434 1.738c-.121.483.462.827.826.487l4.872-4.548A.75.75 0 0 0 17.6 13h-.404a.5.5 0 0 1-.474-.658l.561-1.684A.5.5 0 0 0 16.81 10h-3.473a.5.5 0 0 0-.462.308l-2.083 5a.5.5 0 0 0 .461.692z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgHomeMoreLightning20Regular);

export { ForwardRef as default };
