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
var SvgDocumentPq20Regular = function SvgDocumentPq20Regular(_a, ref) {
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
    d: "M4 4.001a2 2 0 0 1 2-2h4.586a1.5 1.5 0 0 1 1.06.44l3.915 3.914A1.5 1.5 0 0 1 16 7.415v8.586a2 2 0 0 1-2 2h-3.037a1.15 1.15 0 0 0 .037-.7 4 4 0 0 0-.084-.3H14a1 1 0 0 0 1-1v-8h-3.5a1.5 1.5 0 0 1-1.5-1.5v-3.5H6a1 1 0 0 0-1 1v8.481a2.9 2.9 0 0 0-1-.43v-8.05Zm7.5 3h3.293L11 3.208v3.293a.5.5 0 0 0 .5.5m-9 6h1a1.5 1.5 0 1 1 0 3H3v1.5a.5.5 0 1 1-1 0v-4a.5.5 0 0 1 .5-.5m.5 2h.5a.5.5 0 1 0 0-1H3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.086 13.588A2 2 0 0 1 9.5 15.002v1a2 2 0 0 1-.15.762l.45.338a.5.5 0 0 1-.6.8l-.45-.338a2 2 0 0 1-3.25-1.562v-1a2 2 0 0 1 .586-1.414M7.1 15.703a.5.5 0 0 1 .7-.1l.693.52a1 1 0 0 0 .007-.12v-1a1 1 0 0 0-2 0v1a1 1 0 0 0 1.393.92l-.693-.52a.5.5 0 0 1-.1-.7"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDocumentPq20Regular);

export { ForwardRef as default };
