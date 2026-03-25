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
var SvgBookOpenDataCloud24Filled = function SvgBookOpenDataCloud24Filled(_a, ref) {
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
    d: "M9.531 3c.98 0 1.847.392 2.469 1.025A3.43 3.43 0 0 1 14.469 3h4.63C20.667 3 22 4.334 22 5.9v11.2c0 .836-.404 1.563-.938 2.061S19.792 20 19 20h-4.5c-.351 0-.724.139-1.043.457-.318.319-.457.692-.457 1.043a1 1 0 1 1-2 0c0-.351-.139-.724-.457-1.043C10.224 20.14 9.85 20 9.5 20H5c-.792 0-1.529-.341-2.062-.839C2.403 18.663 2 17.936 2 17.1V5.9C2 4.334 3.334 3 4.9 3zM4.9 5c-.461 0-.9.439-.9.9v11.2c0 .177.09.4.302.599.213.199.477.301.698.301h4.5c.518 0 1.03.12 1.5.353V6.5c0-.857-.644-1.5-1.469-1.5zM13 18.353A3.4 3.4 0 0 1 14.516 18H19c.221 0 .485-.102.698-.301.212-.198.302-.422.302-.599V5.9c0-.461-.439-.9-.9-.9h-4.631C13.644 5 13 5.643 13 6.5z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBookOpenDataCloud24Filled);

export { ForwardRef as default };
