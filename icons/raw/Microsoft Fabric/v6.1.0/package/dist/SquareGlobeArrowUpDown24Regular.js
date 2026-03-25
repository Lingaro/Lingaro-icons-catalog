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
var SvgSquareGlobeArrowUpDown24Regular = function SvgSquareGlobeArrowUpDown24Regular(_a, ref) {
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
    d: "M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v7.305a2.3 2.3 0 0 0-.512-.056c-.349 0-.685.079-.988.227V6.25a1.75 1.75 0 0 0-1.75-1.75H6.25A1.75 1.75 0 0 0 4.5 6.25v11.5c0 .966.784 1.75 1.75 1.75h5.203c-.185.48-.2 1.012-.043 1.5H6.25A3.25 3.25 0 0 1 3 17.75z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.053 14.123a2.24 2.24 0 0 0-2.664-.33q.063-.626.082-1.293h2.984a5.5 5.5 0 0 1-.402 1.623M10.485 11.5c.04-1.415.248-2.669.553-3.585.171-.513.364-.893.554-1.134.194-.247.328-.281.386-.281s.191.034.385.281c.19.241.383.62.554 1.134.306.916.514 2.17.553 3.585zm-.028-4.787c-.138.265-.26.564-.368.886-.345 1.036-.565 2.4-.605 3.901H6.5a5.5 5.5 0 0 1 3.957-4.787m3.409.887a6 6 0 0 0-.368-.887 5.505 5.505 0 0 1 3.957 4.787h-2.984c-.04-1.5-.26-2.865-.605-3.9m-1.888 9.9c.057 0 .191-.034.385-.281.19-.241.383-.62.554-1.135.306-.915.514-2.17.553-3.584h-2.985c.04 1.415.248 2.669.553 3.584.171.514.364.894.554 1.135.194.247.328.281.386.281m-5.478-5a5.505 5.505 0 0 0 3.957 4.787 6 6 0 0 1-.368-.886c-.345-1.035-.565-2.4-.605-3.901zm8.46 10.28a.75.75 0 0 0 .535.22.75.75 0 0 0 .537-.22l1.938-1.938a.75.75 0 1 0-1.061-1.061l-.657.657v-4.689a.75.75 0 0 0-1.5 0v4.7l-.668-.668a.75.75 0 1 0-1.061 1.061zm6.947-4.562-.669-.668v4.7a.75.75 0 0 1-1.5 0v-4.689l-.657.657a.75.75 0 1 1-1.06-1.061l1.938-1.938a.75.75 0 0 1 .535-.22.75.75 0 0 1 .537.22l1.938 1.938a.75.75 0 1 1-1.063 1.061Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSquareGlobeArrowUpDown24Regular);

export { ForwardRef as default };
