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
var SvgSquareDatabaseArrowUpDown24Filled = function SvgSquareDatabaseArrowUpDown24Filled(_a, ref) {
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
    d: "M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v7.305a2.3 2.3 0 0 0-.512-.056c-.602 0-1.168.235-1.588.659l-1.187 1.187a2.255 2.255 0 0 0-2.213-1.846V11.42a4 4 0 0 1-.529.363c-.81.462-1.863.717-2.971.717s-2.16-.255-2.971-.717a4 4 0 0 1-.529-.363v3.08c0 1.105 1.567 2 3.5 2 .44 0 .861-.046 1.25-.131v1.712A2.253 2.253 0 0 0 11.41 21H6.25A3.25 3.25 0 0 1 3 17.75zm9 1.25c-1.933 0-3.5.895-3.5 2s1.567 2 3.5 2 3.5-.895 3.5-2-1.567-2-3.5-2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.96 22.78a.75.75 0 0 0 .535.22.75.75 0 0 0 .537-.22l1.938-1.938a.75.75 0 1 0-1.061-1.061l-.657.657v-4.689a.75.75 0 0 0-1.5 0v4.7l-.668-.668a.75.75 0 1 0-1.061 1.061zm6.947-4.562-.669-.668v4.7a.75.75 0 0 1-1.5 0v-4.689l-.657.657a.75.75 0 1 1-1.06-1.061l1.938-1.938a.75.75 0 0 1 .535-.22.75.75 0 0 1 .537.22l1.938 1.938a.75.75 0 1 1-1.063 1.061Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSquareDatabaseArrowUpDown24Filled);

export { ForwardRef as default };
