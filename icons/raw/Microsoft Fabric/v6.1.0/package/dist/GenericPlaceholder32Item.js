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
var SvgGenericPlaceholder32Item = function SvgGenericPlaceholder32Item(_a, ref) {
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
    fill: "url(#i1119d8-a)",
    d: "M3 6.5A3.5 3.5 0 0 1 6.5 3h19A3.5 3.5 0 0 1 29 6.5v19a3.5 3.5 0 0 1-3.5 3.5h-19A3.5 3.5 0 0 1 3 25.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i1119d8-b)",
    fillOpacity: 0.2,
    d: "M3 6.5A3.5 3.5 0 0 1 6.5 3h19A3.5 3.5 0 0 1 29 6.5v19a3.5 3.5 0 0 1-3.5 3.5h-19A3.5 3.5 0 0 1 3 25.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i1119d8-c)",
    fillRule: "evenodd",
    d: "M25.5 4h-19A2.5 2.5 0 0 0 4 6.5v19A2.5 2.5 0 0 0 6.5 28h19a2.5 2.5 0 0 0 2.5-2.5v-19A2.5 2.5 0 0 0 25.5 4m-19-1A3.5 3.5 0 0 0 3 6.5v19A3.5 3.5 0 0 0 6.5 29h19a3.5 3.5 0 0 0 3.5-3.5v-19A3.5 3.5 0 0 0 25.5 3z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7A7A7A",
    fillRule: "evenodd",
    d: "M14.44 8.152a8 8 0 0 1 3.12 0 .5.5 0 0 1-.193.981 7 7 0 0 0-2.734 0 .5.5 0 1 1-.194-.98Zm5.312 1.333a.5.5 0 0 1 .693-.137 8 8 0 0 1 2.207 2.207.5.5 0 0 1-.83.556 7 7 0 0 0-1.933-1.932.5.5 0 0 1-.137-.694m-7.504 0a.5.5 0 0 1-.137.694 7 7 0 0 0-1.932 1.932.5.5 0 1 1-.831-.556 8 8 0 0 1 2.207-2.207.5.5 0 0 1 .693.137m-3.508 4.56a.5.5 0 0 1 .393.588 7 7 0 0 0 0 2.734.5.5 0 0 1-.98.194 8 8 0 0 1 0-3.122.5.5 0 0 1 .587-.393Zm14.52 0a.5.5 0 0 1 .588.394 8 8 0 0 1 0 3.122.5.5 0 0 1-.981-.194 7 7 0 0 0 0-2.734.5.5 0 0 1 .393-.587ZM9.485 19.753a.5.5 0 0 1 .694.137 7 7 0 0 0 1.932 1.932.5.5 0 1 1-.556.831 8 8 0 0 1-2.207-2.207.5.5 0 0 1 .137-.693m13.03 0a.5.5 0 0 1 .137.693 8 8 0 0 1-2.207 2.207.5.5 0 0 1-.556-.83 7 7 0 0 0 1.932-1.933.5.5 0 0 1 .694-.137m-8.47 3.508a.5.5 0 0 1 .588-.393 7 7 0 0 0 2.734 0 .5.5 0 1 1 .194.98 8 8 0 0 1-3.122 0 .5.5 0 0 1-.393-.587Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "i1119d8-a",
    x1: 10.222,
    x2: 13.511,
    y1: 3,
    y2: 29.311,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#EBEBEB"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i1119d8-c",
    x1: 11.396,
    x2: 14.897,
    y1: 3,
    y2: 29.256,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#BBB"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#888"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "i1119d8-b",
    cx: 0,
    cy: 0,
    r: 1,
    gradientTransform: "matrix(13.7222 20.58336 -17.81255 11.875 11.306 9.771)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.177,
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#B8B8B8"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgGenericPlaceholder32Item);

export { ForwardRef as default };
