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
var SvgPulseSquarePerson24Regular = function SvgPulseSquarePerson24Regular(_a, ref) {
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
    d: "M20.999 5.25A2.25 2.25 0 0 0 18.749 3H5.25A2.25 2.25 0 0 0 3 5.25v13.502a2.25 2.25 0 0 0 2.25 2.25h7.922A3.7 3.7 0 0 1 13 19.875v-.103q0-.136.013-.27H5.25a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h13.499a.75.75 0 0 1 .75.75v5.895c.576.17 1.09.486 1.5.904v-6.8Zm0 11.7-.05.05H21v-.05Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.25 11.5h1.446a3.5 3.5 0 0 0-1.695 2.923l-.83 1.658a.75.75 0 0 1-1.319.043l-.048-.1-2.337-5.835-1.035 2.362a.75.75 0 0 1-.577.44l-.11.009H6.75a.75.75 0 0 1-.102-1.493l.102-.007h1.505l1.557-3.551a.75.75 0 0 1 1.333-.08l.05.102 2.381 5.947 1.003-2.004a.75.75 0 0 1 .566-.407zm5.75 3a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m2 5.375C23 21.431 21.714 23 18.5 23S14 21.437 14 19.875v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgPulseSquarePerson24Regular);

export { ForwardRef as default };
