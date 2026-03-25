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
var SvgRuntimeLineage40Item = function SvgRuntimeLineage40Item(_a, ref) {
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
    fill: "url(#ic1e41b-i00aa19-paint0_linear_64423_1039)",
    d: "M4 8a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ic1e41b-i00aa19-paint1_radial_64423_1039)",
    fillOpacity: 0.2,
    d: "M4 8a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ic1e41b-i00aa19-paint2_linear_64423_1039)",
    fillRule: "evenodd",
    d: "M32 5H8a3 3 0 0 0-3 3v24a3 3 0 0 0 3 3h24a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3M8 4a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ic1e41b-i00aa19-paint3_linear_64423_1039)",
    d: "M15 23a3 3 0 1 1 2.96-3.5h1.54v-3A1.5 1.5 0 0 1 21 15h1.041a3.001 3.001 0 1 1 0 1H21a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h1.041a3.001 3.001 0 1 1 0 1H21a1.5 1.5 0 0 1-1.5-1.5v-3h-1.54A3 3 0 0 1 15 23"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "ic1e41b-i00aa19-paint0_linear_64423_1039",
    x1: 12.889,
    x2: 16.937,
    y1: 4,
    y2: 36.383,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#EBEBEB"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "ic1e41b-i00aa19-paint1_radial_64423_1039",
    cx: 0,
    cy: 0,
    r: 1,
    gradientTransform: "matrix(16.8889 25.3333 -25.3333 9.5 14.222 12.333)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.177,
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#B8B8B8"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "ic1e41b-i00aa19-paint2_linear_64423_1039",
    x1: 14.333,
    x2: 18.642,
    y1: 4,
    y2: 36.314,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#BBB"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#888"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "ic1e41b-i00aa19-paint3_linear_64423_1039",
    x1: 12,
    x2: 26.97,
    y1: 12.498,
    y2: 28.466,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#E03F8F"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#BD1E7B"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgRuntimeLineage40Item);

export { ForwardRef as default };
