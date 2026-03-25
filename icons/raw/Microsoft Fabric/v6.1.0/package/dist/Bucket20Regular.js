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
var SvgBucket20Regular = function SvgBucket20Regular(_a, ref) {
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
    d: "M3.065 4.063a1.5 1.5 0 0 0-.047.665l1.778 11.576A2 2 0 0 0 6.773 18h6.426a2 2 0 0 0 1.976-1.696l1.78-11.576A1.5 1.5 0 0 0 15.471 3H4.5a1.5 1.5 0 0 0-.802.232 1.5 1.5 0 0 0-.633.83ZM4.36 4.02A.5.5 0 0 1 4.5 4h10.972q.075 0 .142.02a6 6 0 0 1-.382.344C14.259 5.165 12.622 6 9.987 6c-2.634 0-4.271-.835-5.244-1.636a6 6 0 0 1-.383-.344m-.27 1.102.017.014C5.259 6.085 7.12 7 9.987 7s4.729-.915 5.88-1.864l.015-.012-1.695 11.028A1 1 0 0 1 13.2 17H6.773a1 1 0 0 1-.988-.848z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBucket20Regular);

export { ForwardRef as default };
