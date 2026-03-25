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
var SvgDatatypeAny20Filled = function SvgDatatypeAny20Filled(_a, ref) {
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
    d: "M13.114 7.108a.75.75 0 0 1 1.03.257L15 8.793l.857-1.428a.75.75 0 0 1 1.286.772l-1.393 2.322v2.292a.75.75 0 0 1-1.5 0V10.46l-1.393-2.322a.75.75 0 0 1 .257-1.029Zm-3.971.257a.75.75 0 0 0-1.393.386v5a.75.75 0 0 0 1.5 0V10.46l1.607 2.678a.75.75 0 0 0 1.393-.386v-5a.75.75 0 1 0-1.5 0v2.292z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M5.393 7.5a.75.75 0 0 0-1.407-.02l-1.935 5a.75.75 0 1 0 1.399.542l.104-.27h2.11l.09.25a.75.75 0 1 0 1.413-.502zm-1.258 3.751.52-1.343.477 1.343z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatatypeAny20Filled);

export { ForwardRef as default };
