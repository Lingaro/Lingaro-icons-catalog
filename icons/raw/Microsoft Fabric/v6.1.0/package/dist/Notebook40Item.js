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
var SvgNotebook40Item = function SvgNotebook40Item(_a, ref) {
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
    fill: "url(#ibf409d-a)",
    fillRule: "evenodd",
    d: "M9.199 2.677h21.728c1.5 0 3.073 1.046 3.073 2.59v22.777c0 .947-.591 1.88-1.395 2.46l1.038-.43-.456 5.363-2.156 2-22.281-.374-1.594-2.407-.843-1.47v-.967c-.818.44.196.472-.313 1.007V7.817c0-2.318.949-5.14 3.199-5.14",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ibf409d-b)",
    fillOpacity: 0.2,
    fillRule: "evenodd",
    d: "M9.199 2.677h21.728c1.5 0 3.073 1.046 3.073 2.59v22.777c0 .947-.591 1.88-1.395 2.46l1.038-.43-.456 5.363-2.156 2-22.281-.374-1.594-2.407-.843-1.47v-.967c-.818.44.196.472-.313 1.007V7.817c0-2.318.949-5.14 3.199-5.14",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ibf409d-c)",
    fillRule: "evenodd",
    d: "M6 33a5 5 0 0 0 5 5h19a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H10a4 4 0 0 0-4 4zm4-30h20a3 3 0 0 1 3 3v18a3.5 3.5 0 0 1-3.5 3.5h-18c-1.86 0-3.505.923-4.5 2.337V6a3 3 0 0 1 3-3M7 33a4 4 0 0 0 4 4h19a3 3 0 0 0 3-3v-2.171a4.5 4.5 0 0 1-3.5 1.671h-17a.5.5 0 0 1 0-1h17A3.5 3.5 0 0 0 33 29v-2.171a4.5 4.5 0 0 1-3.5 1.671h-18A4.5 4.5 0 0 0 7 33",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ibf409d-d)",
    d: "M22.203 8.52a.5.5 0 0 1 .335.623L18.63 22.144a.5.5 0 1 1-.957-.288l3.907-13a.5.5 0 0 1 .623-.336"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ibf409d-e)",
    d: "M15.855 11.146a.5.5 0 0 0-.707 0l-3.929 3.93a.6.6 0 0 0 0 .848l3.93 3.93a.5.5 0 0 0 .707-.708L12.208 15.5l3.646-3.646a.5.5 0 0 0 0-.708Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ibf409d-f)",
    d: "M24.853 19.854a.5.5 0 0 1-.708-.708l3.647-3.646-3.647-3.646a.5.5 0 0 1 .708-.708l3.929 3.93a.6.6 0 0 1 0 .848l-3.93 3.93Z"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "ibf409d-a",
    x1: 13.764,
    x2: 19.174,
    y1: 2.677,
    y2: 37.564,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#EBEBEB"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "ibf409d-c",
    x1: 15.042,
    x2: 21.203,
    y1: 2,
    y2: 37.944,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#BBB"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#888"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "ibf409d-d",
    x1: 11.043,
    x2: 24.63,
    y1: 8.499,
    y2: 25.883,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#4BA446"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#3F7D35"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "ibf409d-e",
    x1: 11.043,
    x2: 24.63,
    y1: 8.499,
    y2: 25.883,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#4BA446"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#3F7D35"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "ibf409d-f",
    x1: 11.043,
    x2: 24.63,
    y1: 8.499,
    y2: 25.883,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#4BA446"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#3F7D35"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "ibf409d-b",
    cx: 0,
    cy: 0,
    r: 1,
    gradientTransform: "matrix(14.78828 27.51887 -21.51471 11.56172 14.93 11.729)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.177,
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#B8B8B8"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgNotebook40Item);

export { ForwardRef as default };
