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
var SvgTextBulletListSquarePulse20Regular = function SvgTextBulletListSquarePulse20Regular(_a, ref) {
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
    d: "M5.75 16h3.457q.149.524.393 1H5.75A2.75 2.75 0 0 1 3 14.25v-8.5A2.75 2.75 0 0 1 5.75 3h8.5A2.75 2.75 0 0 1 17 5.75V9.6a5.5 5.5 0 0 0-1-.393V5.75A1.75 1.75 0 0 0 14.25 4h-8.5A1.75 1.75 0 0 0 4 5.75v8.5c0 .966.784 1.75 1.75 1.75"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.5 7.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M6.75 11a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M9.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h.757c.313-.38.677-.716 1.08-1zm-.326 3.12a.5.5 0 0 0-.12.606q.044-.309.12-.606M19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-5.556-2a.5.5 0 0 0-.475.303l-.584 1.364H12a.5.5 0 1 0 0 1h.714a.5.5 0 0 0 .46-.303l.212-.496.643 1.8a.5.5 0 0 0 .935.018l.672-1.673.209.39a.5.5 0 0 0 .44.264H17a.5.5 0 0 0 0-1h-.415l-.573-1.07a.5.5 0 0 0-.905.05l-.58 1.443-.628-1.758a.5.5 0 0 0-.455-.332"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTextBulletListSquarePulse20Regular);

export { ForwardRef as default };
