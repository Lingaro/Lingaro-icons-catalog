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
var SvgTableLinkTriangle20Regular = function SvgTableLinkTriangle20Regular(_a, ref) {
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
    d: "M3.5 3a2.5 2.5 0 0 0 0 5H4a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 1 1 0-3H4a.5.5 0 0 0 0-1zM7 3a.5.5 0 0 0 0 1h.5a1.5 1.5 0 1 1 0 3H7a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 5.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 15V8.965Q3.245 9 3.5 9H4v3.5h3V9h.5q.255 0 .5-.035V12.5h4v-4H9.304a3.5 3.5 0 0 0 1.069-1H12v-3h-1.145a3.5 3.5 0 0 0-.482-1H14.5A2.5 2.5 0 0 1 17 6v7.579l-1-1.732V8.5h-3v3.345l-1 1.73V13.5H8v3h2.31l-.578 1H5.5A2.5 2.5 0 0 1 3 15m1 0a1.5 1.5 0 0 0 1.356 1.493l.144.007H7v-3H4zm9-10.5v3h3V6a1.5 1.5 0 0 0-1.355-1.493L14.5 4.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m14.93 12 3.9 6.75h.004a.5.5 0 0 1-.433.75h-7.8a.5.5 0 0 1-.436-.75l3.9-6.75a.522.522 0 0 1 .866 0Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTableLinkTriangle20Regular);

export { ForwardRef as default };
