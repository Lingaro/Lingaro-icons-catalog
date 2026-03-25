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
var SvgNodesTriangleConnectedTop20Filled = function SvgNodesTriangleConnectedTop20Filled(_a, ref) {
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
    d: "M4 6.5a2 2 0 0 0 1.732-1h8.536A2 2 0 0 0 18 4.5a2 2 0 0 0-3.937-.5H5.937A2 2 0 1 0 4 6.5M10 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.165 7.028a.75.75 0 1 0-1.33.694l1 1.917a.75.75 0 0 0 1.33-.694zm9 .694a.75.75 0 1 0-1.33-.694l-1 1.917a.75.75 0 1 0 1.33.694zm-7 3.139a.75.75 0 0 0-1.33.694l1 1.917a.75.75 0 1 0 1.33-.694zm5 .694a.75.75 0 1 0-1.33-.694l-1 1.917a.75.75 0 1 0 1.33.694z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgNodesTriangleConnectedTop20Filled);

export { ForwardRef as default };
