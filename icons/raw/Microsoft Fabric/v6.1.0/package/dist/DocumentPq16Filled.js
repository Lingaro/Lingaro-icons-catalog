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
var SvgDocumentPq16Filled = function SvgDocumentPq16Filled(_a, ref) {
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
    d: "M8 4.501v-3.5H4.5a1.5 1.5 0 0 0-1.5 1.5v6.552c.49.102.923.347 1.3.648q.066.082.127.168C4.93 9.29 5.714 9 6.5 9c.8 0 1.6.3 2.1.9.6.5.9 1.3.9 2.1v1.4c.3.2.4.5.5.9.06.24.048.481-.037.7H11.5a1.5 1.5 0 0 0 1.5-1.5V6H9.5A1.5 1.5 0 0 1 8 4.5Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 4.501v-3.25l3.75 3.75H9.5a.5.5 0 0 1-.5-.5m-2.5 5.501a2 2 0 0 0-2 2v1a2 2 0 0 0 3.25 1.562l.45.338a.5.5 0 0 0 .6-.8l-.45-.338a2 2 0 0 0 .15-.762v-1a2 2 0 0 0-2-2m.3 2.6a.5.5 0 1 0-.6.8l.693.52a1 1 0 0 1-1.393-.92v-1a1 1 0 0 1 2 0v1a1 1 0 0 1-.007.12zm-4.3-2.601h-1a.5.5 0 0 0-.5.5v4a.5.5 0 1 0 1 0v-1.5h.5a1.503 1.503 0 0 0 1.5-1.5 1.503 1.503 0 0 0-1.5-1.5m0 2H2v-1h.5a.5.5 0 1 1 0 1"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDocumentPq16Filled);

export { ForwardRef as default };
