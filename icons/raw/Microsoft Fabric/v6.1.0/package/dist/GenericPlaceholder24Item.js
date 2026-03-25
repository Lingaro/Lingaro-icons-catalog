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
var SvgGenericPlaceholder24Item = function SvgGenericPlaceholder24Item(_a, ref) {
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
    fill: "url(#id1aa78-a)",
    d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#id1aa78-b)",
    fillOpacity: 0.2,
    d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#id1aa78-c)",
    fillRule: "evenodd",
    d: "M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7A7A7A",
    fillRule: "evenodd",
    d: "M10.83 6.114a6 6 0 0 1 2.34 0 .5.5 0 0 1-.194.981 5 5 0 0 0-1.952 0 .5.5 0 0 1-.194-.98Zm3.81 1.034a.5.5 0 0 1 .694-.137 6 6 0 0 1 1.655 1.655.5.5 0 0 1-.83.556 5 5 0 0 0-1.381-1.38.5.5 0 0 1-.138-.694m-5.28 0a.5.5 0 0 1-.138.694 5 5 0 0 0-1.38 1.38.5.5 0 1 1-.831-.556 6 6 0 0 1 1.655-1.655.5.5 0 0 1 .694.137m7.938 3.288a.5.5 0 0 1 .588.394 6 6 0 0 1 0 2.34.5.5 0 1 1-.981-.194 5 5 0 0 0 0-1.952.5.5 0 0 1 .393-.588m-10.596 0a.5.5 0 0 1 .393.588 5 5 0 0 0 0 1.952.5.5 0 0 1-.98.194 6 6 0 0 1 0-2.34.5.5 0 0 1 .587-.394m10.15 4.204a.5.5 0 0 1 .137.694 6 6 0 0 1-1.655 1.655.5.5 0 0 1-.556-.83 5 5 0 0 0 1.38-1.381.5.5 0 0 1 .694-.138m-9.704 0a.5.5 0 0 1 .694.138 5 5 0 0 0 1.38 1.38.5.5 0 0 1-.556.831 6 6 0 0 1-1.655-1.655.5.5 0 0 1 .137-.694m3.288 2.658a.5.5 0 0 1 .588-.393 5 5 0 0 0 1.952 0 .5.5 0 0 1 .194.98 6 6 0 0 1-2.34 0 .5.5 0 0 1-.394-.587",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "id1aa78-a",
    x1: 7.556,
    x2: 10.085,
    y1: 2,
    y2: 22.239,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#EBEBEB"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "id1aa78-c",
    x1: 8.458,
    x2: 11.151,
    y1: 2,
    y2: 22.197,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#BBB"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#888"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "id1aa78-b",
    cx: 0,
    cy: 0,
    r: 1,
    gradientTransform: "rotate(56.31 -2.54 11.442)scale(19.0293 16.4677)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.177,
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#B8B8B8"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgGenericPlaceholder24Item);

export { ForwardRef as default };
