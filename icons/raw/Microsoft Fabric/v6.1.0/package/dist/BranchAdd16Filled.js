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
var SvgBranchAdd16Filled = function SvgBranchAdd16Filled(_a, ref) {
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
    d: "M4.445 1.003a2.5 2.5 0 0 1 2.524 2.183 2.5 2.5 0 0 1-1.897 2.746c.161.433.556.84 1.097 1.178a5.5 5.5 0 0 0-.53.815 7 7 0 0 1-.646-.457v2.584l.026.006a5.48 5.48 0 0 0 1.36 4.081 2.5 2.5 0 1 1-2.386-4.087v-4.1a2.498 2.498 0 0 1 .452-4.95Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 6a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 2a.5.5 0 0 0-.5.5V10H8.5a.5.5 0 0 0 0 1H10v1.5a.5.5 0 1 0 1 0V11h1.5a.5.5 0 0 0 0-1H11V8.5a.5.5 0 0 0-.5-.5"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBranchAdd16Filled);

export { ForwardRef as default };
