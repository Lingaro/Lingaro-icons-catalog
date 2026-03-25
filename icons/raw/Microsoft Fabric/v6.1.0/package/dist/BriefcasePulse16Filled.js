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
var SvgBriefcasePulse16Filled = function SvgBriefcasePulse16Filled(_a, ref) {
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
    fill: "currentColor",
    d: "M9.5 2A1.5 1.5 0 0 1 11 3.5V5h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1V3.5A1.5 1.5 0 0 1 6.5 2zM7.25 7a.5.5 0 0 0-.436.255l-.032.07L6.153 9H5.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 .468-.324l.282-.753 1.032 2.753a.5.5 0 0 0 .936 0L9.847 10h.653a.5.5 0 0 0 0-1h-1a.5.5 0 0 0-.436.255l-.032.07-.282.751-1.032-2.752A.5.5 0 0 0 7.25 7M6.5 3a.5.5 0 0 0-.5.5V5h4V3.5a.5.5 0 0 0-.5-.5z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBriefcasePulse16Filled);

export { ForwardRef as default };
