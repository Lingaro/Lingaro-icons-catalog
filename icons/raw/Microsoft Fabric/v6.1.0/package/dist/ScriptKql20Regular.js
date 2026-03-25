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
var SvgScriptKql20Regular = function SvgScriptKql20Regular(_a, ref) {
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
    d: "M16.563 2H6.5A2.5 2.5 0 0 0 4 4.5V13H2a1 1 0 0 0-1 1v1.688C1 17.02 2.086 18 3.375 18h4.72a1.5 1.5 0 0 1 .338-.519l.418-.417A2 2 0 0 1 8.73 17H3.375C2.593 17 2 16.425 2 15.687V14h7.086l.054-.054q.178-.174.4-.281l-.1-.105a1.5 1.5 0 0 1-.353-.56H5V4.5A1.5 1.5 0 0 1 6.5 3h8c-.29.387-.472.86-.497 1.375H14V11h1V7h3a1 1 0 0 0 1-1V4.5A2.5 2.5 0 0 0 16.562 2ZM16.5 3A1.5 1.5 0 0 1 18 4.5V6h-3V4.5c0-.828.67-1.5 1.499-1.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 12h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.853.354l-5-5A.5.5 0 0 1 10.5 12m.062 2.657a.5.5 0 0 1 0 .707l-.707.708a.5.5 0 0 1-.708-.708l.708-.707a.5.5 0 0 1 .707 0m2.827 2.829a.5.5 0 0 1 0 .707l-.707.707a.5.5 0 1 1-.707-.707l.707-.707a.5.5 0 0 1 .707 0m-1.414-1.414a.5.5 0 0 1 0 .707l-2.12 2.12a.5.5 0 1 1-.709-.706l2.122-2.121a.5.5 0 0 1 .707 0"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgScriptKql20Regular);

export { ForwardRef as default };
