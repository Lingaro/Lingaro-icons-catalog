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
var SvgSquareMultipleOverlapLine28Regular = function SvgSquareMultipleOverlapLine28Regular(_a, ref) {
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
    d: "M7.75 16a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 4.75A2.75 2.75 0 0 1 10.75 2h11.5A2.75 2.75 0 0 1 25 4.75v11.5A2.75 2.75 0 0 1 22.25 19H20v4.25A2.75 2.75 0 0 1 17.25 26H5.75A2.75 2.75 0 0 1 3 23.25v-11.5A2.75 2.75 0 0 1 5.75 9H8zM22.25 17.5c.69 0 1.25-.56 1.25-1.25V4.75c0-.69-.56-1.25-1.25-1.25h-11.5c-.69 0-1.25.56-1.25 1.25V9h7.75A2.75 2.75 0 0 1 20 11.75v5.75zm-16.5-7c-.69 0-1.25.56-1.25 1.25v11.5c0 .69.56 1.25 1.25 1.25h11.5c.69 0 1.25-.56 1.25-1.25v-11.5c0-.69-.56-1.25-1.25-1.25z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSquareMultipleOverlapLine28Regular);

export { ForwardRef as default };
