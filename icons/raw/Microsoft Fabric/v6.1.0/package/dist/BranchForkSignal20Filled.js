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
var SvgBranchForkSignal20Filled = function SvgBranchForkSignal20Filled(_a, ref) {
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
    d: "M12 11q-.27 0-.538.02a.5.5 0 1 0 .076.998 6 6 0 0 1 6.445 6.445.5.5 0 1 0 .997.075A7 7 0 0 0 12 11m0 2q-.281 0-.555.03a.5.5 0 1 0 .11.994 4 4 0 0 1 4.42 4.42.5.5 0 1 0 .995.11A5 5 0 0 0 12 13m0 2q-.307 0-.6.06a.5.5 0 0 0 .2.98 2 2 0 0 1 2.36 2.36.5.5 0 1 0 .98.2A3 3 0 0 0 12 15m1 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0M6.5 7.959a3 3 0 1 0-1 0v4.082a3 3 0 1 0 1 0V11h3.592a1.3 1.3 0 0 1 .308-.5c.3-.3.6-.5 1-.5H6.5zM12 10a8 8 0 0 1 1.823.21c.42-.446.677-1.048.677-1.71v-.541a3 3 0 1 0-1 0V8.5A1.5 1.5 0 0 1 12 10"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBranchForkSignal20Filled);

export { ForwardRef as default };
