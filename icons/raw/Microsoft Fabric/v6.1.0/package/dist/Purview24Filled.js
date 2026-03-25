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
var SvgPurview24Filled = function SvgPurview24Filled(_a, ref) {
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
    d: "M18.891 10.586c.077.135-.08.289-.215.213a14 14 0 0 0-1.374-.667H17.3l-.001.001a13.77 13.77 0 0 0-9.866-.295.15.15 0 0 1-.2-.144c.07-2.28.815-4.298 1.935-6.24 1.255-2.175 4.39-2.175 5.645-.002v.002zm-.686 2.092.008-.043a.152.152 0 0 1 .23-.104 12.1 12.1 0 0 1 3.377 3.171h.002c.186.257.353.523.514.794l.303.524.001.003.15.26c.329.571.473 1.181.46 1.77-.044 1.654-1.353 3.124-3.283 3.125l-1.395-.003a12.2 12.2 0 0 1-4.922-1.403.15.15 0 0 1-.027-.245c.172-.154.35-.324.528-.502.707-.706 1.486-1.615 2.028-2.429.952-1.427 1.702-3.224 2.026-4.918M5.652 11.013q-.028-.41-.032-.82c-.001-.156-.215-.215-.293-.08l-4.135 7.17c-1.256 2.176.314 4.895 2.822 4.895h8.255c.156 0 .211-.214.077-.294a13.7 13.7 0 0 1-4.117-3.769 13.7 13.7 0 0 1-2.577-7.102"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgPurview24Filled);

export { ForwardRef as default };
