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
var SvgDocumentMultipleQuestion20Filled = function SvgDocumentMultipleQuestion20Filled(_a, ref) {
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
    d: "M9 2v4.5A1.5 1.5 0 0 0 10.5 8H15v6.5a1.5 1.5 0 0 1-1.5 1.5h-3.1A5.5 5.5 0 0 0 4 8.207V3.5A1.5 1.5 0 0 1 5.5 2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.663 18h4.398A3.94 3.94 0 0 0 17 14.06V9a1 1 0 0 0-1-1v6a3 3 0 0 1-3 3H9.743a5.5 5.5 0 0 1-1.08 1M10 6.5V2.25L14.75 7H10.5a.5.5 0 0 1-.5-.5m0 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-4.5 1.88a.625.625 0 1 0 0 1.25.625.625 0 0 0 0-1.25m0-4.877c-1.048 0-1.864.818-1.853 1.955a.5.5 0 1 0 1-.01c-.006-.579.36-.945.853-.945.472 0 .853.392.853.95 0 .202-.07.315-.36.544l-.277.215C5.21 13.616 5 13.929 5 14.5a.5.5 0 0 0 .992.09l.011-.156c.017-.148.1-.254.346-.448l.277-.215c.513-.41.727-.732.727-1.318 0-1.104-.822-1.95-1.853-1.95"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDocumentMultipleQuestion20Filled);

export { ForwardRef as default };
