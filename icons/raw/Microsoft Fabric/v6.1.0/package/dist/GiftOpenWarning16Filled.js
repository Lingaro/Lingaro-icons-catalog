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
var SvgGiftOpenWarning16Filled = function SvgGiftOpenWarning16Filled(_a, ref) {
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
    d: "M11.5 3.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m-7 2.25A2.5 2.5 0 0 1 7 3c1.344 0 2.482.884 2.864 2.103-.334.11-.643.31-.886.6A2 2 0 0 0 7 4a1.5 1.5 0 0 0-1.5 1.5 1 1 0 0 0 1 1A.5.5 0 0 0 7 6a.5.5 0 0 1 0-1 1 1 0 0 1 1 1 1.5 1.5 0 0 1-1.5 1.5 2 2 0 0 1-2-2m2 3a2.5 2.5 0 0 0 1.16-.285l-.62 1.244a3.5 3.5 0 0 1-.54.041.5.5 0 0 1 0-1m.02 2H6.5a1.5 1.5 0 0 1-1.278-2.285A3 3 0 0 1 4.842 8h-.989a2 2 0 0 0-.894.211l-1.683.842a.5.5 0 1 0 .447.894l1.276-.638V12a2 2 0 0 0 2 2h.006c0-.297.067-.602.213-.896zM12.5 6a.5.5 0 0 1-.363-.156l-.072-.097A.5.5 0 0 1 12.5 5h.5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1H14v.5a.5.5 0 0 1-1 0V6zm-2.897.554-3.496 6.998A1 1 0 0 0 7.002 15h6.996a1 1 0 0 0 .895-1.448l-3.5-6.999a1 1 0 0 0-1.79 0Zm1.395 1.941v3.002a.5.5 0 1 1-1 0V8.495a.5.5 0 1 1 1 0m-.5 5.504a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgGiftOpenWarning16Filled);

export { ForwardRef as default };
