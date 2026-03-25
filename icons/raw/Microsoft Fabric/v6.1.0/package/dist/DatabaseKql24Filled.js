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
var SvgDatabaseKql24Filled = function SvgDatabaseKql24Filled(_a, ref) {
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
    d: "M20 6c0 2.21-3.582 4-8 4S4 8.21 4 6s3.582-4 8-4 8 1.791 8 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 9.054a7.6 7.6 0 0 1-1.672 1.117c-1.697.848-3.936 1.33-6.328 1.33s-4.63-.482-6.328-1.33A7.6 7.6 0 0 1 4 9.054V18c0 2.21 3.582 4 8 4h.13a2.25 2.25 0 0 1 .5-1.808 2.25 2.25 0 0 1-.4-3.5l.706-.708c.18-.18.382-.322.597-.428-.812-1.266.062-3.053 1.68-3.066L20 12.453v-3.4Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m15.227 13.99 6.32-.049a.5.5 0 0 1 .505.504l-.05 6.32a.5.5 0 0 1-.853.35l-1.68-1.68v.002l-4.594-4.594a.5.5 0 0 1 .35-.853zm-1.572 7.925h-.002a.75.75 0 0 1 .169-.805l2.12-2.121a.75.75 0 0 1 .53-.22.75.75 0 0 1 .533 1.28l-2.121 2.122a.75.75 0 0 1-1.229-.256m.873-5.09a.75.75 0 0 0-.53.22l-.707.706a.75.75 0 1 0 1.062 1.061l.707-.707a.75.75 0 0 0-.532-1.28m4.42 4.109a.75.75 0 0 1 0 1.06l-.707.707a.75.75 0 0 1-1.06-1.06l.707-.707a.75.75 0 0 1 1.06 0"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabaseKql24Filled);

export { ForwardRef as default };
