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
var SvgDocumentMultipleCheckmark16Regular = function SvgDocumentMultipleCheckmark16Regular(_a, ref) {
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
    d: "M12 11a2 2 0 0 1-1.577 1.955 5.5 5.5 0 0 0 .51-1.597A1 1 0 0 0 11 11V6.061h-.001V5h-1.5a1.5 1.5 0 0 1-1.5-1.5V2h-3a1 1 0 0 0-1 1v2.208a5.5 5.5 0 0 0-1 .393V3a2 2 0 0 1 2-2h3.586a1.5 1.5 0 0 1 1.06.44l1.915 1.914a1.5 1.5 0 0 1 .439 1.06V5.5H12zm-1.21-7H9.499a.5.5 0 0 1-.5-.5V2.207L10.791 4Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 6a1 1 0 0 0-1-1v6a3 3 0 0 1-3 3h-.257a5.5 5.5 0 0 1-1.08 1h1.547A3.79 3.79 0 0 0 14 11.21z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 10.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0M7.854 8.646a.5.5 0 0 0-.708 0L4.5 11.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDocumentMultipleCheckmark16Regular);

export { ForwardRef as default };
