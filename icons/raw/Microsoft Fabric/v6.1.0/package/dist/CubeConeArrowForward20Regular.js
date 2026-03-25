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
var SvgCubeConeArrowForward20Regular = function SvgCubeConeArrowForward20Regular(_a, ref) {
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
    d: "M7.863 2.17a.5.5 0 0 0-.707.707l1.138 1.137H6.5a2.5 2.5 0 0 0-2.5 2.5.5.5 0 1 0 1 0 1.5 1.5 0 0 1 1.5-1.5h1.794L7.156 6.152a.5.5 0 0 0 .707.707l1.991-1.991a.5.5 0 0 0 0-.707zm-4.177 8.866a.5.5 0 1 0-.372.928l2.186.874V15a.5.5 0 0 0 1 0v-2.162l2.186-.874a.5.5 0 1 0-.372-.928L6 11.96z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.551 8.105a1.5 1.5 0 0 0-1.102 0l-3.5 1.384A1.5 1.5 0 0 0 1 10.884v4.23a1.5 1.5 0 0 0 .949 1.395l3.5 1.384a1.5 1.5 0 0 0 1.102 0l3.5-1.384A1.5 1.5 0 0 0 11 15.114v-1.997q.28.205.594.35.39.185.8.32a5.3 5.3 0 0 0 1.524.228l.04-.003a.4.4 0 0 1 .077 0l.04.003a5.3 5.3 0 0 0 1.523-.227q.41-.137.8-.32.425-.197.782-.5a2.8 2.8 0 0 0 .585-.68A1.57 1.57 0 0 0 18 11.46q0-.256-.07-.5a3 3 0 0 0-.18-.47L14.445 3.8a.45.45 0 0 0-.187-.2.5.5 0 0 0-.25-.063L14 3.54h-.008a.5.5 0 0 0-.25.063.45.45 0 0 0-.187.2l-2.981 6.033a1.5 1.5 0 0 0-.523-.347zm-.735.93a.5.5 0 0 1 .368 0l3.5 1.384a.5.5 0 0 1 .316.465v4.23a.5.5 0 0 1-.316.465l-3.5 1.384a.5.5 0 0 1-.368 0l-3.5-1.384A.5.5 0 0 1 2 15.114v-4.23a.5.5 0 0 1 .316-.465z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgCubeConeArrowForward20Regular);

export { ForwardRef as default };
