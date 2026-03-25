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
var SvgWindowDatabaseArrowUp20Filled = function SvgWindowDatabaseArrowUp20Filled(_a, ref) {
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
    d: "M10.001 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0M5.147 7.853l.003.003A.5.5 0 0 0 5.498 8h.006a.5.5 0 0 0 .35-.146l2-2a.5.5 0 1 0-.707-.708L6.001 6.293V3.5a.5.5 0 0 0-1 0v2.793L3.855 5.146a.5.5 0 1 0-.708.708l2 2ZM17.001 7h-6.207a5.5 5.5 0 0 0 .207-1.5c0-.9-.216-1.75-.6-2.5h3.6a3 3 0 0 1 3 3zm-14 3.4q.476.244 1 .393V14a2 2 0 0 0 2 2h3v.5q0 .26.051.5H6.001a3 3 0 0 1-3-3zm13-2.258q.535.106 1 .279c1.206.448 2 1.212 2 2.079 0 1.38-2.015 2.5-4.5 2.5s-4.5-1.12-4.5-2.5 2.015-2.5 4.5-2.5c.526 0 1.03.05 1.5.142"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.501 14c1.38 0 2.679-.309 3.668-.858.293-.163.578-.36.833-.59l-.001 3.947c0 1.381-2.015 2.5-4.5 2.5s-4.5-1.119-4.5-2.5v-3.945c.255.23.54.425.832.588.99.55 2.288.858 3.668.858"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgWindowDatabaseArrowUp20Filled);

export { ForwardRef as default };
