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
var SvgPlanning20Item = function SvgPlanning20Item(_a, ref) {
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
    fill: "url(#i13e5af-i0470b7-paint0_linear_65420_297)",
    d: "M2 4.5A2.5 2.5 0 0 1 4.5 2h11A2.5 2.5 0 0 1 18 4.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 15.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i13e5af-i0470b7-paint1_radial_65420_297)",
    fillOpacity: 0.2,
    d: "M2 4.5A2.5 2.5 0 0 1 4.5 2h11A2.5 2.5 0 0 1 18 4.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 15.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i13e5af-i0470b7-paint2_linear_65420_297)",
    fillRule: "evenodd",
    d: "M15.5 3h-11A1.5 1.5 0 0 0 3 4.5v11A1.5 1.5 0 0 0 4.5 17h11a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 15.5 3m-11-1A2.5 2.5 0 0 0 2 4.5v11A2.5 2.5 0 0 0 4.5 18h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 15.5 2z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i13e5af-i0470b7-paint3_linear_65420_297)",
    d: "M10 5q.414 0 .812.066l-.372.373a1.5 1.5 0 0 0-.354.563L10 6a4 4 0 1 0 4 4l-.003-.087c.21-.074.403-.192.563-.352l.373-.373q.066.396.067.812a5 5 0 1 1-5-5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i13e5af-i0470b7-paint4_linear_65420_297)",
    d: "m10 7.879-.128.127a1.999 1.999 0 1 0 2.121 2.121l.128-.127H13a3 3 0 1 1-3-3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i13e5af-i0470b7-paint5_linear_65420_297)",
    d: "M12.647 4.647A.5.5 0 0 1 13.5 5v1.5H15a.5.5 0 0 1 .354.854l-1.5 1.5A.5.5 0 0 1 13.5 9h-1.793l-.96.959.003.041a.75.75 0 1 1-.75-.75l.04.002.96-.959V6.5a.5.5 0 0 1 .146-.353z"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "i13e5af-i0470b7-paint0_linear_65420_297",
    x1: 6.444,
    x2: 8.468,
    y1: 2,
    y2: 18.192,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#EBEBEB"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "i13e5af-i0470b7-paint1_radial_65420_297",
    cx: 0,
    cy: 0,
    r: 1,
    gradientTransform: "matrix(8.44444 12.6667 -12.6667 4.75 7.111 6.167)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.177,
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#B8B8B8"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i13e5af-i0470b7-paint2_linear_65420_297",
    x1: 7.167,
    x2: 9.321,
    y1: 2,
    y2: 18.157,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#BBB"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#888"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i13e5af-i0470b7-paint3_linear_65420_297",
    x1: 5,
    x2: 15.5,
    y1: 4.5,
    y2: 15,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#7751B8"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#5A409C"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i13e5af-i0470b7-paint4_linear_65420_297",
    x1: 5,
    x2: 15.5,
    y1: 4.5,
    y2: 15,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#7751B8"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#5A409C"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i13e5af-i0470b7-paint5_linear_65420_297",
    x1: 5,
    x2: 15.5,
    y1: 4.5,
    y2: 15,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#7751B8"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#5A409C"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgPlanning20Item);

export { ForwardRef as default };
