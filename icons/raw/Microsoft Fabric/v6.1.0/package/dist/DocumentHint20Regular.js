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
var SvgDocumentHint20Regular = function SvgDocumentHint20Regular(_a, ref) {
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
    d: "M10 6.501v-3.5h-.5a.5.5 0 0 1 0-1h1.104a1.5 1.5 0 0 1 1.042.44l3.915 3.914A1.5 1.5 0 0 1 16 7.415v2.086a.5.5 0 0 1-1 0v-1.5h-3.5a1.5 1.5 0 0 1-1.5-1.5m1-3.293v3.293a.5.5 0 0 0 .5.5h3.293zm-6.5 8.293a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m11.5.5a.5.5 0 1 0-1 0v1a.5.5 0 0 0 1 0zm-11.5 3a.5.5 0 0 1 .5.5v.5a1 1 0 0 0 1 1h.5a.5.5 0 1 1 0 1H6a2 2 0 0 1-2-2v-.5a.5.5 0 0 1 .5-.5m11.5.5a.5.5 0 1 0-1 0v.5a1 1 0 0 1-1 1h-.5a.5.5 0 1 0 0 1h.5a2 2 0 0 0 2-2zm-7.5 2a.5.5 0 0 1 .5-.5h2a.5.5 0 1 1 0 1H9a.5.5 0 0 1-.5-.5m-4-12.5a.5.5 0 0 1-.5-.5v-.5a2 2 0 0 1 2-2h.5a.5.5 0 1 1 0 1H6a1 1 0 0 0-1 1v.5a.5.5 0 0 1-.5.5m0 5a.5.5 0 0 1-.5-.5v-2a.5.5 0 1 1 1 0v2a.5.5 0 0 1-.5.5"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDocumentHint20Regular);

export { ForwardRef as default };
