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
var SvgFabric16Regular = function SvgFabric16Regular(_a, ref) {
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
    fillRule: "evenodd",
    d: "m3.673 6.842 9.27-1.372.89-3.376-8.307 1.228a1.51 1.51 0 0 0-1.21 1.091l-.002.007zM1.047 12.57a1.9 1.9 0 0 0-.047.442 1.97 1.97 0 0 0 1.75 1.958q.416.062.942-.014l1.615-.223c.405-.056.739-.349.847-.744l.726-2.667 2.427-.355a.6.6 0 0 0 .486-.435l1.036-3.737 2.54-.376a.56.56 0 0 0 .463-.41l1.143-4.3a.558.558 0 0 0-.608-.704l-8.994 1.33A2.51 2.51 0 0 0 3.35 4.15l-2.304 8.418Zm2.19-.718 2.563-.373-.611 2.246a.02.02 0 0 1-.019.018l-1.623.223a2.5 2.5 0 0 1-.686.01.97.97 0 0 1-.8-1.305c.042-.105.284-.657 1.177-.819Zm5.658-1.835.856-3.063-5.4.797-.435.08a.9.9 0 0 0-.698.596l-.706 2.524.166-.028z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgFabric16Regular);

export { ForwardRef as default };
