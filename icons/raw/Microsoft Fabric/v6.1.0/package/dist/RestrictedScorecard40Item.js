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
var SvgRestrictedScorecard40Item = function SvgRestrictedScorecard40Item(_a, ref) {
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
    fill: "url(#i018247-a)",
    d: "M4.5 8a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4h-24a4 4 0 0 1-4-4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i018247-b)",
    fillOpacity: 0.2,
    d: "M4.5 8a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4h-24a4 4 0 0 1-4-4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i018247-c)",
    fillRule: "evenodd",
    d: "M32.5 5h-24a3 3 0 0 0-3 3v24a3 3 0 0 0 3 3h24a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3m-24-1a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i018247-d)",
    d: "M16 14a2 2 0 0 1 2-1.998h5A2 2 0 0 1 25 14h.995a1.5 1.5 0 0 1 1.5 1.5v1.505a2.996 2.996 0 0 1-2.601 2.97A4.5 4.5 0 0 1 21 23.472v1.495h2.003a2 2 0 0 1 2 2v.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-.5a2 2 0 0 1 2-2H20v-1.495a4.5 4.5 0 0 1-3.895-3.501 3.006 3.006 0 0 1-2.61-2.974V15.5a1.5 1.5 0 0 1 1.5-1.5zm9 4.937a1.996 1.996 0 0 0 1.495-1.932V15.5a.5.5 0 0 0-.5-.5H25zM16 15h-1.005a.5.5 0 0 0-.5.5v1.498c0 .93.64 1.713 1.505 1.936z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#F5F5F5",
    d: "M39.5 31a8 8 0 1 0-16 0 8 8 0 0 0 16 0"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i018247-e)",
    fillRule: "evenodd",
    d: "M31.5 24a7 7 0 1 1 0 14 7 7 0 0 1 0-14m4.526 3.061a6 6 0 0 1-8.465 8.465zm-.717-.697-8.445 8.445a6 6 0 0 1 8.445-8.445",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "i018247-a",
    x1: 13.389,
    x2: 17.437,
    y1: 4,
    y2: 36.383,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#EBEBEB"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i018247-c",
    x1: 14.833,
    x2: 19.142,
    y1: 4,
    y2: 36.314,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#BBB"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#888"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i018247-d",
    x1: 13.495,
    x2: 29.325,
    y1: 12.002,
    y2: 25.882,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C28400"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#A86500"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i018247-e",
    x1: 24.5,
    x2: 38.5,
    y1: 24,
    y2: 38,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C28400"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#A86500"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "i018247-b",
    cx: 0,
    cy: 0,
    r: 1,
    gradientTransform: "rotate(56.31 -4.161 19.921)scale(30.4469 26.3483)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.177,
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#B8B8B8"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgRestrictedScorecard40Item);

export { ForwardRef as default };
