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
var SvgCodeTextFlash20Regular = function SvgCodeTextFlash20Regular(_a, ref) {
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
    d: "M2.5 5a.5.5 0 0 0 0 1H8a.5.5 0 0 0 0-1zm3 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm-1 3a.5.5 0 0 0 0 1h6.835l.417-1zM17 8.5a.5.5 0 0 1-.5.5H13a.5.5 0 0 1 0-1h3.5a.5.5 0 0 1 .5.5M10.502 14l-.385.923-.03.077H2.5a.5.5 0 0 1 0-1zM10.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm1.002 11h1.75l-.59 2.36c-.121.482.462.826.826.486l4.872-4.548A.75.75 0 0 0 17.85 13h-1.1l.781-2.342a.5.5 0 0 0-.474-.658h-3.473a.5.5 0 0 0-.462.308l-2.083 5a.5.5 0 0 0 .462.692Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgCodeTextFlash20Regular);

export { ForwardRef as default };
