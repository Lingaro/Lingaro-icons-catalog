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
var SvgPurview16Filled = function SvgPurview16Filled(_a, ref) {
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
    d: "M11.523 6.767a9 9 0 0 1 1.291.666L9.883 2.305C9.043.85 6.944.85 6.105 2.305 5.33 3.648 4.828 5.04 4.81 6.625v.002a9.15 9.15 0 0 1 6.712.141Zm.596 1.682q.018-.098.032-.194a8.1 8.1 0 0 1 2.396 2.202c.124.17.235.349.343.53l.201.348.1.175c.211.365.308.753.309 1.13-.001 1.129-.884 2.146-2.197 2.146l-.929-.002a8.1 8.1 0 0 1-3.422-1.012 11.4 11.4 0 0 0 1.82-2.054 9.3 9.3 0 0 0 1.347-3.27ZM3.783 7.284a9 9 0 0 1-.011-.934L.796 11.51c-.84 1.457.21 3.276 1.889 3.276h5.939A9.1 9.1 0 0 1 5.5 12.063a9.1 9.1 0 0 1-1.717-4.78Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgPurview16Filled);

export { ForwardRef as default };
