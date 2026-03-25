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
var SvgDocumentTree20Regular = function SvgDocumentTree20Regular(_a, ref) {
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
    d: "M6 2.001a2 2 0 0 0-2 2v7h1v-7a1 1 0 0 1 1-1h4v3.5a1.5 1.5 0 0 0 1.5 1.5H15v8a1 1 0 0 1-1 1h-1v1h1a2 2 0 0 0 2-2V7.415a1.5 1.5 0 0 0-.44-1.06L11.647 2.44a1.5 1.5 0 0 0-1.06-.439zm8.793 5H11.5a.5.5 0 0 1-.5-.5V3.208z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 9.001a.5.5 0 0 0-.5.5v1.31a.5.5 0 0 0-.088.07L6 12.795V12.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-.293l1.912 1.912a.5.5 0 0 0 .088.07V18.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.293L6.207 14 8 12.208v.293a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm-5.5 4h2v2H3zm6 5v-2h2v2zm0-8h2v2H9z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDocumentTree20Regular);

export { ForwardRef as default };
