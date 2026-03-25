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
var SvgNotebook32Item = function SvgNotebook32Item(_a, ref) {
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
    fill: "url(#i22b11d-a)",
    d: "M5 5.5A3.5 3.5 0 0 1 8.5 2h15A3.5 3.5 0 0 1 27 5.5v21a3.5 3.5 0 0 1-3.5 3.5h-15A3.5 3.5 0 0 1 5 26.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i22b11d-b)",
    fillOpacity: 0.2,
    d: "M5 5.5A3.5 3.5 0 0 1 8.5 2h15A3.5 3.5 0 0 1 27 5.5v21a3.5 3.5 0 0 1-3.5 3.5h-15A3.5 3.5 0 0 1 5 26.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i22b11d-c)",
    d: "M17.494 8.521a.5.5 0 0 1 .335.623l-2.7 9a.5.5 0 1 1-.957-.287l2.7-9a.5.5 0 0 1 .622-.336"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i22b11d-d)",
    d: "M18.797 10.446a.5.5 0 0 1 .707 0l2.63 2.63a.6.6 0 0 1 0 .848l-2.63 2.63a.5.5 0 0 1-.707-.708l2.346-2.346-2.346-2.347a.5.5 0 0 1 0-.707"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i22b11d-e)",
    d: "M12.496 10.446a.5.5 0 1 1 .707.707L10.857 13.5l2.346 2.346a.5.5 0 0 1-.707.707l-2.63-2.629a.6.6 0 0 1 0-.848z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i22b11d-f)",
    fillRule: "evenodd",
    d: "M5 26.5v-21A3.5 3.5 0 0 1 8.5 2h15A3.5 3.5 0 0 1 27 5.5v21a3.5 3.5 0 0 1-3.5 3.5h-15A3.5 3.5 0 0 1 5 26.5M8.5 3h15A2.5 2.5 0 0 1 26 5.5V20a3 3 0 0 1-3 3H8.5A3.5 3.5 0 0 0 6 24.05V5.5A2.5 2.5 0 0 1 8.5 3M26 25.646v.854a2.5 2.5 0 0 1-2.5 2.5h-15a2.5 2.5 0 0 1 0-5H23a4 4 0 0 0 3-1.354V23a3 3 0 0 1-3 3H8a.5.5 0 0 0 0 1h15a4 4 0 0 0 3-1.354",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "i22b11d-a",
    x1: 11.111,
    x2: 15.576,
    y1: 2,
    y2: 30.067,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#EBEBEB"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i22b11d-c",
    x1: 9.691,
    x2: 19.427,
    y1: 8.5,
    y2: 20.784,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#4BA446"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#3F7D35"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i22b11d-d",
    x1: 9.691,
    x2: 19.427,
    y1: 8.5,
    y2: 20.784,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#4BA446"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#3F7D35"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i22b11d-e",
    x1: 9.691,
    x2: 19.427,
    y1: 8.5,
    y2: 20.784,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#4BA446"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#3F7D35"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i22b11d-f",
    x1: 12.104,
    x2: 16.851,
    y1: 2,
    y2: 29.972,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#BBB"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#888"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "i22b11d-b",
    cx: 0,
    cy: 0,
    r: 1,
    gradientTransform: "matrix(11.61113 22.16669 -17.08352 8.94852 12.028 9.292)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.177,
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#B8B8B8"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgNotebook32Item);

export { ForwardRef as default };
