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
var SvgDatatypeAny20Regular = function SvgDatatypeAny20Regular(_a, ref) {
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
    fillRule: "evenodd",
    d: "M5.724 7.095a.5.5 0 0 0-.758.225l-1.935 5a.5.5 0 0 0 .932.362l.264-.681h2.25v-.061l.259.728a.5.5 0 0 0 .942-.334l-1.774-5a.5.5 0 0 0-.18-.24ZM4.614 11l.798-2.062L6.144 11z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.425 7.244a.5.5 0 0 0-.928.257v5a.5.5 0 0 0 1 0V9.306l2.071 3.452a.5.5 0 0 0 .929-.257v-5a.5.5 0 0 0-1 0v3.195zm4.315-.172a.5.5 0 0 1 .685.172l1.072 1.785 1.07-1.785a.5.5 0 0 1 .858.514l-1.428 2.382v2.36a.5.5 0 0 1-1 0v-2.36l-1.43-2.382a.5.5 0 0 1 .172-.686Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatatypeAny20Regular);

export { ForwardRef as default };
