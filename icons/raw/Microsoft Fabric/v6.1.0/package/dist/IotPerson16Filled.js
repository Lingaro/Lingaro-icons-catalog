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
var SvgIotPerson16Filled = function SvgIotPerson16Filled(_a, ref) {
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
    d: "M12 3.5a1.5 1.5 0 0 1-1.75 1.48l-.018.032a3 3 0 0 0-1.43.514l.574-1.033A1.5 1.5 0 1 1 12 3.5M6.102 9.627c.288.336.664.595 1.093.74a2.5 2.5 0 0 1 1.078-.357A3 3 0 0 1 7.5 8c0-.982.472-1.853 1.2-2.4a2.5 2.5 0 0 0-2.079.314l-.767-.767a1.5 1.5 0 1 0-.707.707l.767.767a2.49 2.49 0 0 0-.299 2.132l-1.122.623a1.5 1.5 0 1 0 .486.874z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0m1.5 4.5c0 1.245-1 2.5-3.5 2.5S7 13.75 7 12.5A1.5 1.5 0 0 1 8.5 11h4a1.5 1.5 0 0 1 1.5 1.5"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgIotPerson16Filled);

export { ForwardRef as default };
