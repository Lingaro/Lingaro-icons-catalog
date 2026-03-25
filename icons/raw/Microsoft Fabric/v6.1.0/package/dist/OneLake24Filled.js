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
var SvgOneLake24Filled = function SvgOneLake24Filled(_a, ref) {
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
    d: "M9.653 9.227c-.628-1.413-.893-2.534-.93-3.423-.055-1.283.365-2.082.853-2.575 1.576-1.44 4.059-1.364 5.628.204q.236.237.428.499a8.63 8.63 0 0 1 6.186 6.6c.2.982.225 1.96.096 2.899-1.602-2.502-5.443-2.914-7.621-.707a22 22 0 0 1-1.506 1.4 17.3 17.3 0 0 1-2.144-2.964c-.4-.699-.727-1.342-.99-1.933m-.312 2.678a18.8 18.8 0 0 0 2.222 3.1c-.322.187-.58.29-.77.328-1.136.223-2.107.229-2.936.084-1.354-2.703-1.371-5.523-.351-7.754.317 1.223.908 2.625 1.835 4.242m-2.31-6.402a4.73 4.73 0 0 0-2.355 1.284c-1.896 1.896-1.851 5.015.1 6.965.34.34.717.623 1.116.847C4.78 11.34 5.236 7.97 7.03 5.503Zm14.266 9.24a8.66 8.66 0 0 1-1.827 3.57 10 10 0 0 1-1.105 1.082l-.028.023a9.94 9.94 0 0 1-4.38 2.098C8.553 22.62 3.281 19.133 2.18 13.731a10 10 0 0 1-.025-3.882c-.075 2.747 2.307 7.884 8.856 6.598 1.133-.223 2.639-1.456 4.089-2.926 1.889-1.914 5.34-1.227 6.197 1.222",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgOneLake24Filled);

export { ForwardRef as default };
