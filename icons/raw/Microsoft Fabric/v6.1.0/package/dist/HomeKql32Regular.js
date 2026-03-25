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
var SvgHomeKql32Regular = function SvgHomeKql32Regular(_a, ref) {
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
    d: "M14.626 3.546a2 2 0 0 1 2.748 0l9.687 9.15c.6.567.939 1.354.939 2.178V17h-2v-2.126a1 1 0 0 0-.313-.726L16 4.998l-9.687 9.15a1 1 0 0 0-.313.726v11.129a1 1 0 0 0 1 .999h10.741A3 3 0 0 0 17.034 29H7c-1.657 0-3-1.342-3-2.997V14.874a3 3 0 0 1 .939-2.178z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M29.195 19h-8.054a.807.807 0 0 0-.568 1.376l8.053 8.053a.8.8 0 0 0 1.374-.57v-8.054a.8.8 0 0 0-.8-.8zm-8.1 5.341-.707.707a1.001 1.001 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 1.414M23.57 25.4a1 1 0 0 1 0 1.415l-2.83 2.829a1 1 0 0 1-1.413-1.414l2.829-2.83a1 1 0 0 1 1.414 0m1.06 2.476a1 1 0 1 1 1.414 1.415l-.707.709a1.002 1.002 0 0 1-1.631-.325 1 1 0 0 1 .217-1.09z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgHomeKql32Regular);

export { ForwardRef as default };
