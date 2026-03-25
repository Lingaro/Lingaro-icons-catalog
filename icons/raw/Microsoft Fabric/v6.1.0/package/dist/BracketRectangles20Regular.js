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
var SvgBracketRectangles20Regular = function SvgBracketRectangles20Regular(_a, ref) {
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
    d: "M2.586 4.586A2 2 0 0 0 2 6v8a2 2 0 0 0 2 2h1.5a.5.5 0 0 0 0-1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.5a.5.5 0 1 0 0-1H4a2 2 0 0 0-1.414.586m4.854.854A1.5 1.5 0 0 0 7 6.5v1A1.5 1.5 0 0 0 8.5 9h8A1.5 1.5 0 0 0 18 7.5v-1A1.5 1.5 0 0 0 16.5 5h-8a1.5 1.5 0 0 0-1.06.44m.706.706A.5.5 0 0 1 8.5 6h8a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .146-.354M7.44 11.44A1.5 1.5 0 0 1 8.5 11h8a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 7 13.5v-1c0-.398.158-.78.44-1.06m.706.706A.5.5 0 0 0 8 12.5v1a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.354.146"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBracketRectangles20Regular);

export { ForwardRef as default };
