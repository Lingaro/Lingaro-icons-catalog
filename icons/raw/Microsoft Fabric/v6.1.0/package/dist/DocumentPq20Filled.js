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
var SvgDocumentPq20Filled = function SvgDocumentPq20Filled(_a, ref) {
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
    d: "M10 6.501v-4.5H5.5a1.5 1.5 0 0 0-1.5 1.5v8.552c.49.102.923.347 1.3.648q.066.082.127.168C5.93 12.29 6.714 12 7.5 12c.8 0 1.6.3 2.1.9.6.5.9 1.3.9 2.1v1.4c.3.2.4.5.5.9.06.24.048.481-.037.7H14.5a1.5 1.5 0 0 0 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 10 6.5Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 6.501v-4.25l4.75 4.75H11.5a.5.5 0 0 1-.5-.5m-8.5 6.5h1a1.5 1.5 0 1 1 0 3H3v1.5a.5.5 0 1 1-1 0v-4a.5.5 0 0 1 .5-.5m.5 2h.5a.5.5 0 1 0 0-1H3zm3.086-1.413A2 2 0 0 1 9.5 15.002v1a2 2 0 0 1-.15.762l.45.338a.5.5 0 0 1-.6.8l-.45-.338a2 2 0 0 1-3.25-1.562v-1a2 2 0 0 1 .586-1.414M7.1 15.703a.5.5 0 0 1 .7-.1l.693.52a1 1 0 0 0 .007-.12v-1a1 1 0 0 0-2 0v1a1 1 0 0 0 1.393.92l-.693-.52a.5.5 0 0 1-.1-.7"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDocumentPq20Filled);

export { ForwardRef as default };
