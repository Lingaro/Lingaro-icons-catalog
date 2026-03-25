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
var SvgPowerBi16Regular = function SvgPowerBi16Regular(_a, ref) {
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
    fillRule: "evenodd",
    d: "M12.5 15a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 12.5 1h-3A1.5 1.5 0 0 0 8 2.5V4H6.5A1.5 1.5 0 0 0 5 5.5V7H3.5A1.5 1.5 0 0 0 2 8.5v5A1.5 1.5 0 0 0 3.5 15zm0-13a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5H11V5.5A1.5 1.5 0 0 0 9.5 4H9V2.5a.5.5 0 0 1 .5-.5zM8 14h2V5.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V7h.5A1.5 1.5 0 0 1 8 8.5zM3 8.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V14H3.5a.5.5 0 0 1-.5-.5z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgPowerBi16Regular);

export { ForwardRef as default };
