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
var SvgBeakerFlash20Regular = function SvgBeakerFlash20Regular(_a, ref) {
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
    d: "M14 3a.5.5 0 0 1 0 1h-.996v4.684q0 .212.026.422a1.5 1.5 0 0 0-.83.817l-.013.031a4.5 4.5 0 0 1-.183-1.27V4h-4.01v4.687a4.5 4.5 0 0 1-.538 2.134L6.821 12h4.514l-.417 1H6.282l-1.22 2.264a.5.5 0 0 0 .44.738h4.585c.203.566.74.998 1.415.998h.469v.002H5.5a1.5 1.5 0 0 1-1.32-2.212l2.395-4.443a3.5 3.5 0 0 0 .418-1.66V4H6a.5.5 0 0 1 0-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.502 16h1.75l-.59 2.36c-.121.482.462.826.826.486l4.872-4.548A.75.75 0 0 0 17.85 13h-1.1l.781-2.342a.5.5 0 0 0-.474-.658h-3.473a.5.5 0 0 0-.462.308l-2.083 5a.5.5 0 0 0 .462.692Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBeakerFlash20Regular);

export { ForwardRef as default };
