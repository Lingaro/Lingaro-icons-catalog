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
var SvgDataScience16Color = function SvgDataScience16Color(_a, ref) {
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
    fill: "url(#idc2c16-a)",
    d: "M8.311 14.94a.87.87 0 0 1-.794-.087c-.402-.266-.633-.875-.364-1.277l3.405-5.063 3.128 3.51a.582.582 0 0 1-.214.926z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#idc2c16-b)",
    d: "M5.568 8.88 2.254 3.892a.585.585 0 0 1 .497-.889c.08 0 .19-.014.26.014l5.388 2.534-.308.612-2.523 2.715Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#idc2c16-c)",
    d: "M7.689 14.944a.878.878 0 0 1-.416-1.302l6.472-9.744a.582.582 0 0 0-.273-.843l-5.16-1.992A.9.9 0 0 0 8 1.003a.9.9 0 0 0-.311.057L2.528 3.05a.6.6 0 0 1 .451 0l4.073 1.964c.297.154.507.44.507.794 0 .22-.08.42-.217.574l-5.024 5.64a.582.582 0 0 0 .213.928l5.161 1.99"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#idc2c16-d)",
    d: "m2.99 3.05 4.072 1.963c.242.123.42.336.483.599l6.288-2.11a.58.58 0 0 0-.347-.452l-5.16-1.99A.9.9 0 0 0 8.013 1a.9.9 0 0 0-.312.056l-5.16 1.99a.6.6 0 0 1 .451 0l-.004.004Z"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "idc2c16-a",
    x1: 8.112,
    x2: 12.013,
    y1: 10.913,
    y2: 14.188,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#292941"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.22,
    stopColor: "#114A85"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.44,
    stopColor: "#0A5BA0"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.65,
    stopColor: "#0669B6"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "idc2c16-b",
    x1: 3.553,
    x2: 7.296,
    y1: 2.319,
    y2: 7.669,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.22,
    stopColor: "#114A85"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.85,
    stopColor: "#0669B6"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "idc2c16-c",
    x1: 8,
    x2: 8,
    y1: 14.944,
    y2: 1.004,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.1,
    stopColor: "#288CD9"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.75,
    stopColor: "#3CC5EE"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "idc2c16-d",
    x1: 7.598,
    x2: 8.728,
    y1: 1.084,
    y2: 5.293,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#A1ECFF",
    stopOpacity: 0.9
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.92,
    stopColor: "#A1ECFF",
    stopOpacity: 0
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataScience16Color);

export { ForwardRef as default };
