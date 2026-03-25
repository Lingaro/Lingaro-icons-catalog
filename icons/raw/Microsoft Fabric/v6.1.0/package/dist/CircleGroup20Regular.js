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
var SvgCircleGroup20Regular = function SvgCircleGroup20Regular(_a, ref) {
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
    d: "M12.97 3.57a8 8 0 0 1 5.028 7.6 3.001 3.001 0 1 1-2.359 5.504A7.98 7.98 0 0 1 10 19c-2.2 0-4.193-.888-5.64-2.326a3 3 0 1 1-2.359-5.504 8 8 0 0 1 5.029-7.6 3 3 0 0 1 5.94 0M5.171 16.068A3 3 0 0 0 3 11c0-2.82 1.667-5.25 4.069-6.359a3.001 3.001 0 0 0 5.862 0A7 7 0 0 1 17 11a3 3 0 0 0-2.172 5.069A6.98 6.98 0 0 1 10 18a6.98 6.98 0 0 1-4.828-1.931ZM12 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0M5 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0m12 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgCircleGroup20Regular);

export { ForwardRef as default };
