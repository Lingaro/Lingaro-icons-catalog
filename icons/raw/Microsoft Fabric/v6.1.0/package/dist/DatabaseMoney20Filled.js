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
var SvgDatabaseMoney20Filled = function SvgDatabaseMoney20Filled(_a, ref) {
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
    d: "M10 8c3.314 0 6-1.343 6-3 0-1.656-2.686-3-6-3S4 3.344 4 5c0 1.657 2.686 3 6 3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.69 8.016A5.5 5.5 0 0 0 16 7.121V11h-5a2 2 0 0 0-2 2v4c0 .354.092.688.255.977C6.293 17.794 4 16.53 4 15V7.12c.383.363.84.662 1.31.896 1.252.626 2.912.985 4.69.985s3.438-.359 4.69-.985"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 18a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5h-6a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5zm.5-2.5v1a.5.5 0 0 0-.5.5h-1a1.5 1.5 0 0 1 1.5-1.5M16.5 13h1a.5.5 0 0 0 .5.5v1a1.5 1.5 0 0 1-1.5-1.5m-5.5.5a.5.5 0 0 0 .5-.5h1a1.5 1.5 0 0 1-1.5 1.5zm.5 3.5a.5.5 0 0 0-.5-.5v-1a1.5 1.5 0 0 1 1.5 1.5zm1.5-2a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabaseMoney20Filled);

export { ForwardRef as default };
