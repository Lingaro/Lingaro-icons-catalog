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
var SvgRestrictedScorecard24Item = function SvgRestrictedScorecard24Item(_a, ref) {
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
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#ifc9ae1-a)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "url(#ifc9ae1-b)",
    d: "M2.5 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-14a3 3 0 0 1-3-3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ifc9ae1-c)",
    fillOpacity: 0.2,
    d: "M2.5 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-14a3 3 0 0 1-3-3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ifc9ae1-d)",
    fillRule: "evenodd",
    d: "M19.5 3h-14a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-14-1a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ifc9ae1-e)",
    fillRule: "evenodd",
    d: "M7.5 9.5a2.5 2.5 0 0 0 2.163 2.477A3 3 0 0 0 12 13.96v1.54h-.9a1.6 1.6 0 0 0-1.6 1.6c0 .22.18.4.4.4h5.2a.4.4 0 0 0 .4-.4 1.6 1.6 0 0 0-1.6-1.6H13v-1.541a3 3 0 0 0 2.337-1.982A2.5 2.5 0 0 0 17.5 9.5v-1A1.5 1.5 0 0 0 16 7h-.552c-.163-.577-.694-1-1.323-1h-3.25c-.63 0-1.16.423-1.323 1H9a1.5 1.5 0 0 0-1.5 1.5zM9 8h.5v2.915a1.5 1.5 0 0 1-1-1.415v-1A.5.5 0 0 1 9 8m6.5 2.915a1.5 1.5 0 0 0 1-1.415v-1A.5.5 0 0 0 16 8h-.5z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#F5F5F5",
    d: "M24.5 18a6 6 0 1 1-12 0 6 6 0 0 1 12 0"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ifc9ae1-f)",
    fillRule: "evenodd",
    d: "M22.035 14.464a5 5 0 1 1-7.07 7.071 5 5 0 0 1 7.07-7.07Zm-.375 1.083a4 4 0 0 1-5.613 5.613zm-.707-.707-5.613 5.613a4 4 0 0 1 5.613-5.613",
    clipRule: "evenodd"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "ifc9ae1-b",
    x1: 8.056,
    x2: 10.585,
    y1: 2,
    y2: 22.239,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#EBEBEB"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "ifc9ae1-d",
    x1: 8.958,
    x2: 11.651,
    y1: 2,
    y2: 22.197,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#BBB"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#888"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "ifc9ae1-e",
    x1: 7.5,
    x2: 18.889,
    y1: 6,
    y2: 15.903,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C28400"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#A86500"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "ifc9ae1-f",
    x1: 13.5,
    x2: 23.5,
    y1: 13,
    y2: 23,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C28400"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#A86500"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "ifc9ae1-c",
    cx: 0,
    cy: 0,
    r: 1,
    gradientTransform: "rotate(56.31 -2.29 11.909)scale(19.0293 16.4677)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.177,
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#B8B8B8"
  })), /*#__PURE__*/React.createElement("clipPath", {
    id: "ifc9ae1-a"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M.5 0h24v24H.5z"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgRestrictedScorecard24Item);

export { ForwardRef as default };
