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
var SvgHomeMoreLightning20Filled = function SvgHomeMoreLightning20Filled(_a, ref) {
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
    d: "M11.002 2.384a1.5 1.5 0 0 0-2.005 0l-5.5 4.943A1.5 1.5 0 0 0 3 8.443V15.5A1.5 1.5 0 0 0 4.5 17h7.002a1.5 1.5 0 0 1-1.385-2.077l.461-1.107a1 1 0 1 1 .408-.98l1.059-2.54a1 1 0 0 1 1.218-1.262Q13.42 9 13.585 9H17v-.557a1.5 1.5 0 0 0-.497-1.116zM7 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2m4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.612 16a.5.5 0 0 1 .485.621l-.434 1.738c-.121.483.462.827.826.487l4.872-4.548A.75.75 0 0 0 17.85 13h-.404a.5.5 0 0 1-.474-.658l.561-1.684A.5.5 0 0 0 17.06 10h-3.473a.5.5 0 0 0-.462.308l-2.083 5a.5.5 0 0 0 .461.692z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgHomeMoreLightning20Filled);

export { ForwardRef as default };
