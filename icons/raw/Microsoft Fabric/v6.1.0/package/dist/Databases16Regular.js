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
var SvgDatabases16Regular = function SvgDatabases16Regular(_a, ref) {
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
    d: "M10.042 1H1.875a.875.875 0 0 0-.848 1.081c.027.085 1.622 5.07 2.45 7.651a.88.88 0 0 0 .831.602h1.814l.554 1.726a.875.875 0 0 0 .834.607h1.812l.552 1.72a.875.875 0 0 0 .835.613h.208C13.172 15 15 13.955 15 12.667V3.833C15 2.268 13.001 1 10.042 1M2.051 2h7.99c2.445 0 3.958.952 3.958 1.833 0 .507-.483 1.018-1.333 1.373v-.29c0-.962-.933-1.582-2.084-1.582H5.075a.875.875 0 0 0-.834 1.139l1.56 4.861H4.399zm3.19 2.333h5.342c.533 0 1.084.218 1.084.582v.597a8 8 0 0 1-1.625.154H8.276a.875.875 0 0 0-.833 1.144l1.558 4.856H7.6zM10.917 14H10.8L8.441 6.667h1.601c1.741 0 3.102-.427 3.958-1.081v7.081C14 13.198 12.77 14 10.917 14"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabases16Regular);

export { ForwardRef as default };
