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
var SvgIotPerson20Regular = function SvgIotPerson20Regular(_a, ref) {
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
    d: "M16 3.991a2 2 0 0 1-2.647 1.893l-1.284 1.943c.356.34.628.765.784 1.243a3 3 0 0 0-.93.378 2 2 0 1 0-1.422 2.489L10.5 12c0 .35.06.687.17 1h-.195l-.012-.036a3 3 0 0 1-2.874-1.18l-1.635.788a2 2 0 1 1-.452-.892l1.633-.787a3 3 0 0 1 .637-2.902l-.935-1.174a2 2 0 1 1 .775-.632l.944 1.185A3 3 0 0 1 10 7c.442 0 .862.095 1.24.267l1.278-1.933A2 2 0 1 1 16 3.99Zm-1 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0M6 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-1 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-2 7c2.5 0 3.5-1.255 3.5-2.5a1.5 1.5 0 0 0-1.5-1.5h-4a1.5 1.5 0 0 0-1.5 1.5c0 1.25 1 2.5 3.5 2.5"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgIotPerson20Regular);

export { ForwardRef as default };
