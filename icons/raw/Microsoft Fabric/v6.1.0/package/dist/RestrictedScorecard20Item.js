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
var SvgRestrictedScorecard20Item = function SvgRestrictedScorecard20Item(_a, ref) {
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
    clipPath: "url(#idd9334-a)"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "idd9334-b",
    width: 21,
    height: 20,
    x: 0,
    y: 0,
    maskUnits: "userSpaceOnUse",
    style: {
      maskType: "luminance"
    }
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M20.5 0H.5v20h20z"
  })), /*#__PURE__*/React.createElement("g", {
    mask: "url(#idd9334-b)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "url(#idd9334-c)",
    d: "M2.5 4.5A2.5 2.5 0 0 1 5 2h11a2.5 2.5 0 0 1 2.5 2.5v11A2.5 2.5 0 0 1 16 18H5a2.5 2.5 0 0 1-2.5-2.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#idd9334-d)",
    fillOpacity: 0.2,
    d: "M2.5 4.5A2.5 2.5 0 0 1 5 2h11a2.5 2.5 0 0 1 2.5 2.5v11A2.5 2.5 0 0 1 16 18H5a2.5 2.5 0 0 1-2.5-2.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#idd9334-e)",
    fillRule: "evenodd",
    d: "M16 3H5a1.5 1.5 0 0 0-1.5 1.5v11A1.5 1.5 0 0 0 5 17h11a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 16 3M5 2a2.5 2.5 0 0 0-2.5 2.5v11A2.5 2.5 0 0 0 5 18h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 16 2z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#idd9334-f)",
    fillRule: "evenodd",
    d: "M8.559 5c-.565 0-1.027.443-1.057 1h-.645C6.107 6 5.5 6.608 5.5 7.357A2.643 2.643 0 0 0 8.143 10h.12a3 3 0 0 0 1.737.959V12.5h-.9a1.6 1.6 0 0 0-1.6 1.6c0 .22.18.4.4.4h5.2a.4.4 0 0 0 .4-.4 1.6 1.6 0 0 0-1.6-1.6H11v-1.541A3 3 0 0 0 12.736 10h.121A2.643 2.643 0 0 0 15.5 7.357c0-.75-.608-1.357-1.357-1.357h-.645c-.03-.557-.492-1-1.057-1H8.56ZM13.5 7v1a3 3 0 0 1-.145.923A1.64 1.64 0 0 0 14.5 7.357.357.357 0 0 0 14.143 7zM7.645 8.923A3 3 0 0 1 7.5 8V7h-.643a.357.357 0 0 0-.357.357c0 .734.48 1.355 1.145 1.566",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#F5F5F5",
    d: "M20.5 15a5 5 0 1 0-10 0 5 5 0 0 0 10 0"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#idd9334-g)",
    fillRule: "evenodd",
    d: "M17.965 13.29a3 3 0 0 1-4.176 4.176zm-.7-.716-4.19 4.191a3 3 0 0 1 4.191-4.191ZM15.5 11a4 4 0 1 1 0 8 4 4 0 0 1 0-8",
    clipRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "idd9334-c",
    x1: 6.944,
    x2: 8.968,
    y1: 2,
    y2: 18.192,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#EBEBEB"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "idd9334-e",
    x1: 7.667,
    x2: 9.821,
    y1: 2,
    y2: 18.157,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#BBB"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#888"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "idd9334-f",
    x1: 5.5,
    x2: 14.988,
    y1: 5,
    y2: 14.987,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C28400"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#A86500"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "idd9334-g",
    x1: 11.5,
    x2: 19.5,
    y1: 11,
    y2: 19,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C28400"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#A86500"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "idd9334-d",
    cx: 0,
    cy: 0,
    r: 1,
    gradientTransform: "rotate(56.31 -1.956 10.194)scale(15.2234 13.1741)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.177,
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#B8B8B8"
  })), /*#__PURE__*/React.createElement("clipPath", {
    id: "idd9334-a"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M.5 0h20v20H.5z"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgRestrictedScorecard20Item);

export { ForwardRef as default };
