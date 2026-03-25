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
var SvgHintGrid20Filled = function SvgHintGrid20Filled(_a, ref) {
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
    d: "M8 3.75A.75.75 0 0 1 8.75 3h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 8 3.75m0 12.5a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75M4.604 5.449a1.5 1.5 0 0 1 .939-.878.75.75 0 0 0-.586-1.38v-.005a3 3 0 0 0-1.77 1.77h.004a.75.75 0 1 0 1.413.493m9.944-.846c.387.151.696.46.85.846a.75.75 0 1 0 1.413-.492h.004a3 3 0 0 0-1.77-1.77v.004a.75.75 0 1 0-.497 1.412M3 11.25a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-1.5 0zm13.25.75a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-.75.75M4.604 14.552a1.5 1.5 0 0 0 .939.878.75.75 0 0 1-.586 1.38v.005a3 3 0 0 1-1.77-1.77h.004a.75.75 0 1 1 1.413-.493m9.944.846a1.5 1.5 0 0 0 .85-.846.75.75 0 1 1 1.413.492h.004a3 3 0 0 1-1.77 1.77v-.004a.75.75 0 1 1-.497-1.412M7.5 6A1.5 1.5 0 0 0 6 7.5v5A1.5 1.5 0 0 0 7.5 14h5a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 12.5 6zM7 12.5v-2h2.5V13h-2a.5.5 0 0 1-.5-.5m0-3v-2a.5.5 0 0 1 .5-.5h2v2.5zm3.5 3.5v-2.5H13v2a.5.5 0 0 1-.5.5zm0-3.5V7h2a.5.5 0 0 1 .5.5v2z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgHintGrid20Filled);

export { ForwardRef as default };
