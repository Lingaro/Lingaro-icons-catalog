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
var SvgDualScreenDiff20Regular = function SvgDualScreenDiff20Regular(_a, ref) {
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
    d: "M5.146 7.647a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .707l-2 2a.5.5 0 1 1-.708-.707l1.647-1.646-1.647-1.646a.5.5 0 0 1 0-.708m9 4.707a.5.5 0 0 0 .708-.707l-1.647-1.646 1.647-1.646a.5.5 0 0 0-.708-.708l-2 2a.5.5 0 0 0 0 .707z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 4.001a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2zm-1 2a1 1 0 0 1 1-1h5.5v10H4a1 1 0 0 1-1-1zm7.5 9v-10H16a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDualScreenDiff20Regular);

export { ForwardRef as default };
