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
var SvgCloudEndpoint20Regular = function SvgCloudEndpoint20Regular(_a, ref) {
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
    d: "M8 16.25a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 4c2.817 0 4.415 1.923 4.647 4.246h.07c1.814 0 3.283 1.512 3.283 3.377 0 1.405-.835 2.61-2.022 3.119a1.5 1.5 0 0 0-.196-1.016A2.39 2.39 0 0 0 17 11.623c0-1.32-1.028-2.377-2.282-2.377h-.071a1 1 0 0 1-.995-.9C13.45 6.325 12.109 5 10 5 7.886 5 6.551 6.316 6.348 8.345a1 1 0 0 1-.995.901h-.07C4.027 9.246 3 10.304 3 11.623 3 12.943 4.028 14 5.282 14h.013a2.8 2.8 0 0 0 0 1h-.013C3.469 15 2 13.488 2 11.623 2 9.82 3.373 8.347 5.102 8.251l.251-.005C5.587 5.908 7.183 4 10 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.322 15a1.75 1.75 0 1 0 3.356-1.001A1.75 1.75 0 0 0 6.322 15"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.686 11.264a3.6 3.6 0 0 1 1.07-.255 3.513 3.513 0 0 1 3.74 3.317l.002.04.002.133c0 1.924-1.576 3.5-3.5 3.5a3.5 3.5 0 0 1-1.314-.264.5.5 0 1 0-.372.93A4.5 4.5 0 0 0 8 19a4.48 4.48 0 0 0 3.154-1.297A4.5 4.5 0 0 0 12.473 15h2.026a.5.5 0 0 0 .501-.501.5.5 0 0 0-.5-.5h-2.027a4.514 4.514 0 0 0-4.472-4q-.854.002-1.686.336a.5.5 0 0 0 .37.93Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgCloudEndpoint20Regular);

export { ForwardRef as default };
