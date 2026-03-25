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
var SvgVariableLibrary32Item = function SvgVariableLibrary32Item(_a, ref) {
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
    fill: "url(#i0f91b1-i439d94-paint0_linear_62447_409)",
    d: "M3 6.5A3.5 3.5 0 0 1 6.5 3h19A3.5 3.5 0 0 1 29 6.5v19a3.5 3.5 0 0 1-3.5 3.5h-19A3.5 3.5 0 0 1 3 25.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i0f91b1-i439d94-paint1_radial_62447_409)",
    fillOpacity: 0.2,
    d: "M3 6.5A3.5 3.5 0 0 1 6.5 3h19A3.5 3.5 0 0 1 29 6.5v19a3.5 3.5 0 0 1-3.5 3.5h-19A3.5 3.5 0 0 1 3 25.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i0f91b1-i439d94-paint2_linear_62447_409)",
    fillRule: "evenodd",
    d: "M25.5 4h-19A2.5 2.5 0 0 0 4 6.5v19A2.5 2.5 0 0 0 6.5 28h19a2.5 2.5 0 0 0 2.5-2.5v-19A2.5 2.5 0 0 0 25.5 4m-19-1A3.5 3.5 0 0 0 3 6.5v19A3.5 3.5 0 0 0 6.5 29h19a3.5 3.5 0 0 0 3.5-3.5v-19A3.5 3.5 0 0 0 25.5 3z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i0f91b1-i439d94-paint3_linear_62447_409)",
    d: "M11.75 8.5A2.75 2.75 0 0 0 9 11.25v3.132c0 .397-.222.76-.574.942a.75.75 0 0 0 0 1.352c.352.182.574.545.574.942v3.132a2.75 2.75 0 0 0 2.75 2.75.75.75 0 0 0 0-1.5c-.69 0-1.25-.56-1.25-1.25v-3.132c0-.6-.21-1.17-.576-1.618a2.56 2.56 0 0 0 .576-1.618V11.25c0-.69.56-1.25 1.25-1.25a.75.75 0 0 0 0-1.5m8.5 0A2.75 2.75 0 0 1 23 11.25v3.132c0 .397.222.76.574.942a.75.75 0 0 1 0 1.352 1.06 1.06 0 0 0-.574.942v3.132a2.75 2.75 0 0 1-2.75 2.75.75.75 0 0 1 0-1.5c.69 0 1.25-.56 1.25-1.25v-3.132c0-.6.21-1.17.576-1.618a2.56 2.56 0 0 1-.576-1.618V11.25c0-.69-.56-1.25-1.25-1.25a.75.75 0 0 1 0-1.5m-6.14 3.564a.75.75 0 0 0-1.22.872L15.078 16l-2.188 3.064a.75.75 0 0 0 1.22.872L16 17.29l1.89 2.646a.75.75 0 0 0 1.22-.872L16.922 16l2.188-3.064a.75.75 0 0 0-1.22-.872L16 14.71z"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "i0f91b1-i439d94-paint0_linear_62447_409",
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
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "i0f91b1-i439d94-paint1_radial_62447_409",
    cx: 0,
    cy: 0,
    r: 1,
    gradientTransform: "matrix(13.7222 20.5833 -20.5833 7.71875 11.306 9.77)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.177,
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#B8B8B8"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i0f91b1-i439d94-paint2_linear_62447_409",
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
    id: "i0f91b1-i439d94-paint3_linear_62447_409",
    x1: 8,
    x2: 22.969,
    y1: 8.5,
    y2: 24.467,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#4BA446"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#3F7D35"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgVariableLibrary32Item);

export { ForwardRef as default };
