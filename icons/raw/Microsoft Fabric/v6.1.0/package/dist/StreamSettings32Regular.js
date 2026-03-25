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
var SvgStreamSettings32Regular = function SvgStreamSettings32Regular(_a, ref) {
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
    d: "M10 13.5C10 7.701 14.701 3 20.5 3H23a1 1 0 1 1 0 2h-2.5a8.5 8.5 0 0 0-8.5 8.5v1A4.5 4.5 0 0 1 7.5 19H4a1 1 0 1 1 0-2h3.5a2.5 2.5 0 0 0 2.5-2.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 8a6.5 6.5 0 0 0-6.5 6.5v1.188q0 .052.005.102a1 1 0 0 0-.005.103v.607A5.5 5.5 0 0 1 9 22H4a1 1 0 1 0 0 2h5a7.48 7.48 0 0 0 5.26-2.153 9 9 0 0 1 2.106-3.93q.133-.688.134-1.417v-.607q0-.052-.005-.103.005-.05.005-.102V14.5A4.5 4.5 0 0 1 21 10h7a1 1 0 1 0 0-2zm-6.774 18.012a8.8 8.8 0 0 1-4.063.988H9a1 1 0 1 0 0 2h1.163c1.696 0 3.301-.39 4.731-1.085a9 9 0 0 1-.668-1.902Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 15.935a9 9 0 0 1 2.524-.815A1 1 0 0 1 22 15h6a1 1 0 1 0 0-2h-6a3 3 0 0 0-3 2.935m-.657 4.101a1.52 1.52 0 0 1-1.117 1.928l-1.536.35a7.5 7.5 0 0 0-.04 3.19l1.698.423a1.52 1.52 0 0 1 1.096 1.892l-.496 1.724a7.5 7.5 0 0 0 2.75 1.597l1.26-1.3a1.53 1.53 0 0 1 2.193 0l1.236 1.272a7.5 7.5 0 0 0 2.737-1.635l-.467-1.514a1.52 1.52 0 0 1 1.117-1.927l1.536-.351a7.5 7.5 0 0 0 .04-3.189l-1.698-.423a1.52 1.52 0 0 1-1.096-1.893l.496-1.724a7.5 7.5 0 0 0-2.75-1.596l-1.26 1.3a1.53 1.53 0 0 1-2.193 0l-1.236-1.272a7.5 7.5 0 0 0-2.737 1.635zM25 24a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgStreamSettings32Regular);

export { ForwardRef as default };
