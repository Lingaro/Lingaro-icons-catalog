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
var SvgDiagramBranch24Regular = function SvgDiagramBranch24Regular(_a, ref) {
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
    d: "M6 4.744C6 3.78 6.784 3 7.75 3h8.5c.966 0 1.75.781 1.75 1.745v3.49c0 .964-.784 1.746-1.75 1.746h-1.614l3.571 4.986h1.043c.966 0 1.75.781 1.75 1.745v2.543c0 .964-.784 1.745-1.75 1.745h-3.5c-.966 0-1.75-.781-1.75-1.745V16.71c0-.964.784-1.745 1.75-1.745h.614L12.793 9.98h-1.586l-3.571 4.986h.614c.966 0 1.75.781 1.75 1.745v2.543c0 .964-.784 1.745-1.75 1.745h-3.5c-.966 0-1.75-.781-1.75-1.745V16.71c0-.964.784-1.745 1.75-1.745h1.043L9.364 9.98H7.75C6.784 9.98 6 9.198 6 8.234zm1.75-.25a.25.25 0 0 0-.25.25v3.49c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.49a.25.25 0 0 0-.25-.25zm-3 11.968a.25.25 0 0 0-.25.249v2.543c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25V16.71a.25.25 0 0 0-.25-.25h-3.5Zm10.75.249v2.543c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25V16.71a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDiagramBranch24Regular);

export { ForwardRef as default };
