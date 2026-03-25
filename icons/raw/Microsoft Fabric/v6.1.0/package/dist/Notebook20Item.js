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
var SvgNotebook20Item = function SvgNotebook20Item(_a, ref) {
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
    fill: "url(#ia65f4b-a)",
    d: "M3.047 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ia65f4b-b)",
    fillOpacity: 0.2,
    d: "M3.047 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ia65f4b-c)",
    fillRule: "evenodd",
    d: "M17.047 3a2 2 0 0 0-2-2h-10a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2zm-12-1h10a1 1 0 0 1 1 1v10.5a1.5 1.5 0 0 1-1.5 1.5h-9.5a2 2 0 0 0-1 .268V3a1 1 0 0 1 1-1m-1 15a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1.5a2.5 2.5 0 0 1-1.5.5h-9.5a1 1 0 0 0-1 1",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ia65f4b-d)",
    d: "M11.485 4.621a.5.5 0 1 0-.97-.242l-1.75 7a.5.5 0 0 0 .97.242z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ia65f4b-e)",
    d: "M12.116 5.553a.5.5 0 0 0 0 .707L13.856 8l-1.74 1.74a.5.5 0 1 0 .707.707l2.023-2.023a.6.6 0 0 0 0-.848l-2.023-2.023a.5.5 0 0 0-.707 0"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ia65f4b-f)",
    d: "M7.916 5.584a.5.5 0 0 1 0 .707L6.206 8l1.71 1.709a.5.5 0 0 1-.707.707L5.217 8.424a.6.6 0 0 1 0-.848l1.992-1.992a.5.5 0 0 1 .707 0"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "ia65f4b-a",
    x1: 6.936,
    x2: 9.834,
    y1: 1,
    y2: 19.034,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#EBEBEB"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "ia65f4b-c",
    x1: 7.568,
    x2: 10.649,
    y1: 1,
    y2: 18.972,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#BBB"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#888"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "ia65f4b-d",
    x1: 5.041,
    x2: 12.85,
    y1: 4,
    y2: 13.741,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#4BA446"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#3F7D35"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "ia65f4b-e",
    x1: 5.041,
    x2: 12.85,
    y1: 4,
    y2: 13.741,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#4BA446"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#3F7D35"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "ia65f4b-f",
    x1: 5.041,
    x2: 12.85,
    y1: 4,
    y2: 13.741,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#4BA446"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#3F7D35"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "ia65f4b-b",
    cx: 0,
    cy: 0,
    r: 1,
    gradientTransform: "matrix(7.38888 14.24997 -10.91858 5.6615 7.52 5.688)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.177,
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#B8B8B8"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgNotebook20Item);

export { ForwardRef as default };
