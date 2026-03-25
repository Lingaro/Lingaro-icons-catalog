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
var SvgDiagramBranch20Regular = function SvgDiagramBranch20Regular(_a, ref) {
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
    d: "M12.875 3C13.496 3 14 3.504 14 4.125v2.75C14 7.496 13.496 8 12.875 8h-.993l2.4 4h1.593c.621 0 1.125.504 1.125 1.125v2.75c0 .621-.504 1.125-1.125 1.125h-3.75A1.125 1.125 0 0 1 11 15.875v-2.75c0-.621.504-1.125 1.125-1.125h.991l-2.4-4H9.282l-2.4 4h.993C8.496 12 9 12.504 9 13.125v2.75C9 16.496 8.496 17 7.875 17h-3.75A1.125 1.125 0 0 1 3 15.875v-2.75C3 12.504 3.504 12 4.125 12h1.59l2.4-4h-.99A1.125 1.125 0 0 1 6 6.875v-2.75C6 3.504 6.504 3 7.125 3zM13 4.125A.125.125 0 0 0 12.875 4h-5.75A.125.125 0 0 0 7 4.125v2.75c0 .069.056.125.125.125h5.75A.125.125 0 0 0 13 6.875zm-5 9A.125.125 0 0 0 7.875 13h-3.75a.125.125 0 0 0-.125.125v2.75c0 .069.056.125.125.125h3.75A.125.125 0 0 0 8 15.875zM15.875 13h-3.75a.125.125 0 0 0-.125.125v2.75c0 .069.056.125.125.125h3.75a.125.125 0 0 0 .125-.125v-2.75a.125.125 0 0 0-.125-.125"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDiagramBranch20Regular);

export { ForwardRef as default };
