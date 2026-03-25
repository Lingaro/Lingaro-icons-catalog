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
var SvgTextNumber1220Regular = function SvgTextNumber1220Regular(_a, ref) {
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
    d: "M6.236 6.06a.5.5 0 0 1 .264.44v6a.5.5 0 0 1-1 0V7.434l-.723.482a.5.5 0 0 1-.554-.832l1.5-1a.5.5 0 0 1 .513-.025ZM7.5 13a.625.625 0 1 0 0-1.25.625.625 0 0 0 0 1.25m3.763-5.942a1.1 1.1 0 0 0-.43-.055 1 1 0 0 1-.065 0 1.215 1.215 0 0 0-1.184.708.5.5 0 1 1-.91-.415 2.215 2.215 0 0 1 2.125-1.293 2.11 2.11 0 0 1 2.183 1.734.5.5 0 0 1 .03.17v.075c.004.25.01.692-.216 1.156-.256.528-.77 1.02-1.7 1.442-.992.448-1.358.94-1.498 1.255l-.03.071h2.944a.5.5 0 1 1 0 1h-3.5a.5.5 0 0 1-.49-.395v-.007l-.003-.01a1 1 0 0 1-.013-.1 2 2 0 0 1-.004-.234 2.1 2.1 0 0 1 .182-.732c.26-.583.833-1.232 2-1.76.792-.357 1.089-.712 1.213-.967.112-.23.116-.435.115-.674a1.11 1.11 0 0 0-.75-.969Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTextNumber1220Regular);

export { ForwardRef as default };
