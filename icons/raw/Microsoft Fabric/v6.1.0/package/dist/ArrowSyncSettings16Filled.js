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
var SvgArrowSyncSettings16Filled = function SvgArrowSyncSettings16Filled(_a, ref) {
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
    d: "M10.873.963a.75.75 0 0 1 .918.53l.64 2.391a.75.75 0 0 1-.53.919l-.584.156a4.5 4.5 0 0 0-5.447-.924 4.5 4.5 0 0 0-1.59 1.432 4.48 4.48 0 0 0-.747 3.084q.067.541.255 1.038a.75.75 0 0 1-1.42.482 6 6 0 0 1 8.154-7.516l-.18-.673a.75.75 0 0 1 .53-.919ZM12.21 6.41a4.48 4.48 0 0 1-.628 4.314 4.49 4.49 0 0 1-4.603 1.66 4.5 4.5 0 0 1-2.297-1.344l-.584.157a.75.75 0 0 0-.53.919l.64 2.39a.75.75 0 1 0 1.45-.388l-.181-.674a6 6 0 0 0 8.154-7.516.75.75 0 0 0-1.42.481Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.165 5.947a.46.46 0 0 1 .526-.152l.8.276a.455.455 0 0 0 .594-.343l.16-.83a.46.46 0 0 1 .396-.38 3.5 3.5 0 0 1 .719 0c.202.02.356.18.395.38l.16.83a.455.455 0 0 0 .595.343l.8-.276a.46.46 0 0 1 .525.152q.212.292.361.623a.46.46 0 0 1-.131.532l-.64.555a.455.455 0 0 0 0 .686l.64.555a.46.46 0 0 1 .131.532q-.15.331-.36.623a.46.46 0 0 1-.526.152l-.8-.276a.455.455 0 0 0-.594.343l-.161.83a.46.46 0 0 1-.395.38 3.6 3.6 0 0 1-.719 0 .46.46 0 0 1-.395-.38l-.161-.83a.455.455 0 0 0-.595-.343l-.799.276a.46.46 0 0 1-.526-.152 3.5 3.5 0 0 1-.36-.623.46.46 0 0 1 .13-.532l.64-.555a.455.455 0 0 0 0-.686l-.64-.555a.46.46 0 0 1-.13-.532q.15-.331.36-.623M7.002 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgArrowSyncSettings16Filled);

export { ForwardRef as default };
