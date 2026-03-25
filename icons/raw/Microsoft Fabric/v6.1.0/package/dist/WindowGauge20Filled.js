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
var SvgWindowGauge20Filled = function SvgWindowGauge20Filled(_a, ref) {
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
    d: "M6.001 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h4.022a5.6 5.6 0 0 1 0-1H6.001a2 2 0 0 1-2-2V7h12v4.022a5.5 5.5 0 0 1 1 .185V6a3 3 0 0 0-3-3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m15.601 13 .1-.1.9-.7c-.4-.1-.8-.2-1.2-.2-2.4 0-4.4 2-4.4 4.5 0 .3.2.5.5.5s.5-.2.5-.5c0-1.9 1.6-3.5 3.5-3.5zm3.5.9-.6 1c.3.5.4 1.1.4 1.7 0 .3.2.5.5.5s.5-.2.5-.5c.1-1.1-.3-2-.8-2.7m-1.165-1.434a.366.366 0 0 1 .546.466l-.08.144a398 398 0 0 1-.89 1.557c-.25.434-.51.88-.723 1.236-.107.179-.204.337-.282.46a3 3 0 0 1-.198.286 1.098 1.098 0 0 1-1.67-1.426c.053-.062.149-.15.251-.24.11-.097.251-.217.41-.35.32-.268.719-.594 1.109-.91a210 210 0 0 1 1.398-1.12z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgWindowGauge20Filled);

export { ForwardRef as default };
