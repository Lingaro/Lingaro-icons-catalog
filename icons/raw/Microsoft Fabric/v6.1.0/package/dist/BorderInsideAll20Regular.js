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
var SvgBorderInsideAll20Regular = function SvgBorderInsideAll20Regular(_a, ref) {
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
    d: "M8 3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-1v5.5H16v-1a.5.5 0 0 1 1 0v3a.5.5 0 0 1-1 0v-1h-5.5V16h1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h1v-5.5H4v1a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 1 0v1h5.5V4h-1a.5.5 0 0 1-.5-.5m-2.46.553A2 2 0 0 0 4.052 5.54a.51.51 0 0 1-.6.462.51.51 0 0 1-.38-.663 3 3 0 0 1 2.265-2.265.51.51 0 0 1 .663.38.51.51 0 0 1-.462.6Zm0 11.894a2 2 0 0 1-1.487-1.486.51.51 0 0 0-.6-.463.51.51 0 0 0-.38.664 3 3 0 0 0 2.265 2.265.505.505 0 1 0 .201-.98Zm9.05-12.893a1 1 0 0 1 .072.02 3 3 0 0 1 2.265 2.264.506.506 0 0 1-.38.664.51.51 0 0 1-.6-.463 2 2 0 0 0-1.486-1.486.51.51 0 0 1-.462-.6.51.51 0 0 1 .592-.4Zm-.13 12.893a2 2 0 0 0 1.487-1.486.51.51 0 0 1 .6-.462.51.51 0 0 1 .38.663 3 3 0 0 1-2.265 2.265.51.51 0 0 1-.663-.38.51.51 0 0 1 .462-.6Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBorderInsideAll20Regular);

export { ForwardRef as default };
