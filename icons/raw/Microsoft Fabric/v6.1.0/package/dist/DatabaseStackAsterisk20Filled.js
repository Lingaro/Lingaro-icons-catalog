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
var SvgDatabaseStackAsterisk20Filled = function SvgDatabaseStackAsterisk20Filled(_a, ref) {
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
    d: "M14.496 1.997a.5.5 0 0 1 .5.5v2.467l2.349-.763a.5.5 0 1 1 .309.951l-2.348.763 1.45 1.996a.5.5 0 0 1-.809.588l-1.45-1.995-1.449 1.995a.5.5 0 1 1-.809-.588l1.451-1.997-2.344-.762a.5.5 0 0 1 .309-.951l2.341.76V2.498a.5.5 0 0 1 .5-.5Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.55 2.101A12 12 0 0 0 10 2C6.686 2 4 3.343 4 5s2.686 3 6 3q.378 0 .743-.023A4.5 4.5 0 0 1 10 5.5c0-1.357.6-2.574 1.55-3.399M14.5 10c.526 0 1.03-.09 1.5-.256V10c0 1.657-2.686 3-6 3s-6-1.343-6-3V7.12c.383.362.84.661 1.31.896C6.562 8.642 8.222 9 10 9q.801 0 1.559-.094A4.48 4.48 0 0 0 14.5 10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 12.12c-.383.362-.84.661-1.31.896-1.252.626-2.912.984-4.69.984s-3.438-.358-4.69-.984A5.5 5.5 0 0 1 4 12.12V15c0 1.657 2.686 3 6 3s6-1.343 6-3z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabaseStackAsterisk20Filled);

export { ForwardRef as default };
