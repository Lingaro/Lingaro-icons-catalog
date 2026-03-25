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
var SvgShapesThree20Regular = function SvgShapesThree20Regular(_a, ref) {
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
    d: "M4 4.75C4 3.784 4.784 3 5.75 3h4.5c.966 0 1.75.784 1.75 1.75v1.189l-.014.024L11 7.691V4.75a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0-.75.75v3.457q-.524.149-1 .393zm5.565 5.455A4.48 4.48 0 0 0 6.5 9 4.493 4.493 0 0 0 2 13.5a4.5 4.5 0 1 0 7.565-3.295M8.95 11A3.49 3.49 0 0 1 10 13.499v.001a3.5 3.5 0 0 1-.337 1.5 3.5 3.5 0 1 1-.713-4m8.782 4h-5.939q.14-.493.186-1.017h5.579L13.64 7.119l-2.229 3.905a5.5 5.5 0 0 0-.616-.959l2.058-3.606a.903.903 0 0 1 1.573 0l4.091 7.169c.348.61-.088 1.372-.786 1.372Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgShapesThree20Regular);

export { ForwardRef as default };
