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
var SvgTextBulletListSquarePulse20Filled = function SvgTextBulletListSquarePulse20Filled(_a, ref) {
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
    d: "M3 5.75A2.75 2.75 0 0 1 5.75 3h8.5A2.75 2.75 0 0 1 17 5.75V9.6a5.5 5.5 0 0 0-2.5-.6c-1.177 0-2.268.37-3.163 1H9.5a.5.5 0 0 0 0 1h.757a5.5 5.5 0 0 0-1.083 2.12.5.5 0 0 0-.12.606A5.48 5.48 0 0 0 9.6 17H5.75A2.75 2.75 0 0 1 3 14.25zM6.75 8a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m.75 2.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0M6.75 14a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M9 7.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-5.556-2a.5.5 0 0 0-.475.303l-.584 1.364H12a.5.5 0 1 0 0 1h.714a.5.5 0 0 0 .46-.303l.212-.496.643 1.8a.5.5 0 0 0 .935.018l.672-1.673.209.39a.5.5 0 0 0 .44.264H17a.5.5 0 0 0 0-1h-.415l-.573-1.07a.5.5 0 0 0-.905.05l-.58 1.443-.628-1.758a.5.5 0 0 0-.455-.332"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTextBulletListSquarePulse20Filled);

export { ForwardRef as default };
