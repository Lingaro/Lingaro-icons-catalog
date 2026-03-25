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
var SvgFolderTable20Regular = function SvgFolderTable20Regular(_a, ref) {
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
    d: "M4.5 3A2.5 2.5 0 0 0 2 5.5v9A2.5 2.5 0 0 0 4.5 17h2.626A4 4 0 0 1 7 16H4.5A1.5 1.5 0 0 1 3 14.5V8h4.086a1.5 1.5 0 0 0 1.06-.44L9.707 6H15.5a1.5 1.5 0 0 1 1.45 1.113c.373.091.726.235 1.05.422V7.5A2.5 2.5 0 0 0 15.5 5H9.707L8.22 3.513A1.75 1.75 0 0 0 6.982 3zM3 5.5A1.5 1.5 0 0 1 4.5 4h2.482a.75.75 0 0 1 .53.22l1.28 1.28L7.44 6.854A.5.5 0 0 1 7.086 7H3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 11a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3zm3-2a2 2 0 0 0-2 2h2zm1 0v2h3V9zm4 0v2h2a2 2 0 0 0-2-2m-1 3h-3v3h3zm3 0h-2v3h2zm-3 4h-3v2h3zm1 2a2 2 0 0 0 2-2h-2zm-5-6H9v3h2zm0 4H9a2 2 0 0 0 2 2z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgFolderTable20Regular);

export { ForwardRef as default };
