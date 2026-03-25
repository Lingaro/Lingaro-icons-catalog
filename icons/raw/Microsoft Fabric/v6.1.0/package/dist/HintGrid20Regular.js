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
var SvgHintGrid20Regular = function SvgHintGrid20Regular(_a, ref) {
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
    d: "M8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM4.053 5.54A2 2 0 0 1 5.54 4.052a.51.51 0 0 0 .462-.6.51.51 0 0 0-.663-.38 3 3 0 0 0-2.265 2.265.51.51 0 0 0 .38.663.51.51 0 0 0 .6-.462Zm0 8.92a2 2 0 0 0 1.486 1.487.51.51 0 0 1 .462.6.51.51 0 0 1-.663.38 3 3 0 0 1-2.265-2.265.51.51 0 0 1 .38-.663.51.51 0 0 1 .6.462ZM14.662 3.073a.51.51 0 0 0-.663.38.51.51 0 0 0 .462.6 2 2 0 0 1 1.486 1.486.507.507 0 0 0 .6.463.51.51 0 0 0 .38-.664 3 3 0 0 0-2.265-2.265m1.285 11.387a2 2 0 0 1-1.486 1.487.51.51 0 0 0-.462.6.51.51 0 0 0 .663.38 3 3 0 0 0 2.265-2.265.51.51 0 0 0-.38-.663.51.51 0 0 0-.6.462ZM16.5 12a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5M3 11.5a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-1 0zm5 5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M7.5 6A1.5 1.5 0 0 0 6 7.5v5A1.5 1.5 0 0 0 7.5 14h5a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 12.5 6zM7 12.5v-2h2.5V13h-2a.5.5 0 0 1-.5-.5m0-3v-2a.5.5 0 0 1 .5-.5h2v2.5zm3.5 3.5v-2.5H13v2a.5.5 0 0 1-.5.5zm0-3.5V7h2a.5.5 0 0 1 .5.5v2z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgHintGrid20Regular);

export { ForwardRef as default };
