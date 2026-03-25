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
var SvgDatabaseRibbon20Filled = function SvgDatabaseRibbon20Filled(_a, ref) {
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
    d: "M14.69 8.016A5.5 5.5 0 0 0 16 7.121v1.69a4 4 0 0 0-4 6.52v2.499c-.626.11-1.299.17-2 .17-3.314 0-6-1.343-6-3V7.12c.383.363.84.662 1.31.896 1.252.626 2.912.985 4.69.985s3.438-.359 4.69-.985"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 12.684a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-1 3.466a4 4 0 0 1-2 .534 4 4 0 0 1-2-.535v2.285a.25.25 0 0 0 .378.215L15 17.684l1.622.965a.25.25 0 0 0 .378-.215z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabaseRibbon20Filled);

export { ForwardRef as default };
