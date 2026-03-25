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
var SvgDataScience24Filled = function SvgDataScience24Filled(_a, ref) {
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
    fillRule: "evenodd",
    d: "m10.375 22.004.34-.567 5.204-8.694 3.857-6.442a.9.9 0 0 0 .117-.446c0-.354-.197-.662-.482-.79l-7.025-2.978A1.1 1.1 0 0 0 11.97 2c-.145 0-.285.03-.416.082L4.889 4.814l6.286 3.118c.399.225.68.646.68 1.164 0 .293-.089.56-.241.776l-7.43 8.33a.91.91 0 0 0 .066 1.206.7.7 0 0 0 .22.154zM7.712 12l1.944-2.177-.004-.017a.68.68 0 0 0 .173-.454.67.67 0 0 0-.304-.566l-5.04-2.5a.88.88 0 0 0 .107.599zm4.973 9.106 4.245-7.13 3.117 3.798a.91.91 0 0 1-.066 1.212.7.7 0 0 1-.224.155l-6.379 2.824-.005-.003a.56.56 0 0 1-.623-.15.61.61 0 0 1-.065-.706",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataScience24Filled);

export { ForwardRef as default };
