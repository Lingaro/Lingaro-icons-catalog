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
var SvgDatabaseArrowForward24Filled = function SvgDatabaseArrowForward24Filled(_a, ref) {
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
    d: "M12 10c4.418 0 8-1.79 8-4s-3.582-4-8-4-8 1.79-8 4 3.582 4 8 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.328 10.17A7.6 7.6 0 0 0 20 9.053v2.445a6.5 6.5 0 0 0-7.209 10.482q-.39.02-.791.02c-4.418 0-8-1.79-8-4V9.053a7.6 7.6 0 0 0 1.672 1.117C7.37 11.018 9.608 11.5 12 11.5s4.63-.482 6.328-1.33"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 17.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0m6.646-2.146a.5.5 0 0 1 .708-.708l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708-.708l.647-.646H17.25A2.25 2.25 0 0 0 15 19.25v.25a.5.5 0 0 1-1 0v-.25A3.25 3.25 0 0 1 17.25 16h2.043z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabaseArrowForward24Filled);

export { ForwardRef as default };
