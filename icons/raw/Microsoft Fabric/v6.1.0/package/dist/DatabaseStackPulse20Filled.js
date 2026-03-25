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
var SvgDatabaseStackPulse20Filled = function SvgDatabaseStackPulse20Filled(_a, ref) {
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
    d: "M16 5c0 1.657-2.686 3-6 3S4 6.657 4 5s2.686-3 6-3 6 1.343 6 3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 7.12c-.383.362-.84.661-1.31.896C13.438 8.642 11.778 9 10 9s-3.438-.358-4.69-.984A5.5 5.5 0 0 1 4 7.12V10c0 .694.53 1.437 1.64 2.035.923.496 2.167.843 3.575.939A5.5 5.5 0 0 1 16 9.207zM9 14.5q0-.271.026-.537c-1.48-.115-2.82-.489-3.86-1.048A5.5 5.5 0 0 1 4 12.088V15c0 1.657 2.686 3 6 3q.127 0 .255-.003A5.48 5.48 0 0 1 9 14.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-5.556-2a.5.5 0 0 0-.475.303l-.584 1.364H12a.5.5 0 1 0 0 1h.714a.5.5 0 0 0 .46-.303l.212-.496.643 1.8a.5.5 0 0 0 .935.018l.672-1.673.209.39a.5.5 0 0 0 .44.264H17a.5.5 0 0 0 0-1h-.415l-.573-1.07a.5.5 0 0 0-.905.05l-.58 1.443-.628-1.758a.5.5 0 0 0-.455-.332"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabaseStackPulse20Filled);

export { ForwardRef as default };
