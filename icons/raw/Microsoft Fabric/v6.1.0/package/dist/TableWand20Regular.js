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
var SvgTableWand20Regular = function SvgTableWand20Regular(_a, ref) {
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
    d: "M15.232 2.698A2.5 2.5 0 0 0 13.5 2h-9A2.5 2.5 0 0 0 2 4.5v9A2.5 2.5 0 0 0 4.5 16H6a2.9 2.9 0 0 1 .852-1.974L7 13.878V12h1.878l1-1H7V7h2.085c.158-.447.523-.797.98-.936l.02-.064H7V3h4v2.085a1.5 1.5 0 0 1 1 0V3h1.5l.145.007c.327.031.623.168.855.375.16-.144.353-.254.564-.318q.06-.197.168-.366M3 13.5V12h3v3H4.5l-.144-.007A1.5 1.5 0 0 1 3 13.5M3 6V4.5l.007-.144A1.5 1.5 0 0 1 4.5 3H6v3zm3 1v4H3V7zm8.729.564a1.914 1.914 0 1 1 2.707 2.707l-7.17 7.17a1.914 1.914 0 1 1-2.707-2.708zm-.48 1.893L8.266 15.44a.914.914 0 1 0 1.293 1.293l5.983-5.983zm2 .586.48-.48a.914.914 0 0 0-1.293-1.292l-.48.48z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.5 6a.5.5 0 0 1 .5.5V7h.5a.5.5 0 0 1 0 1H12v.5a.5.5 0 0 1-1 0V8h-.5a.5.5 0 0 1 0-1h.5v-.5a.5.5 0 0 1 .5-.5M17 3.5a.5.5 0 0 0-1 0V4h-.5a.5.5 0 0 0 0 1h.5v.5a.5.5 0 0 0 1 0V5h.5a.5.5 0 0 0 0-1H17zM18.5 15a.5.5 0 0 0 0-1H18v-.5a.5.5 0 0 0-1 0v.5h-.5a.5.5 0 0 0 0 1h.5v.5a.5.5 0 0 0 1 0V15z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTableWand20Regular);

export { ForwardRef as default };
