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
var SvgReceiptKqlNew20Filled = function SvgReceiptKqlNew20Filled(_a, ref) {
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
    d: "M19.02 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 1 0-1 0V5h-1.5a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 1 0 0-1h-1.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.62 3h-4.6a2 2 0 0 0-2 2v6h4.5a1.5 1.5 0 0 1 1.5 1.5V17h5a3 3 0 0 0 3-3v-2h-3v-1.022a5.48 5.48 0 0 1-3.044-1.272.5.5 0 0 1-.456.294h-4a.5.5 0 0 1 0-1h3.757a5.5 5.5 0 0 1-1.05-2H6.52a.5.5 0 0 1 0-1h2.522a5.5 5.5 0 0 1 .577-3Zm4.4 13a2 2 0 0 0 2-2v-1h-2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.504 12.004h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.853.354l-5-5a.5.5 0 0 1 .353-.854m.056 2.653a.5.5 0 0 1 0 .707l-.706.707a.5.5 0 1 1-.708-.707l.708-.707a.5.5 0 0 1 .707 0Zm2.83 2.829a.5.5 0 0 1 0 .707l-.708.707a.5.5 0 1 1-.707-.707l.707-.707a.5.5 0 0 1 .707 0Zm-1.415-1.414a.5.5 0 0 1 0 .707l-2.121 2.12a.5.5 0 1 1-.708-.706l2.122-2.122a.5.5 0 0 1 .707 0Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgReceiptKqlNew20Filled);

export { ForwardRef as default };
