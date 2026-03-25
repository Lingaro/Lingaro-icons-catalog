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
var SvgGraphIntelligence16Filled = function SvgGraphIntelligence16Filled(_a, ref) {
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
    d: "M8.536 10.415c.578-.036 1.104-.023 1.516.072.203.046.358.108.474.18.302.427.474.943.474 1.532C11 13.746 9.722 15 8.163 15S5.5 13.688 5.5 12.14c0-.468-.07-.937-.26-1.342q.124-.003.255-.01c.332-.018.828-.098 1.343-.175a21 21 0 0 1 1.698-.198M5.564 4.5a.2.2 0 0 1 .116.033c.055.035.13.106.227.25.098.145.196.324.317.55.116.219.251.474.413.732.292.466.682.96 1.263 1.362-.225.144-.4.383-.4.823 0 .383.09.609.217.762.13.156.347.294.714.408-.605.04-1.216.127-1.74.205-.555.083-.983.15-1.253.164l-.004.001C3.504 9.91 3 9.3 2.94 9.192a.5.5 0 0 0-.077-.105C2.625 8.63 2.5 8.092 2.5 7.5c0-.905.334-1.685.914-2.226.515-.481 1.2-.75 1.953-.774a.5.5 0 0 0 .138.004L5.56 4.5zM9.827 1c1.67 0 3.084 1.415 3.084 3.147 0 1.05-.46 1.92-1.208 2.48a3.36 3.36 0 0 1-1.366.593c-.751-.07-1.299-.264-1.711-.513-.519-.313-.865-.732-1.142-1.174-.14-.223-.259-.447-.379-.67a7 7 0 0 0-.37-.641l-.014-.02c.037-.173.082-.378.14-.637.179-.815.523-1.467 1.047-1.914C8.436 1.2 9.097 1 9.828 1Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgGraphIntelligence16Filled);

export { ForwardRef as default };
