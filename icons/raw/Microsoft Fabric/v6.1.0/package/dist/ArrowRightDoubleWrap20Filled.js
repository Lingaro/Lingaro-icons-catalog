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
var SvgArrowRightDoubleWrap20Filled = function SvgArrowRightDoubleWrap20Filled(_a, ref) {
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
    d: "M13.22 6.53a.75.75 0 0 1 0-1.06l.23-.231-8.72.011a.75.75 0 0 1-.002-1.5l8.7-.011-.208-.209a.75.75 0 0 1 1.06-1.06l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 0 1-1.06 0m-8.49 8.72 8.72-.011-.23.23a.75.75 0 1 0 1.06 1.061l1.5-1.5a.75.75 0 0 0 0-1.06l-1.5-1.5a.75.75 0 1 0-1.06 1.06l.208.209-8.7.011a.75.75 0 1 0 .001 1.5Zm12.042-9.399a.5.5 0 0 0-.924.384 2 2 0 0 1 0 1.53.5.5 0 0 0 .924.384 3 3 0 0 0 0-2.297Zm-1.623 3.921a.5.5 0 1 0-.384-.924A2 2 0 0 1 14 9h-1a.5.5 0 0 0 0 1h1c.406 0 .794-.08 1.149-.228m-9.914.38C5.47 10.054 5.728 10 6 10h1a.5.5 0 0 0 0-1H6c-.406 0-.794.08-1.149.228a.5.5 0 0 0 .384.924M9 9a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm-4.848 2.235a.5.5 0 1 0-.924-.383 3 3 0 0 0 0 2.296.5.5 0 1 0 .924-.383 2 2 0 0 1 0-1.53"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgArrowRightDoubleWrap20Filled);

export { ForwardRef as default };
