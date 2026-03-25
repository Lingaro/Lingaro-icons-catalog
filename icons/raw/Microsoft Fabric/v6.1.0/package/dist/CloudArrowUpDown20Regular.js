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
var SvgCloudArrowUpDown20Regular = function SvgCloudArrowUpDown20Regular(_a, ref) {
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
    d: "M10 3c2.817 0 4.415 1.923 4.647 4.246h.07c1.814 0 3.283 1.512 3.283 3.377 0 .379-.06.743-.172 1.082l-.266-.266a1.5 1.5 0 0 0-.602-.368 2.5 2.5 0 0 0 .04-.448c0-1.32-1.028-2.377-2.282-2.377h-.071a1 1 0 0 1-.995-.9C13.45 5.325 12.109 4 10 4 7.886 4 6.551 5.316 6.348 7.345a1 1 0 0 1-.995.901h-.07C4.027 8.246 3 9.304 3 10.623 3 11.943 4.028 13 5.282 13h5.364v1H5.282C3.469 14 2 12.488 2 10.623 2 8.82 3.373 7.347 5.102 7.251l.251-.005C5.587 4.908 7.183 3 10 3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m12.646 16.293.793-.793a.5.5 0 0 1 .707.707L12.5 17.854a.5.5 0 0 1-.707 0l-1.647-1.647a.5.5 0 1 1 .708-.707l.792.793V12.5a.5.5 0 0 1 1 0zm4.208-4.147 1.646 1.647a.5.5 0 0 1-.707.707L17 13.707V17.5a.5.5 0 0 1-1 0v-3.793l-.793.793a.5.5 0 0 1-.707-.707l1.646-1.647a.5.5 0 0 1 .708 0"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgCloudArrowUpDown20Regular);

export { ForwardRef as default };
