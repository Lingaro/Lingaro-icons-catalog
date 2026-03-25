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
var SvgNotebook24Item = function SvgNotebook24Item(_a, ref) {
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
    fill: "url(#i16a5c6-a)",
    fillRule: "evenodd",
    d: "M18 1.5H6.5c-1.243 0-3 1.257-3 2.5v17c.5 1 2.265 1.5 3 1.5h11c.828 0 3-1.672 3-2.5V4c0-.828-1.672-2.5-2.5-2.5",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i16a5c6-b)",
    fillOpacity: 0.2,
    fillRule: "evenodd",
    d: "M18 1.5H6.5c-1.243 0-3 1.257-3 2.5v17c.5 1 2.265 1.5 3 1.5h11c.828 0 3-1.672 3-2.5V4c0-.828-1.672-2.5-2.5-2.5",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i16a5c6-c)",
    d: "M13.676 5.032a.5.5 0 0 1 .292.644l-3 8a.5.5 0 1 1-.936-.351l3-8a.5.5 0 0 1 .644-.293"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i16a5c6-d)",
    d: "M15.146 7.146a.5.5 0 0 1 .707 0l1.93 1.93a.6.6 0 0 1 0 .848l-1.93 1.93a.5.5 0 0 1-.707-.708L16.793 9.5l-1.647-1.646a.5.5 0 0 1 0-.708"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i16a5c6-e)",
    d: "M8.105 7.146a.5.5 0 1 1 .707.708L7.167 9.5l1.646 1.646a.5.5 0 0 1-.707.708l-1.929-1.93a.6.6 0 0 1 0-.848l1.93-1.93Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i16a5c6-f)",
    fillRule: "evenodd",
    d: "M17.5 23a3.5 3.5 0 0 0 3.5-3.5v-15A3.5 3.5 0 0 0 17.5 1h-11A3.5 3.5 0 0 0 3 4.5v15.625h.003A3 3 0 0 0 6 23zm0-1a2.5 2.5 0 0 0 2.5-2.5v-.05a3.5 3.5 0 0 1-2.5 1.05h-11a.5.5 0 0 1 0-1h11A2.5 2.5 0 0 0 20 17v-.05A3.5 3.5 0 0 1 17.5 18H6a2 2 0 1 0 0 4zM4 17.764A3 3 0 0 1 6 17h11.5a2.5 2.5 0 0 0 2.5-2.5v-10A2.5 2.5 0 0 0 17.5 2h-11A2.5 2.5 0 0 0 4 4.5z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "i16a5c6-a",
    x1: 8.222,
    x2: 11.477,
    y1: 1.5,
    y2: 22.581,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#EBEBEB"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i16a5c6-c",
    x1: 6,
    x2: 14.649,
    y1: 5,
    y2: 16.491,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#4BA446"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#3F7D35"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i16a5c6-d",
    x1: 6,
    x2: 14.649,
    y1: 5,
    y2: 16.491,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#4BA446"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#3F7D35"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i16a5c6-e",
    x1: 6,
    x2: 14.649,
    y1: 5,
    y2: 16.491,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#4BA446"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#3F7D35"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i16a5c6-f",
    x1: 8.813,
    x2: 12.402,
    y1: 1,
    y2: 23.026,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#BBB"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#888"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "i16a5c6-b",
    cx: 0,
    cy: 0,
    r: 1,
    gradientTransform: "rotate(61.645 -1.375 10.968)scale(18.8916 14.8045)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.177,
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#B8B8B8"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgNotebook24Item);

export { ForwardRef as default };
