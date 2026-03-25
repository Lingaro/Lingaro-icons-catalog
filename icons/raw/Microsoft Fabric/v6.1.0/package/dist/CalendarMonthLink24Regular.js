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
var SvgCalendarMonthLink24Regular = function SvgCalendarMonthLink24Regular(_a, ref) {
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
    d: "M17.75 3A3.25 3.25 0 0 1 21 6.25v6.583a4.7 4.7 0 0 0-1.5-.326V6.25a1.75 1.75 0 0 0-1.75-1.75H6.25A1.75 1.75 0 0 0 4.5 6.25v11.5c0 .966.784 1.75 1.75 1.75h5.316a4.8 4.8 0 0 0 1.268 1.5H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 13.5c.23 0 .444.062.629.17a4.76 4.76 0 0 0-1.386 2.075A1.25 1.25 0 0 1 12 13.5m-3 1.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0M7.75 8.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5m5.5 1.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0m3-1.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M23 17.25a3.75 3.75 0 0 0-3.75-3.75l-.102.007A.75.75 0 0 0 19.25 15l.154.005a2.25 2.25 0 0 1-.154 4.495l-.003.005-.102.007a.75.75 0 0 0 .108 1.493V21l.2-.005A3.75 3.75 0 0 0 23 17.25m-6.5-3a.75.75 0 0 0-.75-.75l-.2.005a3.75 3.75 0 0 0 .2 7.495l.102-.007a.75.75 0 0 0-.102-1.493l-.154-.005A2.25 2.25 0 0 1 15.75 15l.102-.007a.75.75 0 0 0 .648-.743"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 17.25a.75.75 0 0 0-.75-.75h-3.5l-.102.007A.75.75 0 0 0 15.75 18h3.5l.102-.007A.75.75 0 0 0 20 17.25"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgCalendarMonthLink24Regular);

export { ForwardRef as default };
