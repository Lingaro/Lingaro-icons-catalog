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
var SvgHexagonThreeRotated24Regular = function SvgHexagonThreeRotated24Regular(_a, ref) {
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
    d: "M2.68 18.338c0 .625.334 1.203.876 1.516l2.75 1.587a1.75 1.75 0 0 0 1.75 0l2.75-1.587a1.75 1.75 0 0 0 .875-1.516v-3.175a1.75 1.75 0 0 0-.875-1.516l-2.75-1.588a1.75 1.75 0 0 0-1.75 0l-2.75 1.588a1.75 1.75 0 0 0-.875 1.516v3.175Zm1.626.217a.25.25 0 0 1-.125-.217v-3.175a.25.25 0 0 1 .125-.217l2.75-1.588a.25.25 0 0 1 .25 0l2.75 1.588a.25.25 0 0 1 .125.217v3.175a.25.25 0 0 1-.125.217l-2.75 1.587a.25.25 0 0 1-.25 0zm9.374-.217c0 .625.334 1.203.876 1.516l2.75 1.587a1.75 1.75 0 0 0 1.75 0l2.75-1.587a1.75 1.75 0 0 0 .875-1.516v-3.175a1.75 1.75 0 0 0-.875-1.516l-2.75-1.588a1.75 1.75 0 0 0-1.75 0l-2.75 1.588a1.75 1.75 0 0 0-.875 1.516zm1.626.217a.25.25 0 0 1-.125-.217v-3.175a.25.25 0 0 1 .125-.217l2.75-1.588a.25.25 0 0 1 .25 0l2.75 1.588a.25.25 0 0 1 .125.217v3.175a.25.25 0 0 1-.125.217l-2.75 1.587a.25.25 0 0 1-.25 0zm-6.25-8.201a1.75 1.75 0 0 1-.875-1.516V5.663c0-.626.333-1.203.875-1.516l2.75-1.588a1.75 1.75 0 0 1 1.75 0l2.75 1.588c.541.313.875.89.875 1.516v3.175a1.75 1.75 0 0 1-.875 1.516l-2.75 1.587a1.75 1.75 0 0 1-1.75 0zm.625-1.516c0 .09.047.172.125.217l2.75 1.587a.25.25 0 0 0 .25 0l2.75-1.587a.25.25 0 0 0 .125-.217V5.663a.25.25 0 0 0-.125-.217l-2.75-1.588a.25.25 0 0 0-.25 0l-2.75 1.588a.25.25 0 0 0-.125.217z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgHexagonThreeRotated24Regular);

export { ForwardRef as default };
