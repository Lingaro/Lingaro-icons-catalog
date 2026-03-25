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
var SvgDocumentPq32Regular = function SvgDocumentPq32Regular(_a, ref) {
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
    d: "M8 2.001a3 3 0 0 0-3 3v13h2v-13a1 1 0 0 1 1-1h9v5a3 3 0 0 0 3 3h5v15a1 1 0 0 1-1 1h-2.125q.085.28.125.6c.06.481.012.962-.145 1.4H24a3 3 0 0 0 3-3V10.829a3 3 0 0 0-.879-2.12l-5.828-5.83a3 3 0 0 0-2.121-.878zm16.586 8H20a1 1 0 0 1-1-1V4.415z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 20.001h2a3 3 0 0 1 3 3 3 3 0 0 1-3 3H6v3a.999.999 0 0 1-1.708.708A1 1 0 0 1 4 29.001v-8a1 1 0 0 1 1-1m1 4h1a.999.999 0 0 0 .708-1.708A1 1 0 0 0 7 22.001H6zm9-3.997a4 4 0 0 0-4 4v2a4 4 0 0 0 6.498 3.124l.902.676a1 1 0 0 0 1.2-1.6l-.902-.676A4 4 0 0 0 19 26.004v-2a4 4 0 0 0-4-4m.6 5.2a1 1 0 1 0-1.2 1.6l1.386 1.04A2 2 0 0 1 13 26.003v-2a2 2 0 0 1 4 0v2q0 .12-.014.24l-1.386-1.04Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDocumentPq32Regular);

export { ForwardRef as default };
