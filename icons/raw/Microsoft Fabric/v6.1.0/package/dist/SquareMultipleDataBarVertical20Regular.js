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
var SvgSquareMultipleDataBarVertical20Regular = function SvgSquareMultipleDataBarVertical20Regular(_a, ref) {
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
    d: "m15.034 5.015-.007-.524A2.5 2.5 0 0 0 12.52 2l-6.029.017a2.5 2.5 0 0 0-2.493 2.507l.012 3.54A2.5 2.5 0 0 0 2 10.523l.014 4.981a2.5 2.5 0 0 0 2.507 2.493l5.561-.015a1.5 1.5 0 0 1-.084-.497v-.503l-5.48.015a1.5 1.5 0 0 1-1.504-1.496L3 10.521a1.5 1.5 0 0 1 1.496-1.505L10.479 9a1.5 1.5 0 0 1 1.504 1.495l.004 1.49h.511q.258.001.49.082l-.005-1.574A2.5 2.5 0 0 0 10.476 8l-2.469.006.007-.51A1.5 1.5 0 0 1 9.518 6l6.029.017a1.5 1.5 0 0 1 1.496 1.504l-.009 2.537q.22-.072.464-.073h.536l.009-2.461a2.5 2.5 0 0 0-2.493-2.507zM4.998 4.521a1.5 1.5 0 0 1 1.496-1.504L12.523 3a1.5 1.5 0 0 1 1.504 1.496l.007.516L9.52 5a2.5 2.5 0 0 0-2.507 2.49l-.007.52-1.997.005zm12.5 6.464a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.998 13.485a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSquareMultipleDataBarVertical20Regular);

export { ForwardRef as default };
