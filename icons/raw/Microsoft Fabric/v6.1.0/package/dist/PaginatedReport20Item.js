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
var SvgPaginatedReport20Item = function SvgPaginatedReport20Item(_a, ref) {
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
    fill: "url(#ib8cac3-a)",
    d: "M4 5.5A2.5 2.5 0 0 1 6.5 3h9A2.5 2.5 0 0 1 18 5.5v9a4.5 4.5 0 0 1-4.5 4.5h-7A2.5 2.5 0 0 1 4 16.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ib8cac3-b)",
    fillOpacity: 0.2,
    d: "M4 5.5A2.5 2.5 0 0 1 6.5 3h9A2.5 2.5 0 0 1 18 5.5v9a4.5 4.5 0 0 1-4.5 4.5h-7A2.5 2.5 0 0 1 4 16.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ib8cac3-c)",
    fillRule: "evenodd",
    d: "M15.5 4h-9A1.5 1.5 0 0 0 5 5.5v11A1.5 1.5 0 0 0 6.5 18h7a3.5 3.5 0 0 0 3.5-3.5v-9A1.5 1.5 0 0 0 15.5 4m-9-1A2.5 2.5 0 0 0 4 5.5v11A2.5 2.5 0 0 0 6.5 19h7a4.5 4.5 0 0 0 4.5-4.5v-9A2.5 2.5 0 0 0 15.5 3z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ib8cac3-d)",
    d: "M2 3.5A2.5 2.5 0 0 1 4.5 1h9A2.5 2.5 0 0 1 16 3.5v11a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 14.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ib8cac3-e)",
    fillOpacity: 0.2,
    d: "M2 3.5A2.5 2.5 0 0 1 4.5 1h9A2.5 2.5 0 0 1 16 3.5v11a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 14.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ib8cac3-f)",
    fillRule: "evenodd",
    d: "M13.5 2h-9A1.5 1.5 0 0 0 3 3.5v11A1.5 1.5 0 0 0 4.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 13.5 2m-9-1A2.5 2.5 0 0 0 2 3.5v11A2.5 2.5 0 0 0 4.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 1z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ib8cac3-g)",
    d: "M9 4.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ib8cac3-h)",
    d: "M9 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ib8cac3-i)",
    d: "M4.5 10a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ib8cac3-j)",
    d: "M4 13.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#ib8cac3-k)",
    d: "M5 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "ib8cac3-a",
    x1: 7.889,
    x2: 10.191,
    y1: 3,
    y2: 19.116,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#EBEBEB"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "ib8cac3-c",
    x1: 8.521,
    x2: 10.97,
    y1: 3,
    y2: 19.071,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#BBB"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#888"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "ib8cac3-d",
    x1: 5.889,
    x2: 8.191,
    y1: 1,
    y2: 17.116,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#EBEBEB"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "ib8cac3-f",
    x1: 6.521,
    x2: 8.97,
    y1: 1,
    y2: 17.071,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#BBB"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#888"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "ib8cac3-g",
    x1: 4,
    x2: 14,
    y1: 4,
    y2: 14,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C28400"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#A86500"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "ib8cac3-h",
    x1: 4,
    x2: 14,
    y1: 4,
    y2: 14,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C28400"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#A86500"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "ib8cac3-i",
    x1: 4,
    x2: 14,
    y1: 4,
    y2: 14,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C28400"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#A86500"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "ib8cac3-j",
    x1: 4,
    x2: 14,
    y1: 4,
    y2: 14,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C28400"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#A86500"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "ib8cac3-k",
    x1: 4,
    x2: 14,
    y1: 4,
    y2: 14,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C28400"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#A86500"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "ib8cac3-b",
    cx: 0,
    cy: 0,
    r: 1,
    gradientTransform: "rotate(59.744 -2.003 10.959)scale(14.6642 11.9669)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.177,
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#B8B8B8"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "ib8cac3-e",
    cx: 0,
    cy: 0,
    r: 1,
    gradientTransform: "rotate(59.744 -1.262 8.218)scale(14.6642 11.9669)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.177,
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#B8B8B8"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgPaginatedReport20Item);

export { ForwardRef as default };
