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
var SvgTooltipDataBarVertical20Filled = function SvgTooltipDataBarVertical20Filled(_a, ref) {
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
    d: "M3.732 2.732A2.5 2.5 0 0 1 5.5 2h9A2.5 2.5 0 0 1 17 4.5v9a2.5 2.5 0 0 1-2.5 2.5h-2.691l-1.362 2.724a.5.5 0 0 1-.894 0L8.19 16H5.5A2.5 2.5 0 0 1 3 13.5v-9a2.5 2.5 0 0 1 .732-1.768m8.56 2.06A1 1 0 0 0 12 5.5v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1.707-.707Zm-6 4A1 1 0 0 0 6 9.5v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1.707-.707Zm3-2A1 1 0 0 0 9 7.5v5a1 1 0 1 0 2 0v-5a1 1 0 0 0-1.707-.707Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTooltipDataBarVertical20Filled);

export { ForwardRef as default };
