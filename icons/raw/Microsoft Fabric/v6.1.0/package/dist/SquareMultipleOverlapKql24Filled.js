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
var SvgSquareMultipleOverlapKql24Filled = function SvgSquareMultipleOverlapKql24Filled(_a, ref) {
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
    d: "M10 2a3.5 3.5 0 0 0-3.465 3h2.05A1.5 1.5 0 0 1 10 4h8.5A1.5 1.5 0 0 1 20 5.5v7.96l2-.015V5.5A3.5 3.5 0 0 0 18.5 2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 10.5v2.98l-1.287.01a2 2 0 0 0-.713.131V10.5A1.5 1.5 0 0 0 14 9H5.5A1.5 1.5 0 0 0 4 10.5V19a1.5 1.5 0 0 0 1.5 1.5h7.428a2.26 2.26 0 0 0 .702.691c-.32.38-.495.84-.524 1.309H5.5A3.5 3.5 0 0 1 2 19v-8.5A3.5 3.5 0 0 1 5.5 7H14a3.5 3.5 0 0 1 3.5 3.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 17.825a.75.75 0 0 0-.501.219l-.707.707a.75.75 0 0 0 1.06 1.06l.708-.706a.75.75 0 0 0-.56-1.28m1.915 1.945a.75.75 0 0 0-.473.218l-2.12 2.121a.75.75 0 0 0-.194.335h.001a.75.75 0 0 0 1.255.726l2.121-2.121a.75.75 0 0 0-.59-1.278Zm.085-2.302-1.625-1.625a.5.5 0 0 1 .35-.854h.002l6.32-.048a.5.5 0 0 1 .505.504l-.05 6.32a.5.5 0 0 1-.853.35l-4.649-4.65zm2.448 4.465a.75.75 0 0 1 0 1.06l-.707.708a.75.75 0 0 1-1.06-1.06l.707-.708a.75.75 0 0 1 1.06 0"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSquareMultipleOverlapKql24Filled);

export { ForwardRef as default };
