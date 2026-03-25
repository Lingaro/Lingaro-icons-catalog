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
var SvgNotebook64Item = function SvgNotebook64Item(_a, ref) {
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
    fill: "url(#i1be9bb-a)",
    fillRule: "evenodd",
    d: "M13.875 2.5H48.5c2.343 0 4.893 2.759 4.893 5.172v35.73c0 1.479 1.255.442 0 1.348l.348 1.671v8.704l-.348 2.563-3.018 3.5h-35l-4.313-2-1.75-4.563v-2.25s1.143-1.715.348-.88V11.654c0-3.62.7-9.154 4.215-9.154",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i1be9bb-b)",
    fillOpacity: 0.2,
    fillRule: "evenodd",
    d: "M13.875 2.5H48.5c2.343 0 4.893 2.759 4.893 5.172v35.73c0 1.479 1.255.442 0 1.348l.348 1.671v8.704l-.348 2.563-3.018 3.5h-35l-4.313-2-1.75-4.563v-2.25s1.143-1.715.348-.88V11.654c0-3.62.7-9.154 4.215-9.154",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i1be9bb-c)",
    fillRule: "evenodd",
    d: "M9.006 54.32A8 8 0 0 0 17 62h31a6 6 0 0 0 6-6V8a6 6 0 0 0-6-6H15a6 6 0 0 0-6 6v46q0 .083.002.164L9 54.32zM15 3h33a5 5 0 0 1 5 5v35.5a3.5 3.5 0 0 1-3.5 3.5H16.32A7.32 7.32 0 0 0 10 50.625V8a5 5 0 0 1 5-5m-4.998 51.164A6.32 6.32 0 0 1 16.32 48H49.5a4.5 4.5 0 0 0 3.5-1.671V50.5a3.5 3.5 0 0 1-3.5 3.5h-34a.5.5 0 0 0 0 1h34a4.5 4.5 0 0 0 3.5-1.671V56a5 5 0 0 1-5 5H17a7 7 0 0 1-6.998-6.836",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i1be9bb-d)",
    d: "M34.926 14.02a.5.5 0 0 1 .337.623l-6.534 22a.5.5 0 1 1-.958-.285l6.533-22a.5.5 0 0 1 .622-.337Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i1be9bb-e)",
    d: "M24.854 18.146a.5.5 0 0 0-.708 0l-6.929 6.93a.6.6 0 0 0 0 .848l6.93 6.93a.5.5 0 0 0 .707-.708L18.207 25.5l6.647-6.646a.5.5 0 0 0 0-.708"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i1be9bb-f)",
    d: "M38.854 32.854a.5.5 0 0 1-.708-.708l6.647-6.646-6.647-6.646a.5.5 0 0 1 .708-.708l6.929 6.93a.6.6 0 0 1 0 .848z"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "i1be9bb-a",
    x1: 21.712,
    x2: 31.364,
    y1: 2.5,
    y2: 61.231,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#EBEBEB"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i1be9bb-c",
    x1: 23.531,
    x2: 34.158,
    y1: 2,
    y2: 61.777,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#BBB"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#888"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i1be9bb-d",
    x1: 17.041,
    x2: 39.452,
    y1: 14,
    y2: 42.176,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#4BA446"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#3F7D35"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i1be9bb-e",
    x1: 17.041,
    x2: 39.452,
    y1: 14,
    y2: 42.176,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#4BA446"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#3F7D35"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i1be9bb-f",
    x1: 17.041,
    x2: 39.452,
    y1: 14,
    y2: 42.176,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#4BA446"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#3F7D35"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "i1be9bb-b",
    cx: 0,
    cy: 0,
    r: 1,
    gradientTransform: "rotate(63.112 -2.692 28.083)scale(52.0928 39.3979)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.177,
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#B8B8B8"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgNotebook64Item);

export { ForwardRef as default };
