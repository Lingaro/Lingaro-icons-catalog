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
var SvgTableBorderLeft20Filled = function SvgTableBorderLeft20Filled(_a, ref) {
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
    d: "M16.3 16.3c.5-.5.7-1.1.7-1.8v-9c0-.7-.3-1.3-.7-1.8-.5-.4-1.1-.7-1.8-.7h-9c-.7 0-1.3.3-1.8.7S3 4.8 3 5.5V7h4V3.3h1V17h6.5c.7 0 1.3-.3 1.8-.7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 17H5.5c-.7 0-1.3-.3-1.8-.7-.4-.5-.7-1.1-.7-1.8V13h4zm0-5H3V8h4z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTableBorderLeft20Filled);

export { ForwardRef as default };
