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
var SvgBinoculars24Regular = function SvgBinoculars24Regular(_a, ref) {
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
    d: "M6.5 21a4.5 4.5 0 0 0 4.5-4.5V12h2v4.53a4.5 4.5 0 0 0 9-.03v-.436q0-.137-.026-.272L20.02 5.894A3.59 3.59 0 0 0 16.5 3 3.5 3.5 0 0 0 13 6.5V8h-2V6.5A3.5 3.5 0 0 0 7.5 3a3.42 3.42 0 0 0-3.348 2.716L2.03 15.779q-.03.143-.03.289v.432A4.5 4.5 0 0 0 6.5 21m1-16.5a2 2 0 0 1 2 2v6.646A4.48 4.48 0 0 0 6.5 12a4.5 4.5 0 0 0-2.27.613l1.39-6.588A1.92 1.92 0 0 1 7.5 4.5m-1 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6m10-15a2.09 2.09 0 0 1 2.05 1.684l1.274 6.462A4.5 4.5 0 0 0 17.5 12a4.48 4.48 0 0 0-3 1.146V6.5a2 2 0 0 1 2-2m1 9a3 3 0 0 1 3 3v.02a3 3 0 1 1-3-3.02"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBinoculars24Regular);

export { ForwardRef as default };
