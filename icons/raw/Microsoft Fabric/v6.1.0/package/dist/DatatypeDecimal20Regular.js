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
var SvgDatatypeDecimal20Regular = function SvgDatatypeDecimal20Regular(_a, ref) {
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
    d: "M6.66 6.027a.5.5 0 0 1 .34.474v7a.5.5 0 0 1-1 0V7.958a6 6 0 0 1-1.243.972.5.5 0 0 1-.514-.858c.937-.562 1.31-1.095 1.639-1.567q.108-.158.22-.306a.5.5 0 0 1 .558-.172m4.333 2.06v-.003L11 8.059a1.5 1.5 0 0 1 .244-.507c.195-.26.552-.55 1.257-.55.638 0 1.04.209 1.267.497.231.294.353.762.24 1.418-.066.386-.26.615-.563.81-.248.16-.526.273-.859.408q-.199.08-.426.177c-.492.212-1.048.495-1.471 1.001-.435.52-.688 1.221-.688 2.189a.5.5 0 0 0 .5.5h4a.5.5 0 1 0 0-1h-3.469c.066-.49.229-.814.424-1.047.267-.32.64-.527 1.1-.725q.154-.066.329-.136c.361-.146.768-.311 1.1-.525.483-.31.885-.76 1.009-1.482.145-.844.017-1.626-.441-2.207-.463-.587-1.19-.878-2.052-.878-1.045 0-1.689.46-2.056.95a2.5 2.5 0 0 0-.43.933l-.005.022-.001.007v.005h-.001c-.03.176-.02.126-.011.068l.01-.066a.5.5 0 0 0 .987.167ZM9 13.501a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatatypeDecimal20Regular);

export { ForwardRef as default };
