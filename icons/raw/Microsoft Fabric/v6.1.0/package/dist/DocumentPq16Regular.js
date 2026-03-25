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
var SvgDocumentPq16Regular = function SvgDocumentPq16Regular(_a, ref) {
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
    d: "M3 3.001a2 2 0 0 1 2-2h3.586a1.5 1.5 0 0 1 1.06.44l2.915 2.914A1.5 1.5 0 0 1 13 5.415v7.586a2 2 0 0 1-2 2H9.963a1.15 1.15 0 0 0 .037-.7 4 4 0 0 0-.084-.3H11a1 1 0 0 0 1-1v-7H9.5a1.5 1.5 0 0 1-1.5-1.5v-2.5H5a1 1 0 0 0-1 1v6.481a2.9 2.9 0 0 0-1-.43zm6.5 2h2.293L9 2.208v2.293a.5.5 0 0 0 .5.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 10.002a2 2 0 0 0-2 2v1a2 2 0 0 0 3.25 1.562l.45.338a.5.5 0 0 0 .6-.8l-.45-.338a2 2 0 0 0 .15-.762v-1a2 2 0 0 0-2-2m.3 2.6a.5.5 0 1 0-.6.8l.693.52a1 1 0 0 1-1.393-.92v-1a1 1 0 0 1 2 0v1a1 1 0 0 1-.007.12zm-4.3-2.601h-1a.5.5 0 0 0-.5.5v4a.5.5 0 1 0 1 0v-1.5h.5a1.503 1.503 0 0 0 1.5-1.5 1.503 1.503 0 0 0-1.5-1.5m0 2H2v-1h.5a.5.5 0 1 1 0 1"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDocumentPq16Regular);

export { ForwardRef as default };
