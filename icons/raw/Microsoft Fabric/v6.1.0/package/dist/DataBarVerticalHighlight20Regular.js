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
var SvgDataBarVerticalHighlight20Regular = function SvgDataBarVerticalHighlight20Regular(_a, ref) {
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
    d: "M10 2a2 2 0 0 0-2 2v12a2 2 0 0 0 4 0V4a2 2 0 0 0-2-2m0 1a1 1 0 0 1 1 1v2H9V4a1 1 0 0 1 1-1m0 14a1 1 0 0 1-1-1V7h2v9a1 1 0 0 1-1 1m6-11a2 2 0 0 0-2 2v8a2 2 0 0 0 4 0V8a2 2 0 0 0-2-2m0 1a1 1 0 0 1 1 1v2h-2V8a1 1 0 0 1 1-1m0 10a1 1 0 0 1-1-1v-5h2v5a1 1 0 0 1-1 1M2.586 10.586A2 2 0 0 1 6 12.001v4a2 2 0 0 1-4 0v-4a2 2 0 0 1 .586-1.415m2.121.707A1 1 0 0 0 3 12.001v2h2v-2a1 1 0 0 0-.293-.708m-1.414 5.415A1 1 0 0 0 5 16v-1H3v1a1 1 0 0 0 .293.707Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataBarVerticalHighlight20Regular);

export { ForwardRef as default };
