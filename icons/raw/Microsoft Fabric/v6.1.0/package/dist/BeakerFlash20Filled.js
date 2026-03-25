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
var SvgBeakerFlash20Filled = function SvgBeakerFlash20Filled(_a, ref) {
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
    d: "M5.5 3.5A.5.5 0 0 1 6 3h8a.5.5 0 0 1 0 1h-.996v4.684q0 .212.026.422a1.5 1.5 0 0 0-.83.817L11.335 12h-5.65l.89-1.653a3.5 3.5 0 0 0 .42-1.66V4H6a.5.5 0 0 1-.5-.5m4.617 11.423L10.918 13H5.146l-.964 1.79a1.5 1.5 0 0 0 1.32 2.212h6.468V17h-.468a1.5 1.5 0 0 1-1.385-2.077"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.502 16h1.75l-.59 2.36c-.121.482.462.826.826.486l4.872-4.548A.75.75 0 0 0 17.85 13h-1.1l.781-2.342a.5.5 0 0 0-.474-.658h-3.473a.5.5 0 0 0-.462.308l-2.083 5a.5.5 0 0 0 .462.692Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBeakerFlash20Filled);

export { ForwardRef as default };
