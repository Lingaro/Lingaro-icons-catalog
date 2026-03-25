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
var SvgWindowCheckmark20Regular = function SvgWindowCheckmark20Regular(_a, ref) {
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
    d: "M6.001 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3.6a5.5 5.5 0 0 1-.393-1H6.001a2 2 0 0 1-2-2V7h12v2.207q.524.149 1 .393V6a3 3 0 0 0-3-3zm-2 3a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.001 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-2.146-1.854a.5.5 0 0 0-.708 0l-2.646 2.647-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .707 0l3-3a.5.5 0 0 0 0-.708Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgWindowCheckmark20Regular);

export { ForwardRef as default };
