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
var SvgReceiptKql24Filled = function SvgReceiptKql24Filled(_a, ref) {
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
    d: "M6.178 4a2.25 2.25 0 0 0-2.25 2.25v7.233l5.534-.042a2 2 0 0 1 2.015 2.015l-.039 5.044h5.74a3.25 3.25 0 0 0 3.25-3.25V14h-3.5V6.25A2.25 2.25 0 0 0 14.678 4zm11 15h-.25v-3.5h2v1.75a1.75 1.75 0 0 1-1.75 1.75M6.928 8.75a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.48 14.94a.5.5 0 0 1 .5.505l-.05 6.32a.5.5 0 0 1-.853.35L7.462 20.5H7.46l-3.532-3.532v-.002l-1.123-1.123a.5.5 0 0 1 .35-.854l6.318-.048h.006Zm-4.547 6.109a.75.75 0 0 0-1.06-1.06l-2.122 2.12a.75.75 0 1 0 1.06 1.061zm-1.946-1.944a.75.75 0 0 0-1.06-1.061l-.707.707a.75.75 0 0 0 1.06 1.06zm3.889 2.828a.75.75 0 0 1 0 1.06l-.707.708a.75.75 0 0 1-1.06-1.06l.706-.708a.75.75 0 0 1 1.061 0"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgReceiptKql24Filled);

export { ForwardRef as default };
