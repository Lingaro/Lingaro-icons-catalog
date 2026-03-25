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
var SvgTableColumnSigma20Filled = function SvgTableColumnSigma20Filled(_a, ref) {
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
    d: "M7 3H5.5A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17H7zm1 0h4v4H8zm6.5 0A2.5 2.5 0 0 1 17 5.5V7h-4V3zm-3.093 13.473.593-.631V13H8v4h3.086a1.5 1.5 0 0 1 .32-.526ZM13.731 13l.47.5L13 14.778V13zM12 12v-.842l-.594-.632A1.5 1.5 0 0 1 12 8.086V8H8v4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 18h6a.5.5 0 0 0 0-1h-4.845l2.968-3.158a.5.5 0 0 0 0-.684L13.655 10H18.5a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.364.842l3.438 3.658-3.438 3.658A.5.5 0 0 0 12.5 18"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTableColumnSigma20Filled);

export { ForwardRef as default };
