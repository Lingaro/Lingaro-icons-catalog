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
var SvgFabric48Regular = function SvgFabric48Regular(_a, ref) {
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
    d: "M42.4 4c-.07 0-.19.022-.19.022L16.502 7.82a7.2 7.2 0 0 0-5.781 5.189L4.16 37.064c.03-.12-.04.12 0 0-.09.41-.16.83-.16 1.27a5.62 5.62 0 0 0 5.001 5.588c.79.11 1.69.11 2.69-.04l4.612-.64c1.16-.16 2.11-1 2.42-2.13l2.381-8.787 3.541-.53 3.411-.5c.67-.1 1.22-.6 1.39-1.24l2.751-10.067 5.642-.83v-.02l1.59-.24c.64-.09 1.16-.56 1.32-1.17L43.94 6.021A1.59 1.59 0 0 0 42.4 4M16.323 40.463a.43.43 0 0 1-.35.31l-4.621.64h-.01c-.8.12-1.45.11-1.97.04h-.04l-.04-.01a3.13 3.13 0 0 1-2.651-4.01c.52-1.49 1.27-2.559 3.47-3.279.56-.18 1.22-.34 1.991-.48l6.312-.94-2.09 7.729ZM27.52 27.65a2 2 0 0 1-1.642 1.455l-3.163.46-12.633 1.87c-.75.14-1.39.29-1.951.47l1.27-4.649.01-.09c.03-.08.07-.23.13-.42l-.14.51c.56-2.02 1.11-3.39 3.771-4.259.56-.18 1.22-.34 1.99-.48l14.324-2.11zm10.979-11.121-2.681.4-22.666 3.349c-.75.14-1.4.29-1.95.47l1.57-5.699.37-1.37a4.7 4.7 0 0 1 3.751-3.379L41.19 6.711l-2.68 9.818z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgFabric48Regular);

export { ForwardRef as default };
