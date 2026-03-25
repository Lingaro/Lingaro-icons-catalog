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
var SvgAddPipeline64NonItem = function SvgAddPipeline64NonItem(_a, ref) {
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
    fill: "url(#i672249-a)",
    fillRule: "evenodd",
    d: "M13 14a2 2 0 0 0-2 2v32a2 2 0 1 0 4 0v-5.5h24.332q.265-.515.58-1H15v-20h34v14.541q.495-.04 1-.041V16a1 1 0 1 1 2 0v20.166q.508.086 1 .212V16a2 2 0 1 0-4 0v4.5H15V16a2 2 0 0 0-2-2m1 34V16a1 1 0 1 0-2 0v32a1 1 0 1 0 2 0",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i672249-b)",
    fillRule: "evenodd",
    d: "M61 48c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-11-6.5a.5.5 0 0 1 .5.5v5.5H56a.5.5 0 0 1 0 1h-5.5V54a.5.5 0 0 1-1 0v-5.5H44a.5.5 0 0 1 0-1h5.5V42a.5.5 0 0 1 .5-.5",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "i672249-a",
    x1: 11,
    x2: 55.751,
    y1: 14,
    y2: 63.724,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#209782"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#0C695A"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i672249-b",
    x1: 11,
    x2: 55.751,
    y1: 14,
    y2: 63.724,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#209782"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#0C695A"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgAddPipeline64NonItem);

export { ForwardRef as default };
