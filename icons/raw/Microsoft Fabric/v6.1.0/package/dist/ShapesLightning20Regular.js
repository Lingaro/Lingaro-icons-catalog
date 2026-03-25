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
var SvgShapesLightning20Regular = function SvgShapesLightning20Regular(_a, ref) {
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
    d: "M13 4c-1.459 0-2.735.78-3.434 1.948a2.2 2.2 0 0 0-.84-.543 5 5 0 0 1 9.124 3.82A1.5 1.5 0 0 0 17.057 9h-.184A4 4 0 0 0 13 4M9.013 6.864l2.592 4.489-.529 1.267L8.07 7.41A.08.08 0 0 0 8 7.37a.08.08 0 0 0-.069.04l-4.83 8.366a.08.08 0 0 0 0 .08.08.08 0 0 0 .069.04h6.883a1.5 1.5 0 0 0 1.24 1.09H3.17a1.17 1.17 0 0 1-1.014-1.755l4.83-8.367a1.17 1.17 0 0 1 2.027 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.612 16a.5.5 0 0 1 .485.621l-.435 1.738c-.12.483.462.827.826.487l4.873-4.548A.75.75 0 0 0 17.849 13h-.403a.5.5 0 0 1-.475-.658l.562-1.684a.5.5 0 0 0-.475-.658h-3.473a.5.5 0 0 0-.461.308l-2.084 5a.5.5 0 0 0 .462.692z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgShapesLightning20Regular);

export { ForwardRef as default };
