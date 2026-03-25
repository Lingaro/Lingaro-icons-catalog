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
var SvgRetail32Item = function SvgRetail32Item(_a, ref) {
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
    fill: "url(#id808af-a)",
    d: "M3 6.5A3.5 3.5 0 0 1 6.5 3h19A3.5 3.5 0 0 1 29 6.5v19a3.5 3.5 0 0 1-3.5 3.5h-19A3.5 3.5 0 0 1 3 25.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#id808af-b)",
    fillOpacity: 0.2,
    d: "M3 6.5A3.5 3.5 0 0 1 6.5 3h19A3.5 3.5 0 0 1 29 6.5v19a3.5 3.5 0 0 1-3.5 3.5h-19A3.5 3.5 0 0 1 3 25.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#id808af-c)",
    fillRule: "evenodd",
    d: "M25.5 4h-19A2.5 2.5 0 0 0 4 6.5v19A2.5 2.5 0 0 0 6.5 28h19a2.5 2.5 0 0 0 2.5-2.5v-19A2.5 2.5 0 0 0 25.5 4m-19-1A3.5 3.5 0 0 0 3 6.5v19A3.5 3.5 0 0 0 6.5 29h19a3.5 3.5 0 0 0 3.5-3.5v-19A3.5 3.5 0 0 0 25.5 3z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#id808af-d)",
    d: "M10.5 10a.5.5 0 0 0 0 1h.246a.5.5 0 0 1 .48.363l1.586 5.55A1.5 1.5 0 0 0 14.254 18h4.569a1.5 1.5 0 0 0 1.393-.943l1.474-3.686A1 1 0 0 0 20.762 12h-8.313l-.261-.912A1.5 1.5 0 0 0 10.746 10zm4 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m4 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "id808af-a",
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
    id: "id808af-c",
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
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "id808af-d",
    x1: 10,
    x2: 21.998,
    y1: 10,
    y2: 21.76,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#7751B8"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#5A409C"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "id808af-b",
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
var ForwardRef = /*#__PURE__*/forwardRef(SvgRetail32Item);

export { ForwardRef as default };
