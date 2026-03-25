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
var SvgDataTree20Filled = function SvgDataTree20Filled(_a, ref) {
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
    d: "M4 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.983l2.312 1.53c.234-.348.579-.638.965-.859C11.998 5.241 12.962 5 14 5s2 .24 2.723.652C17.43 6.056 18 6.69 18 7.5s-.57 1.445-1.277 1.85C16 9.761 15.037 10 14 10c-1.038 0-2.002-.24-2.723-.653-.705-.404-1.274-1.036-1.277-1.84L7.512 5.86A1 1 0 0 1 7 6H5a1 1 0 0 1-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.5h4v1.995L7.512 14.14A1 1 0 0 0 7 14H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1.983l2.31-1.53c.235.35.58.64.967.861.722.412 1.686.652 2.723.652s2-.24 2.723-.652c.668-.381 1.213-.969 1.272-1.714H18V9.648c-.248.23-.518.42-.781.57-.9.513-2.04.783-3.219.783-1.18 0-2.322-.272-3.22-.786a4 4 0 0 1-.405-.262 4 4 0 0 1-.523-.453H6V9a1 1 0 0 0-1-1z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataTree20Filled);

export { ForwardRef as default };
