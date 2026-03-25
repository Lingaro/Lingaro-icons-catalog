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
var SvgOneLake28Regular = function SvgOneLake28Regular(_a, ref) {
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
    d: "M13.077 12.999c-.92-1.74-1.48-3.23-1.78-4.49.88-.6 1.89-1.04 2.99-1.27 4.44-.91 8.77 1.96 9.68 6.4.19.91.21 1.81.1 2.68-1.63-1.58-4.54-1.72-6.31.06-.42.43-.85.84-1.28 1.22-1.18-1.15-2.4-2.68-3.41-4.61zm2.26 5.57a19.8 19.8 0 0 1-3.58-4.87c-1.31-2.48-1.97-4.56-2.17-6.3-2.41 3.62-2.81 8.4-.67 12.5 1.17.22 2.52.23 4.07-.08.69-.14 1.5-.59 2.36-1.24zm-7.33-11.51s.25-.48 1.62-2.17c.53-.58 1.12-1.12 1.75-1.61.31-.28.65-.51 1-.7.05-.03.11-.07.16-.1-.02.01-.03.03-.05.04 1.89-.94 4.29-.59 5.9 1.03.81.81 1.31 1.82 1.48 2.87a9.67 9.67 0 0 1 5.55 6.92c.71 3.48-.54 6.91-3 9.14.15-.16.3-.32.44-.48-.4.45-.83.88-1.29 1.27h-.02s-.01.02-.02.03a11.7 11.7 0 0 1-5.13 2.46c-5.99 1.22-11.84-2.37-13.55-8.11-.1-.33-.18-.67-.25-1.01-.17-.99-.24-1.96-.2-2.91 0-2.36 1.18-4.62 3.33-5.86.73-.42 1.5-.68 2.28-.81m8.12 17.22c-4 .82-7.93-.83-10.21-3.89 1.89 1.04 4.34 1.49 7.35.89 1-.2 1.99-.79 2.86-1.43.9-.67 1.83-1.52 2.71-2.41 1.39-1.41 3.77-.95 4.61.5a8.7 8.7 0 0 1-1.69 3.08c-.34.39-.72.76-1.12 1.1l-.01.02a10.2 10.2 0 0 1-4.47 2.14z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgOneLake28Regular);

export { ForwardRef as default };
