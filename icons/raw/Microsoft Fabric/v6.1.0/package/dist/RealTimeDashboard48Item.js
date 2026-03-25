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
var SvgRealTimeDashboard48Item = function SvgRealTimeDashboard48Item(_a, ref) {
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
    fill: "url(#ic05dbe-a)",
    d: "M5 10a5 5 0 0 1 5-5h28a5 5 0 0 1 5 5v28a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ic05dbe-b)",
    fillOpacity: 0.2,
    d: "M5 10a5 5 0 0 1 5-5h28a5 5 0 0 1 5 5v28a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ic05dbe-c)",
    fillRule: "evenodd",
    d: "M38 6H10a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V10a4 4 0 0 0-4-4M10 5a5 5 0 0 0-5 5v28a5 5 0 0 0 5 5h28a5 5 0 0 0 5-5V10a5 5 0 0 0-5-5z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ic05dbe-d)",
    d: "M24 36c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#F5BCD8",
    d: "M27.699 16.585a.75.75 0 0 1-.971.427 7.502 7.502 0 0 0-8.031 12.291.75.75 0 0 1-1.06 1.061 9 9 0 0 1 9.635-14.75.75.75 0 0 1 .427.971m2.429 1.144a.75.75 0 0 0-.953-.017l-.265.21a500 500 0 0 0-2.865 2.297c-.799.646-1.617 1.315-2.27 1.862-.327.273-.615.519-.841.718a6 6 0 0 0-.515.492 2.25 2.25 0 1 0 3.422 2.922c.108-.127.256-.349.406-.585.16-.254.358-.578.577-.943.438-.731.97-1.644 1.483-2.534a447 447 0 0 0 1.82-3.19l.167-.293a.75.75 0 0 0-.166-.94Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#F5F5F5",
    fillRule: "evenodd",
    d: "M33.156 43.664a1.5 1.5 0 1 0 2.121 2.122l.624-.624a1.5 1.5 0 0 0 2.558.977l2.121-2.12c.227-.227.366-.508.417-.8l1.456 1.42c.95.926 2.547.253 2.547-1.075V35.5a1.5 1.5 0 0 0-1.5-1.5h-8.27c-1.346 0-2.011 1.635-1.048 2.574l1.43 1.395a1.5 1.5 0 0 0-.688.392l-2.121 2.122a1.5 1.5 0 0 0 .976 2.558z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ic05dbe-e)",
    d: "M44 35.5a.5.5 0 0 0-.5-.5h-8.271a.5.5 0 0 0-.35.858l8.272 8.064a.5.5 0 0 0 .849-.358z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ic05dbe-f)",
    d: "M38.105 41.543a.5.5 0 1 0-.707-.707l-3.535 3.535a.5.5 0 1 0 .707.707z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ic05dbe-g)",
    d: "m33.51 41.19 2.12-2.122a.5.5 0 0 1 .708.707l-2.121 2.122a.5.5 0 1 1-.708-.707Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ic05dbe-h)",
    d: "m39.166 42.604-2.121 2.121a.5.5 0 1 0 .707.707l2.121-2.12a.5.5 0 1 0-.707-.708"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "ic05dbe-a",
    x1: 15.556,
    x2: 20.362,
    y1: 5,
    y2: 43.455,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#EBEBEB"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "ic05dbe-c",
    x1: 17.271,
    x2: 22.387,
    y1: 5,
    y2: 43.373,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#BBB"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#888"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "ic05dbe-d",
    x1: 12,
    x2: 36,
    y1: 12,
    y2: 36,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#E03F8F"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#BD1E7B"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "ic05dbe-e",
    x1: 33.363,
    x2: 43.942,
    y1: 35,
    y2: 45.637,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#E03F8F"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#BD1E7B"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "ic05dbe-f",
    x1: 33.363,
    x2: 43.942,
    y1: 35,
    y2: 45.637,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#E03F8F"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#BD1E7B"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "ic05dbe-g",
    x1: 33.363,
    x2: 43.942,
    y1: 35,
    y2: 45.637,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#E03F8F"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#BD1E7B"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "ic05dbe-h",
    x1: 33.363,
    x2: 43.942,
    y1: 35,
    y2: 45.637,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#E03F8F"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#BD1E7B"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "ic05dbe-b",
    cx: 0,
    cy: 0,
    r: 1,
    gradientTransform: "rotate(56.31 -5.347 23.46)scale(36.1557 31.2886)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.177,
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#B8B8B8"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgRealTimeDashboard48Item);

export { ForwardRef as default };
