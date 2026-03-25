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
var SvgBriefcaseReport20Filled = function SvgBriefcaseReport20Filled(_a, ref) {
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
    d: "M7 3.75V5H5.5A2.5 2.5 0 0 0 3 7.5v1A1.5 1.5 0 0 0 4.5 10H9v-.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v.5h2a2 2 0 0 1 3.83-.807c.109-.207.17-.443.17-.693v-1A2.5 2.5 0 0 0 14.5 5H13V3.75A1.75 1.75 0 0 0 11.25 2h-2.5A1.75 1.75 0 0 0 7 3.75M12 5H8V3.75A.75.75 0 0 1 8.75 3h2.5a.75.75 0 0 1 .75.75zm0 8a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 10a1 1 0 1 1 2 0v7a1 1 0 1 1-2 0zm-1 2.268V11h-2v.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V11H4.5a2.5 2.5 0 0 1-1.5-.5v3A2.5 2.5 0 0 0 5.5 16H10v-2a2 2 0 0 1 3-1.732M18 11a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-5a1 1 0 0 0-1-1"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBriefcaseReport20Filled);

export { ForwardRef as default };
