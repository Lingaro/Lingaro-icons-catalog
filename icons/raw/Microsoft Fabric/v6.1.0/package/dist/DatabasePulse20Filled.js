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
var SvgDatabasePulse20Filled = function SvgDatabasePulse20Filled(_a, ref) {
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
    d: "M14.69 8.016A5.5 5.5 0 0 0 16 7.121v2.087a5.5 5.5 0 0 0-5.745 8.79L10 18c-3.314 0-6-1.344-6-3V7.12c.383.362.84.66 1.31.895C6.562 8.641 8.222 9 10 9s3.438-.359 4.69-.985Z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M19 14.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0m-5.556-2a.5.5 0 0 1 .455.332l.629 1.759.58-1.444a.5.5 0 0 1 .904-.05l.573 1.07H17a.5.5 0 1 1 0 1h-.714a.5.5 0 0 1-.441-.264l-.209-.39-.672 1.674a.5.5 0 0 1-.935-.018l-.643-1.8-.212.495a.5.5 0 0 1-.46.303H12a.5.5 0 0 1 0-1h.385l.584-1.364a.5.5 0 0 1 .475-.302Z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabasePulse20Filled);

export { ForwardRef as default };
