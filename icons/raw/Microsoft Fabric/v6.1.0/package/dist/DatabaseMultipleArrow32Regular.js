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
var SvgDatabaseMultipleArrow32Regular = function SvgDatabaseMultipleArrow32Regular(_a, ref) {
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
    d: "M19 28c0 1.657-3.134 3-7 3-2.59 0-4.853-.603-6.063-1.5C5.34 29.059 5 28.546 5 28v-7.327c.436.33.936.603 1.459.827 1.494.64 3.455 1 5.541 1 1.234 0 2.424-.126 3.5-.361.726-.16 1.4-.369 2-.622l.041-.017A7 7 0 0 0 19 20.673z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 2c6.075 0 11 2.239 11 5v18c0 2.708-4.736 4.913-10.648 4.997A3.47 3.47 0 0 0 21 28v-.023c2.398-.107 4.476-.592 5.95-1.262C28.805 25.872 29 25.115 29 25V9.875C27.01 11.16 23.72 12 20 12s-7.01-.84-9-2.125v3.152c-.688.038-1.36.113-2 .226v-3.01l2.121-2.122q.19-.191.338-.405c.3.287.79.635 1.59.999C14.727 9.476 17.182 10 20 10c2.82 0 5.274-.524 6.95-1.285C28.805 7.872 29 7.115 29 7s-.195-.872-2.05-1.715C25.274 4.524 22.82 4 20 4s-5.274.524-6.95 1.285c-.439.2-.785.394-1.057.576a3 3 0 0 0-.77-1.876C13.23 2.78 16.415 2 20 2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 15c1.275 0 2.47.146 3.5.401.772.192 1.45.444 2 .743.94.51 1.5 1.155 1.5 1.856 0 .7-.56 1.345-1.5 1.855-.55.299-1.228.552-2 .744-1.03.255-2.225.401-3.5.401-3.866 0-7-1.343-7-3s3.134-3 7-3M5.293 2.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 .249.414 1 1 0 0 1 .028.127Q10 5.916 10 6a1 1 0 0 1-.031.24l-.013.051a1 1 0 0 1-.165.317 1 1 0 0 1-.084.099l-3 3a1 1 0 0 1-1.414-1.414L6.586 7H5.5c-.875 0-1.46.35-1.852.86C3.234 8.398 3 9.17 3 10v4a1 1 0 0 1-2 0v-4c0-1.17.324-2.399 1.063-3.36C2.826 5.65 3.992 5 5.5 5h1.086L5.293 3.707a1 1 0 0 1 0-1.414"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabaseMultipleArrow32Regular);

export { ForwardRef as default };
