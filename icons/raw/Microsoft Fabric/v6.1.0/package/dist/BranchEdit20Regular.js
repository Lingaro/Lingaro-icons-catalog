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
var SvgBranchEdit20Regular = function SvgBranchEdit20Regular(_a, ref) {
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
    d: "M15.81 10.548a1.87 1.87 0 1 1 2.644 2.644l-4.829 4.83a2.2 2.2 0 0 1-1.021.578l-1.498.375a.89.89 0 0 1-1.079-1.08l.374-1.497c.097-.387.297-.74.579-1.021l4.83-4.83Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 2a3 3 0 0 1 .854 5.876c.178.222.417.483.721.744.726.622 1.834 1.252 3.425 1.362a3 3 0 0 1 5.861-.885 2.9 2.9 0 0 0-1.114-.069 1.998 1.998 0 1 0-3.19 2.356l-.706.707a3 3 0 0 1-.683-1.098c-1.96-.078-3.342-.84-4.243-1.613a7 7 0 0 1-.425-.4v3.06a3 3 0 0 1 2.499 2.941c-.267.347-.46.746-.567 1.173l-.216.86A2.99 2.99 0 0 1 7 18a3 3 0 0 1-.5-5.959V7.959A3.001 3.001 0 0 1 7 2m0 11a2 2 0 1 0 0 4 2 2 0 0 0 0-4M7 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBranchEdit20Regular);

export { ForwardRef as default };
