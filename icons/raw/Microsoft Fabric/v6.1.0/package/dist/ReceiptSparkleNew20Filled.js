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
var SvgReceiptSparkleNew20Filled = function SvgReceiptSparkleNew20Filled(_a, ref) {
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
    d: "M5 3a2 2 0 0 0-2 2v4.6c.75-.384 1.6-.6 2.5-.6.193-.01.381-.06.555-.143a3 3 0 0 0 .578-.343q.276-.206.523-.446.212-.2.391-.429a2.6 2.6 0 0 0 .328-.539c.083-.189.126-.393.125-.6a.505.505 0 0 1 .5-.5.505.505 0 0 1 .5.5c.003.21.047.417.132.609q.127.286.32.532.165.188.4.429.24.248.523.446.275.195.578.343c.17.088.356.136.547.141a.5.5 0 0 1 0 1 1.3 1.3 0 0 0-.555.143 4 4 0 0 0-.578.351 4.4 4.4 0 0 0-.605.529A5.48 5.48 0 0 1 11 14.5c0 .9-.216 1.75-.6 2.5H14a3 3 0 0 0 3-3v-2h-3V5a2 2 0 0 0-2-2zm11 11a2 2 0 0 1-2 2v-3h2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.267 9.29a5.5 5.5 0 0 1 1.793 1.018 6 6 0 0 1 .717-.623 5 5 0 0 1 .271-.185 4.7 4.7 0 0 1-.916-.733Q8.877 8.503 8.7 8.3l-.019-.022-.017-.022a3 3 0 0 1-.164-.228l-.001.001a4.7 4.7 0 0 1-.649.761q-.278.267-.583.5M8 18.242a4.5 4.5 0 1 1-5-7.483 4.5 4.5 0 0 1 5 7.483m-2.146-6.096A.5.5 0 0 0 5 12.5V14H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H6v-1.5a.5.5 0 0 0-.146-.354"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgReceiptSparkleNew20Filled);

export { ForwardRef as default };
