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
var SvgDocumentHint20Filled = function SvgDocumentHint20Filled(_a, ref) {
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
    d: "M9.5 1.751a.75.75 0 1 0 0 1.5h.25v2.75A2.25 2.25 0 0 0 12 8.251h2.75v1a.75.75 0 0 0 1.5 0V7.613a2.75 2.75 0 0 0-.862-2l-3.295-3.111a2.75 2.75 0 0 0-1.888-.751zm4.905 5H12a.75.75 0 0 1-.75-.75V3.769l3.108 2.935zM4.5 10.001a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 1 1 1.5 0v1.5a.75.75 0 0 1-.75.75m7 7.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75m-7.75-4.75a.75.75 0 0 0 1.5 0v-.5a.75.75 0 0 0-1.5 0zm11.75.75a.75.75 0 0 1-.75-.75v-.5a.75.75 0 0 1 1.5 0v.5a.75.75 0 0 1-.75.75M6 3.251a.75.75 0 0 0-.75.75v.25a.75.75 0 0 1-1.5 0v-.25A2.25 2.25 0 0 1 6 1.751h.25a.75.75 0 1 1 0 1.5zm8.75 12.5a.75.75 0 0 1-.75.75h-.25a.75.75 0 0 0 0 1.5H14a2.25 2.25 0 0 0 2.25-2.25v-.25a.75.75 0 0 0-1.5 0zm-8.75 1a.75.75 0 0 1-.75-.75v-.25a.75.75 0 0 0-1.5 0v.25A2.25 2.25 0 0 0 6 18.251h.25a.75.75 0 0 0 0-1.5z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDocumentHint20Filled);

export { ForwardRef as default };
