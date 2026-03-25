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
var SvgSquareDatabaseArrowUpDown20Regular = function SvgSquareDatabaseArrowUpDown20Regular(_a, ref) {
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
    d: "M6 3h8a3 3 0 0 1 3 3v6.085a1.5 1.5 0 0 0-1 0V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3.267a1.5 1.5 0 0 0-.26 1H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.18 12.413a1.5 1.5 0 0 0-1.033-.412c-.401 0-.778.155-1.061.439a1.5 1.5 0 0 0-.439 1.061v.46q-.315.038-.647.039c-1.795 0-3.25-.895-3.25-2V9.96q.206.17.428.306c.77.474 1.77.734 2.822.734s2.052-.26 2.822-.734q.221-.135.428-.307V12q0 .213-.07.413"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.75 8c0-1.105 1.455-2 3.25-2s3.25.895 3.25 2-1.455 2-3.25 2-3.25-.895-3.25-2m11.75 6.793-1.646-1.647a.5.5 0 0 0-.708 0L14.5 14.793a.5.5 0 0 0 .707.707l.793-.793V18.5a.5.5 0 0 0 1 0v-3.793l.793.793a.5.5 0 0 0 .707-.707M13.44 16.5l-.794.793V13.5a.5.5 0 1 0-1 0v3.793l-.792-.793a.5.5 0 0 0-.708.707l1.647 1.647a.5.5 0 0 0 .707 0l1.646-1.647a.5.5 0 0 0-.707-.707Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSquareDatabaseArrowUpDown20Regular);

export { ForwardRef as default };
