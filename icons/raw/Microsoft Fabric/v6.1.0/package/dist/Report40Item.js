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
var SvgReport40Item = function SvgReport40Item(_a, ref) {
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
    fill: "url(#i846a7c-a)",
    d: "M4 8a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i846a7c-b)",
    fillOpacity: 0.2,
    d: "M4 8a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i846a7c-c)",
    fillRule: "evenodd",
    d: "M32 5H8a3 3 0 0 0-3 3v24a3 3 0 0 0 3 3h24a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3M8 4a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i846a7c-d)",
    d: "M14.219 11a.75.75 0 0 1 .75.75v16.5a.75.75 0 0 1-1.5 0v-16.5a.75.75 0 0 1 .75-.75"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i846a7c-e)",
    d: "M19.25 28.25v-11.5a.75.75 0 0 1 1.5 0v11.5a.75.75 0 0 1-1.5 0"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i846a7c-f)",
    d: "M26.531 22.75a.75.75 0 1 0-1.5 0v5.5a.75.75 0 0 0 1.5 0z"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "i846a7c-a",
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
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i846a7c-c",
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
    id: "i846a7c-d",
    x1: 13.469,
    x2: 30.582,
    y1: 11,
    y2: 23.419,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C28400"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#A86500"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i846a7c-e",
    x1: 13.469,
    x2: 30.582,
    y1: 11,
    y2: 23.419,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C28400"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#A86500"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i846a7c-f",
    x1: 13.469,
    x2: 30.582,
    y1: 11,
    y2: 23.419,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C28400"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#A86500"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "i846a7c-b",
    cx: 0,
    cy: 0,
    r: 1,
    gradientTransform: "rotate(56.31 -4.411 19.454)scale(30.4469 26.3483)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.177,
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#B8B8B8"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgReport40Item);

export { ForwardRef as default };
