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
var SvgDataWarehouse32Filled = function SvgDataWarehouse32Filled(_a, ref) {
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
    d: "M2.007 17.33c.04-.373.258-.69.56-.873l9.318-5.753a1.17 1.17 0 0 1 1.233 0l9.318 5.753c.343.203.567.573.567 1v9.258H23c0 .88.253 1.701.69 2.395h-2.598v-.008h-1.597a1.5 1.5 0 0 1-1.493-1.495V22.93a3.16 3.16 0 0 0-1.517-2.7c-1.321-.812-5.807-3.581-5.807-3.581a3.17 3.17 0 0 0-3.34-.009l-5.331 3.291zm0 5.48v2.804c0 .942.373 1.796.98 2.425l.003.003a3.5 3.5 0 0 0 2.51 1.06h10.838a3.5 3.5 0 0 1-.336-1.495V22.93c0-.42-.224-.79-.56-.993-2.646-1.629-5.825-3.593-5.825-3.593a1.17 1.17 0 0 0-1.232 0l-5.832 3.6a1.19 1.19 0 0 0-.546.867Zm27.997 3.905V11.976c0-.42-.217-.783-.546-.986L16.604 3.056a1.15 1.15 0 0 0-.595-.16c-.231 0-.441.07-.623.181A11349 11349 0 0 1 2.56 10.99a1.17 1.17 0 0 0-.553.993v2.47L10.838 9a3.17 3.17 0 0 1 3.34.008l9.296 5.74a3.15 3.15 0 0 1 1.529 2.708v9.38a2.498 2.498 0 0 0 4.993-.121z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataWarehouse32Filled);

export { ForwardRef as default };
