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
var SvgDiagramBranchSync20Regular = function SvgDiagramBranchSync20Regular(_a, ref) {
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
    d: "M12.875 3C13.496 3 14 3.504 14 4.125v2.75C14 7.496 13.496 8 12.875 8h-.993l.787 1.312a5.6 5.6 0 0 0-.913.42L10.716 8H9.282l-2.4 4h.993C8.496 12 9 12.504 9 13.125v2.75C9 16.496 8.496 17 7.875 17h-3.75A1.125 1.125 0 0 1 3 15.875v-2.75C3 12.504 3.504 12 4.125 12h1.59l2.4-4h-.99A1.125 1.125 0 0 1 6 6.875v-2.75C6 3.504 6.504 3 7.125 3zM13 4.125A.125.125 0 0 0 12.875 4h-5.75A.125.125 0 0 0 7 4.125v2.75c0 .069.056.125.125.125h5.75A.125.125 0 0 0 13 6.875zm-5 9A.125.125 0 0 0 7.875 13h-3.75a.125.125 0 0 0-.125.125v2.75c0 .069.056.125.125.125h3.75A.125.125 0 0 0 8 15.875z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 14.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0m6.5-3a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H15a.5.5 0 0 1 0-1h.468a2 2 0 0 0-2.383.336.5.5 0 0 1-.706-.707A3 3 0 0 1 16 12.152V12a.5.5 0 0 1 .5-.5m-.876 5.532A3 3 0 0 1 13 16.848V17a.5.5 0 0 1-1 0v-1.5a.5.5 0 0 1 .5-.5H14a.5.5 0 0 1 0 1h-.468a2 2 0 0 0 2.383-.336.5.5 0 0 1 .706.707c-.284.285-.624.51-.997.66Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDiagramBranchSync20Regular);

export { ForwardRef as default };
