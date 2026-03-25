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
var SvgOneLake32Filled = function SvgOneLake32Filled(_a, ref) {
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
    d: "M29.797 18.04c-2.23-3.482-7.575-4.055-10.607-.984-.703.713-1.4 1.368-2.065 1.924a24 24 0 0 1-3.323-4.494 32 32 0 0 1-1.074-2.034c-1.127-2.35-1.567-4.157-1.602-5.546-.02-.791.091-1.446.283-1.989q.31-.482.73-.903c2.18-2.182 5.767-2.131 8.011.112q.285.286.523.597a12.01 12.01 0 0 1 8.99 9.283c.279 1.366.313 2.726.134 4.034m-17.73-2.56a26 26 0 0 0 3.431 4.689c-.497.299-.892.462-1.178.518-1.685.331-3.11.319-4.313.074-2.1-3.965-2.122-8.152-.545-11.4.422 1.746 1.257 3.767 2.605 6.12Zm14.33 9.355a12.05 12.05 0 0 0 2.542-4.968c-1.193-3.41-5.995-4.365-8.624-1.701-2.018 2.045-4.114 3.762-5.69 4.072-9.114 1.789-12.43-5.36-12.325-9.183a13.9 13.9 0 0 0 .033 5.403c1.534 7.518 8.872 12.369 16.39 10.835a13.8 13.8 0 0 0 6.098-2.92l.039-.033a14 14 0 0 0 1.538-1.505Zm-19.11-5.291a7 7 0 0 1-.914-.66 7 7 0 0 1-.225-.226c-1.644-1.716-2.309-4.041-2.267-5.56h-.003a6.62 6.62 0 0 1 1.926-4.304A6.6 6.6 0 0 1 8.373 7.2c-2.205 3.44-2.663 7.977-1.087 12.343Z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgOneLake32Filled);

export { ForwardRef as default };
