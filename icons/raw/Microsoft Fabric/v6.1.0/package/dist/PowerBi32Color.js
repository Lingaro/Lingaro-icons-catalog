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
var SvgPowerBi32Color = function SvgPowerBi32Color(_a, ref) {
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
    fill: "url(#i786d28-a)",
    d: "M27 3.177v25.646c0 .65-.527 1.177-1.177 1.177H17V3.177C17 2.527 17.527 2 18.177 2h7.646C26.473 2 27 2.527 27 3.177"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.25,
    d: "M21.5 30V10.667c0-.92-.746-1.667-1.667-1.667H17v1h2.833c.369 0 .667.299.667.667V30z",
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i786d28-b)",
    d: "M21 10.167V30H11V10.17c0-.646.524-1.17 1.17-1.17h7.663C20.478 9 21 9.522 21 10.167"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i786d28-c)",
    d: "M5 17.17v11.66c0 .646.524 1.17 1.17 1.17H15V17.167c0-.645-.522-1.167-1.167-1.167H6.17A1.17 1.17 0 0 0 5 17.17"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "i786d28-a",
    x1: 15.333,
    x2: 27.097,
    y1: 2,
    y2: 28.715,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#E6AD10"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#C87E0E"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i786d28-b",
    x1: 10.999,
    x2: 20.929,
    y1: 9,
    y2: 29.633,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#F6D751"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#E6AD10"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i786d28-c",
    x1: 4.999,
    x2: 10.444,
    y1: 16,
    y2: 29.825,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#F9E589"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#F6D751"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgPowerBi32Color);

export { ForwardRef as default };
