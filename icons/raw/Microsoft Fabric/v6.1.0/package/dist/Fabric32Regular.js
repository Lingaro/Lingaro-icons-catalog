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
var SvgFabric32Regular = function SvgFabric32Regular(_a, ref) {
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
    d: "M29.961 3.417a1.116 1.116 0 0 0-1.218-1.408L10.75 4.668a5.03 5.03 0 0 0-4.045 3.636L2.197 24.802a3.948 3.948 0 0 0 3.306 5.147 6.6 6.6 0 0 0 1.884-.027l3.23-.446a2.05 2.05 0 0 0 1.695-1.49l1.463-5.375 5.114-.76c.47-.07.85-.418.97-.87l1.667-6.911 4.966-.734c.449-.061.813-.39.927-.82zM8.634 8.83a3.03 3.03 0 0 1 2.421-2.185L27.671 4.19l-2.029 7.251-17.48 2.662q-.59.107-1.064.237zM6.329 17.1a4 4 0 0 0-.1.293l-1.2 4.528 13.02-1.964 1.324-5.489-10.885 1.608c-1.217.223-1.695.482-1.889.634-.09.07-.175.158-.27.39m-2.328 8.934c0-.243.044-.472.122-.683.084-.213.583-1.348 2.435-1.653l5.049-.735-1.225 4.498a.05.05 0 0 1-.038.035l-3.247.448c-.543.08-.974.075-1.309.027l-.032-.005-.033-.004a1.94 1.94 0 0 1-1.722-1.928",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgFabric32Regular);

export { ForwardRef as default };
