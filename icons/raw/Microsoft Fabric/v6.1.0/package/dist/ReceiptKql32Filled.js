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
var SvgReceiptKql32Filled = function SvgReceiptKql32Filled(_a, ref) {
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
    d: "M4.336 8.5a4.5 4.5 0 0 1 4.5-4.5h9a4.5 4.5 0 0 1 4.5 4.5V20h6v3.5a4.5 4.5 0 0 1-4.5 4.5h-9.584q.022-.165.022-.34v-7.961c0-.762-.098-1.376-.59-1.867a2.68 2.68 0 0 0-1.348-.723V17h5a1 1 0 1 0 0-2h-8a1 1 0 1 0 0 2v.045h-5zm4 2.5a1 1 0 0 0 1 1h8a1 1 0 1 0 0-2h-8a1 1 0 0 0-1 1m14 11v4h1.5a2.5 2.5 0 0 0 2.5-2.5V22z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.515 19H3.461a.805.805 0 0 0-.568 1.376l8.053 8.053a.806.806 0 0 0 1.374-.57v-8.054a.805.805 0 0 0-.805-.805m-8.808 6.048.707-.707A1 1 0 1 0 2 22.927l-.707.707a1 1 0 1 0 1.414 1.414m3.182.353a1 1 0 0 1 0 1.415L3.06 29.643a1 1 0 1 1-1.414-1.414L4.475 25.4a1 1 0 0 1 1.414 0Zm2.474 2.475a1 1 0 0 0-1.414 0l-.707.707a1 1 0 1 0 1.414 1.415l.707-.707a1 1 0 0 0 0-1.415"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgReceiptKql32Filled);

export { ForwardRef as default };
