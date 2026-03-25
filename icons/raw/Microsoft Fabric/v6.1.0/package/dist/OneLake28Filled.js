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
var SvgOneLake28Filled = function SvgOneLake28Filled(_a, ref) {
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
    fillRule: "evenodd",
    d: "M18.04 4.2a5 5 0 0 0-.449-.513c-1.933-1.932-5.022-1.975-6.9-.097a4.7 4.7 0 0 0-.626.776c-.178.276-.229.85-.244 1.39-.045 1.542.518 3.736 2.304 6.853a20.6 20.6 0 0 0 2.86 3.87 26 26 0 0 0 1.78-1.658c2.61-2.645 7.213-2.151 9.134.847a10.3 10.3 0 0 0-.116-3.474A10.34 10.34 0 0 0 18.041 4.2Zm-4.263 13.182a22 22 0 0 1-2.954-4.027C9.51 11.063 8.774 9.153 8.476 7.548c-1.65 2.889-1.77 6.752.097 10.4 1.093.27 2.411.311 3.998 0 .282-.055.686-.232 1.206-.566M7.451 6.334a5.66 5.66 0 0 0-2.213 1.371c-2.272 2.273-2.218 6.01.12 8.348.356.356.744.659 1.155.908-1.357-3.759-.961-7.665.938-10.627m17.708 10.908a10.4 10.4 0 0 1-2.189 4.278q-.61.697-1.324 1.297l-.034.027a11.9 11.9 0 0 1-5.25 2.515C9.888 26.68 3.569 22.503 2.248 16.03a11.9 11.9 0 0 1-.03-4.653c-.09 3.292 2.765 9.448 10.614 7.907 1.357-.266 3.162-1.745 4.9-3.506 2.264-2.294 6.4-1.471 7.427 1.465Z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgOneLake28Filled);

export { ForwardRef as default };
