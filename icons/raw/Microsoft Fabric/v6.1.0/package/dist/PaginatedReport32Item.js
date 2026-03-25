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
var SvgPaginatedReport32Item = function SvgPaginatedReport32Item(_a, ref) {
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
    fill: "url(#i712f6f-a)",
    d: "M27 7.5A3.5 3.5 0 0 0 23.5 4h-13A3.5 3.5 0 0 0 7 7.5v19a3.5 3.5 0 0 0 3.5 3.5H22a5 5 0 0 0 5-5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i712f6f-b)",
    d: "M26 7.5A2.5 2.5 0 0 0 23.5 5h-13A2.5 2.5 0 0 0 8 7.5v19a2.5 2.5 0 0 0 2.5 2.5h11.25A4.25 4.25 0 0 0 26 24.75z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i712f6f-c)",
    fillOpacity: 0.2,
    d: "M26 7.5A2.5 2.5 0 0 0 23.5 5h-13A2.5 2.5 0 0 0 8 7.5v19a2.5 2.5 0 0 0 2.5 2.5h11.25A4.25 4.25 0 0 0 26 24.75z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i712f6f-d)",
    d: "M8.5 2h13A3.5 3.5 0 0 1 25 5.5v19a3.5 3.5 0 0 1-3.5 3.5h-13A3.5 3.5 0 0 1 5 24.5v-19A3.5 3.5 0 0 1 8.5 2"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i712f6f-e)",
    d: "M8.5 3h13A2.5 2.5 0 0 1 24 5.5v19a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 6 24.5v-19A2.5 2.5 0 0 1 8.5 3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i712f6f-f)",
    fillOpacity: 0.2,
    d: "M8.5 3h13A2.5 2.5 0 0 1 24 5.5v19a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 6 24.5v-19A2.5 2.5 0 0 1 8.5 3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i712f6f-g)",
    d: "M10 8a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i712f6f-h)",
    d: "M16.5 9a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i712f6f-i)",
    d: "M16.5 12a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i712f6f-j)",
    d: "M9 15.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i712f6f-k)",
    d: "M9.5 18a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i712f6f-l)",
    d: "M9 21.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "i712f6f-a",
    x1: 20.542,
    x2: 16.045,
    y1: 4,
    y2: 29.943,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#BBB"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#888"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i712f6f-b",
    x1: 21,
    x2: 17,
    y1: 5,
    y2: 29,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#EBEBEB"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i712f6f-d",
    x1: 18.542,
    x2: 14.045,
    y1: 2,
    y2: 27.943,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#BBB"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#888"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i712f6f-e",
    x1: 19,
    x2: 15,
    y1: 3,
    y2: 27,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#EBEBEB"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i712f6f-g",
    x1: 9,
    x2: 22.835,
    y1: 8,
    y2: 19.859,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C28400"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#A86500"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i712f6f-h",
    x1: 9,
    x2: 22.835,
    y1: 8,
    y2: 19.859,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C28400"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#A86500"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i712f6f-i",
    x1: 9,
    x2: 22.835,
    y1: 8,
    y2: 19.859,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C28400"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#A86500"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i712f6f-j",
    x1: 9,
    x2: 22.835,
    y1: 8,
    y2: 19.859,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C28400"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#A86500"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i712f6f-k",
    x1: 9,
    x2: 22.835,
    y1: 8,
    y2: 19.859,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C28400"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#A86500"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i712f6f-l",
    x1: 9,
    x2: 22.835,
    y1: 8,
    y2: 19.859,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C28400"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#A86500"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "i712f6f-c",
    cx: 0,
    cy: 0,
    r: 1,
    gradientTransform: "rotate(116.565 6.649 11.883)scale(21.2426 15.932)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.177,
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#B8B8B8"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "i712f6f-f",
    cx: 0,
    cy: 0,
    r: 1,
    gradientTransform: "rotate(116.565 6.267 10.265)scale(21.2426 15.932)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.177,
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#B8B8B8"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgPaginatedReport32Item);

export { ForwardRef as default };
