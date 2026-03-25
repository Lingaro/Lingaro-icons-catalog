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
var SvgDataWarehouse64Item = function SvgDataWarehouse64Item(_a, ref) {
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
    fill: "url(#id4ad08-a)",
    d: "M10 11a7 7 0 0 1 7-7h30a7 7 0 0 1 7 7v42a7 7 0 0 1-7 7H17a7 7 0 0 1-7-7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#id4ad08-b)",
    fillOpacity: 0.2,
    d: "M10 11a7 7 0 0 1 7-7h30a7 7 0 0 1 7 7v42a7 7 0 0 1-7 7H17a7 7 0 0 1-7-7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#id4ad08-c)",
    fillRule: "evenodd",
    d: "M47 5H17a6 6 0 0 0-6 6v42a6 6 0 0 0 6 6h30a6 6 0 0 0 6-6V11a6 6 0 0 0-6-6M17 4a7 7 0 0 0-7 7v42a7 7 0 0 0 7 7h30a7 7 0 0 0 7-7V11a7 7 0 0 0-7-7z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#id4ad08-d)",
    d: "M30.9 46H43a2 2 0 0 0 2-2V30.888a2 2 0 0 0-.659-1.484l-10.999-9.942a2 2 0 0 0-2.682 0l-11.001 9.942A2 2 0 0 0 19 30.888V44a2 2 0 0 0 2 2h12.1"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#B4CDF8",
    d: "M26.5 33.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m7 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M39 35a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-5.5 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M25 41a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m15.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "id4ad08-a",
    x1: 22.222,
    x2: 31.153,
    y1: 4,
    y2: 60.135,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#EBEBEB"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "id4ad08-c",
    x1: 24.208,
    x2: 33.702,
    y1: 4,
    y2: 59.944,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#BBB"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#888"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "id4ad08-d",
    x1: 19,
    x2: 46.691,
    y1: 18.25,
    y2: 44.195,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#3477EA"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#1D53A4"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "id4ad08-b",
    cx: 0,
    cy: 0,
    r: 1,
    gradientTransform: "matrix(23.22222 44.33329 -34.16705 17.89704 24.056 18.583)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.177,
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#B8B8B8"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataWarehouse64Item);

export { ForwardRef as default };
