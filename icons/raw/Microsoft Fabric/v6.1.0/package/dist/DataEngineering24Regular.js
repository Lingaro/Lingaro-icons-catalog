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
var SvgDataEngineering24Regular = function SvgDataEngineering24Regular(_a, ref) {
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
    d: "M21.47 15.45c.34-.33.54-.78.56-1.26V8.75c0-1.32-1.54-2.16-2.38-.93 0 0-2.27 3.41-6.53 5.92a7.6 7.6 0 0 1-1.7-1.91l-1.19-1.89s1.03-.88 2.11-1.73c2.46-1.93 3.88-4.2 4.58-5.55.29-.54-.11-1.16-.72-1.16H8.41c-.43 0-.84.17-1.14.49L2.48 6.91c-.31.32-.48.75-.48 1.2v6.9c0 .34.1.66.27.93.06.1.13.19.21.28l4.45 4.77c.31.33.73.51 1.16.51h6.65c.41 0 .81-.18 1.11-.47zM3.49 8.12s0-.08.03-.11l4.79-4.93s.07-.05.11-.05h6.6A15.6 15.6 0 0 1 11.47 7c-2.66 2.09-4.27 3.58-5.26 4.86-1.06 1.38-1.4 2.49-1.65 3.69-.04.19-.07.38-.09.58l-.94-1.01s-.04-.07-.04-.11zm13.74 9.44-2.38 2.36c-.02.02-.05.04-.07.05H8.09s-.08-.02-.11-.05l-1.94-2.08c-.21-.62-.2-1.29-.06-1.97.35-1.66.34-2.44 3.12-4.93l1.1 1.73c1.18 1.84 2.54 2.81 4.29 3.67 1.1.55 2.26.71 3.3.66zm3.23-3.21c-1.483 1.483-3.89 1.34-5.33.63-.21-.1-.41-.22-.61-.32 1.21-.78 2.27-1.59 3.13-2.37 1.04-.94 1.83-1.82 2.37-2.47.23-.28.41-.52.55-.7v5.03c0 .06-.04.14-.11.2",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataEngineering24Regular);

export { ForwardRef as default };
