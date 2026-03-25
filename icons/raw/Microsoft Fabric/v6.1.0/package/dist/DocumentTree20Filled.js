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
var SvgDocumentTree20Filled = function SvgDocumentTree20Filled(_a, ref) {
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
    d: "M10 2.001v4.5a1.5 1.5 0 0 0 1.5 1.5h-3a1.5 1.5 0 0 0-1.5 1.5v.879l-.796.796a1.5 1.5 0 0 0-.704-.175H4v-7.5a1.5 1.5 0 0 1 1.5-1.5zm1.5 6H16v8.5a1.5 1.5 0 0 1-1.5 1.5H13v-2.5a1.5 1.5 0 0 0-1.5-1.5 1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 2.251v4.25a.5.5 0 0 0 .5.5h4.25zm-2.5 6.75a.5.5 0 0 0-.5.5v1.31a.5.5 0 0 0-.088.07L6 12.795V12.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-.293l1.912 1.912a.5.5 0 0 0 .088.07V18.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.293L6.207 14 8 12.208v.293a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm-5.5 4h2v2H3zm6 5v-2h2v2zm0-8h2v2H9z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDocumentTree20Filled);

export { ForwardRef as default };
