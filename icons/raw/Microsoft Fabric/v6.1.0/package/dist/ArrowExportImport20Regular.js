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
var SvgArrowExportImport20Regular = function SvgArrowExportImport20Regular(_a, ref) {
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
    d: "M2.87 10.838A.5.5 0 0 0 3 10.5v-8l-.008-.09A.5.5 0 0 0 2 2.5v8l.008.09a.5.5 0 0 0 .861.248Zm4.296-.983a.5.5 0 0 0 .7-.711L5.71 7.01l11.79-.038a.5.5 0 0 0-.006-1L5.7 6.01l2.14-2.158a.5.5 0 0 0-.712-.7L4.145 6.165a.5.5 0 0 0 0 .708l3.02 2.982Zm9.964-.679a.5.5 0 0 0-.13.338v8l.008.09a.5.5 0 0 0 .992-.09v-8l-.008-.09a.5.5 0 0 0-.861-.248Zm-4.642.862a.5.5 0 0 1 .347.12l3.025 2.975a.5.5 0 0 1 0 .708l-2.983 3.017a.5.5 0 1 1-.711-.7L14.3 14l-11.794.042a.5.5 0 0 1-.006-1L14.29 13l-2.156-2.13a.5.5 0 0 1 .353-.832Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgArrowExportImport20Regular);

export { ForwardRef as default };
