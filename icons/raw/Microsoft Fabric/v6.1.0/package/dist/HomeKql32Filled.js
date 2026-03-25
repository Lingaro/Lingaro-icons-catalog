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
var SvgHomeKql32Filled = function SvgHomeKql32Filled(_a, ref) {
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
    d: "M17.374 3.546a2 2 0 0 0-2.748 0l-9.687 9.15A3 3 0 0 0 4 14.875v11.129A3 3 0 0 0 7 29h10.354v-.062a3 3 0 0 1 .877-2.122l.036-.035a3 3 0 0 1-.388-.319 3 3 0 0 1 0-4.242l.707-.707q.196-.195.424-.349A2.8 2.8 0 0 1 21.461 17H28v-2.126a3 3 0 0 0-.939-2.178z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M29.514 19H21.46a.806.806 0 0 0-.568 1.376l8.053 8.053a.8.8 0 0 0 1.374-.57v-8.054a.8.8 0 0 0-.8-.8zm-8.099 5.341-.707.707a1 1 0 0 1-1.427.012 1 1 0 0 1 .013-1.426l.707-.707a1 1 0 0 1 1.414 1.414m2.474 1.059a1 1 0 0 1 0 1.415l-2.83 2.829a1 1 0 0 1-1.413-1.414l2.829-2.83a1 1 0 0 1 1.414 0m1.061 2.476a1 1 0 1 1 1.413 1.415l-.707.709a1 1 0 0 1-1.414 0 1 1 0 0 1 0-1.415l.707-.709Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgHomeKql32Filled);

export { ForwardRef as default };
