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
var SvgSquareDatabaseArrowUpDown20Filled = function SvgSquareDatabaseArrowUpDown20Filled(_a, ref) {
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
    d: "M14 3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3.007a1.506 1.506 0 0 1 1.494-1.647q.074 0 .146.007v-1.4Q10.332 14 10 14c-1.795 0-3.25-.895-3.25-2V9.96q.206.17.428.306c.77.474 1.77.734 2.822.734s2.052-.26 2.822-.734q.221-.135.428-.307V12q0 .213-.07.413l.028.027c.284.283.439.66.439 1.061v.757q.061-.084.134-.16l1.657-1.659A1.5 1.5 0 0 1 17 12.085V6a3 3 0 0 0-3-3m-4 3c1.795 0 3.25.895 3.25 2s-1.455 2-3.25 2-3.25-.895-3.25-2S8.205 6 10 6m8.5 8.793-1.646-1.647a.5.5 0 0 0-.708 0L14.5 14.793a.5.5 0 0 0 .707.707l.793-.793V18.5a.5.5 0 0 0 1 0v-3.793l.793.793a.5.5 0 0 0 .707-.707"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m13.44 16.5-.794.793V13.5a.5.5 0 1 0-1 0v3.793l-.792-.793a.5.5 0 0 0-.708.707l1.647 1.647a.5.5 0 0 0 .707 0l1.646-1.647a.5.5 0 0 0-.707-.707Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSquareDatabaseArrowUpDown20Filled);

export { ForwardRef as default };
