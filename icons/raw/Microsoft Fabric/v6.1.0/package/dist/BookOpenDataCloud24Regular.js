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
var SvgBookOpenDataCloud24Regular = function SvgBookOpenDataCloud24Regular(_a, ref) {
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
    d: "M9.562 3c1.01 0 1.906.45 2.5 1.163A3.24 3.24 0 0 1 14.563 3h4.85c1.428 0 2.65 1.222 2.65 2.65v11.2c0 .754-.364 1.417-.858 1.878-.493.46-1.17.772-1.892.772h-4.754c-.419.001-.853.168-1.215.53-.364.364-.53.8-.53 1.22a.75.75 0 0 1-1.5 0c0-.42-.167-.856-.53-1.22-.363-.362-.797-.529-1.216-.53H4.75c-.72 0-1.398-.311-1.892-.772C2.364 18.268 2 17.604 2 16.85V5.65C2 4.222 3.222 3 4.65 3zM4.65 4.5c-.6 0-1.15.55-1.15 1.15v11.2c0 .26.13.546.382.782.253.236.575.368.868.368h5a.8.8 0 0 1 .181.022c.486.058.957.231 1.382.513V6.25c0-.98-.772-1.75-1.75-1.75zm8.162 14.035a3.2 3.2 0 0 1 1.262-.496.8.8 0 0 1 .239-.039h4.999c.293 0 .616-.132.869-.368.252-.236.381-.523.381-.782V5.65c0-.6-.55-1.15-1.15-1.15h-4.85c-.978 0-1.75.77-1.75 1.75z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBookOpenDataCloud24Regular);

export { ForwardRef as default };
