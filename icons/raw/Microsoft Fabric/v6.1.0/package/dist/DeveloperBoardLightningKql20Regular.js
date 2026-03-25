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
var SvgDeveloperBoardLightningKql20Regular = function SvgDeveloperBoardLightningKql20Regular(_a, ref) {
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
    d: "M8 2.501a.5.5 0 1 0-1 0v1.5h-.5a2.5 2.5 0 0 0-2.5 2.5v.5H2.5a.5.5 0 1 0 0 1H4v1.5H2.5a.5.5 0 0 0 0 1H4v1.5H2.5a.5.5 0 1 0 0 1H4v.5a2.5 2.5 0 0 0 2.5 2.5H7v1.5a.5.5 0 0 0 1 0v-1.5h1.5v1.5a.5.5 0 0 0 1 0v-1.5h.188l-.409-.409.591-.591H6.5a1.5 1.5 0 0 1-1.5-1.5v-7a1.5 1.5 0 0 1 1.5-1.5h7a1.5 1.5 0 0 1 1.5 1.5v4.5h1v-.5h1.5a.5.5 0 0 0 0-1H16v-1.5h1.5a.5.5 0 0 0 0-1H16v-.5a2.5 2.5 0 0 0-2.5-2.5H13v-1.5a.5.5 0 0 0-1 0v1.5h-1.5v-1.5a.5.5 0 0 0-1 0v1.5H8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m10.986 7.54-.416 1.461h1.529a.4.4 0 0 1 .307.656l-2.658 3.19c-.293.35-.856.05-.726-.388L9.455 11H7.9a.4.4 0 0 1-.307-.657l2.668-3.188c.29-.348.85-.051.726.385Zm7.514 4.461h-5a.5.5 0 0 0-.353.854l5 5a.5.5 0 0 0 .853-.354v-5a.5.5 0 0 0-.5-.5m-6.807 3.592 1.5-1.5.707.708-1.5 1.5zm.5 2.5 2.5-2.5.708.707-2.5 2.5zm4-.999-1.5 1.5.707.706 1.5-1.5z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDeveloperBoardLightningKql20Regular);

export { ForwardRef as default };
