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
var SvgDataWarehouse28Regular = function SvgDataWarehouse28Regular(_a, ref) {
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
    d: "M22.291 25.233v-.006A3.75 3.75 0 0 0 26 21.48V10.55a.99.99 0 0 0-.468-.844c-1.38-.853-3.954-2.442-6.412-3.958l-.007-.004-4.597-2.838a1 1 0 0 0-.51-.137c-.198 0-.378.06-.534.155C10.682 4.65 4.844 8.25 2.48 9.705a1 1 0 0 0-.474.85L2 22.233c0 .81.322 1.544.845 2.083a3 3 0 0 0 2.16.918h17.287ZM17 23.733h2.256a3.74 3.74 0 0 1-.756-2.254v-5.952l-7.5-4.63-7.494 4.626v2.933l3.966-2.448a1 1 0 0 1 1.056 0s2.724 1.683 4.992 3.079c.288.174.48.491.48.85v2.295c0 .544.146 1.055.4 1.495H17zm3.003-2.254L20 15.247a.99.99 0 0 0-.486-.857l-7.986-4.93a1 1 0 0 0-1.056 0l-6.966 4.3v-2.925c2.423-1.493 7.721-4.76 10.503-6.48l4.299 2.653.013.008.004.003.002.001 6.173 3.81v10.65a2.25 2.25 0 0 1-2.242 2.247h-.013a2.25 2.25 0 0 1-2.242-2.248m-7.248 2.248H5a1.49 1.49 0 0 1-1.494-1.49V20.22L8 17.444l4.5 2.776v2.012c0 .524.09 1.028.255 1.495",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataWarehouse28Regular);

export { ForwardRef as default };
