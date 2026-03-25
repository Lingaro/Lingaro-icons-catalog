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
var SvgBookmarkDataBarVertical20Regular = function SvgBookmarkDataBarVertical20Regular(_a, ref) {
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
    d: "M7.293 1.293A1 1 0 0 0 7 2v7a1 1 0 0 0 2 0V2a1 1 0 0 0-1.707-.707m-6 4A1 1 0 0 0 1 6v3a1 1 0 0 0 2 0V6a1 1 0 0 0-1.707-.707m3-2A1 1 0 0 0 4 4v5a1 1 0 0 0 2 0V4a1 1 0 0 0-1.707-.707"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 17.537v-6.805A2 2 0 0 0 5 11v5.555l4.706-3.422a.5.5 0 0 1 .588 0L15 16.555V4.537a1.5 1.5 0 0 0-1.5-1.5H10v-1h3.5a2.5 2.5 0 0 1 2.5 2.5v13a.5.5 0 0 1-.794.404L10 14.155l-5.206 3.786A.5.5 0 0 1 4 17.537"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBookmarkDataBarVertical20Regular);

export { ForwardRef as default };
