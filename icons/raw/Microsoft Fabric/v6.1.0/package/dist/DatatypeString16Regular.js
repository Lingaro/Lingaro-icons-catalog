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
var SvgDatatypeString16Regular = function SvgDatatypeString16Regular(_a, ref) {
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
    d: "M2.943 5.001a.5.5 0 0 1 .464.333l1.774 5a.5.5 0 0 1-.942.334l-.237-.667H1.73l-.264.68a.5.5 0 0 1-.932-.36l1.935-5A.5.5 0 0 1 2.943 5Zm-.826 4h1.53l-.732-2.062zm4.383-4h1.503c.162 0 .602 0 1.008.228.214.12.418.303.564.57q.218.398.219.96c0 .456-.125.811-.32 1.078.148.106.287.246.398.428q.245.401.246.978c0 .751-.352 1.227-.798 1.487a2.2 2.2 0 0 1-1.07.27H6.5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5Zm1.5 1H7v1.5h1.024c.12 0 .33-.023.494-.123.125-.075.276-.221.276-.618 0-.245-.048-.393-.096-.48a.44.44 0 0 0-.177-.18c-.16-.089-.363-.099-.52-.099Zm-1 2.5v1.5h1.25c.14 0 .38-.027.567-.136.148-.086.301-.239.301-.622 0-.137-.017-.24-.04-.32a.6.6 0 0 0-.06-.138.47.47 0 0 0-.204-.18c-.195-.097-.441-.104-.628-.104zm8.408-1.97c-.246-.687-.604-1.107-1.053-1.329-.41-.201-.834-.201-1.109-.201h-.027c-.554 0-.994.19-1.327.487-.322.288-.521.656-.646.99a4 4 0 0 0-.245 1.288v.026L11 7.8v.026c0 .383 0 1.085.25 1.724.13.335.334.669.656.936.325.268.742.445 1.257.503.417.046 1.663.013 2.23-1.246a.5.5 0 1 0-.911-.41c-.293.648-.93.693-1.208.662-.344-.039-.571-.149-.73-.28a1.26 1.26 0 0 1-.363-.528c-.176-.45-.181-.982-.181-1.383V7.79l.003-.059a3.3 3.3 0 0 1 .18-.905c.09-.242.214-.45.375-.593.15-.135.355-.233.66-.233.304 0 .51.008.694.098.158.078.371.257.555.769a.5.5 0 0 0 .941-.338Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatatypeString16Regular);

export { ForwardRef as default };
