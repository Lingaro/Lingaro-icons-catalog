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
var SvgOneLake16Regular = function SvgOneLake16Regular(_a, ref) {
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
    d: "M14.805 8.72c0-2.81-1.65-5.14-4.12-5.79-.11-.44-.33-.85-.67-1.19-.87-.87-2.23-.96-3.31-.32 0 0-.253.164-.353.236A9.4 9.4 0 0 0 4.815 3c-.2.22-.38.46-.55.71-.37.08-.72.21-1.06.4-.99.57-1.64 1.54-1.87 2.62v-.01c-.17.87-.17 1.79.02 2.71.07.32.15.63.26.93 1.13 3.23 4.49 5.2 7.92 4.5.51-.11 1-.27 1.46-.47-.01 0-.03.02-.04.02 1.78-.65 3.15-2.21 3.64-4.14.1-.45.21-1.07.21-1.55m-1.01-.03V9c-1.002-.59-2.5-.72-3.46.27-.48.49-.97.94-1.44 1.29-.64-.68-1.29-1.53-1.84-2.58-.62-1.17-.97-2.16-1.15-2.99.85-.82 1.97-1.31 3.18-1.31 2.56 0 4.71 2.2 4.71 5.01m-5.76 2.42c-2.168.722-3.33.15-4.15-.42-.55-2.08-.19-4.28.94-6.05.15 1.07.57 2.33 1.35 3.81a13 13 0 0 0 1.86 2.66m1.3 2.77c-2.15.44-4.28-.37-5.64-1.91 1.07.47 2.4.63 3.98.32 0 0 .674-.166 1.09-.42.18-.11.64-.44.84-.59.48-.38.97-.82 1.43-1.29.76-.77 2.05-.53 2.53.24-.2.62-.55 1.24-.96 1.74-.2.23-.44.46-.67.66-.73.61-1.61 1.05-2.6 1.25",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgOneLake16Regular);

export { ForwardRef as default };
