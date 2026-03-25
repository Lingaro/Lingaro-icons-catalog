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
var SvgMyWorkspace64NonItem = function SvgMyWorkspace64NonItem(_a, ref) {
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
    fill: "url(#i0f1049-a)",
    fillRule: "evenodd",
    d: "M19.5 18.5C19.5 11.596 25.096 6 32 6s12.5 5.596 12.5 12.5C44.5 25.403 38.904 31 32 31s-12.5-5.597-12.5-12.5M32 5c-7.456 0-13.5 6.044-13.5 13.5S24.544 32 32 32s13.5-6.044 13.5-13.5S39.456 5 32 5M15.214 54.56C10.879 51.8 8 47.857 8 43.332v-1.041A6.29 6.29 0 0 1 14.292 36h35.416A6.29 6.29 0 0 1 56 42.292v1.041c0 4.525-2.88 8.468-7.214 11.226C44.44 57.325 38.502 59 32 59s-12.44-1.675-16.786-4.44M14.292 35A7.29 7.29 0 0 0 7 42.292v1.041c0 4.987 3.172 9.203 7.677 12.07C19.207 58.285 25.337 60 32 60s12.793-1.715 17.323-4.597C53.828 52.536 57 48.32 57 43.333v-1.041A7.29 7.29 0 0 0 49.708 35z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "i0f1049-a",
    x1: 7,
    x2: 61.751,
    y1: 5,
    y2: 54.774,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#209782"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#0C695A"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgMyWorkspace64NonItem);

export { ForwardRef as default };
