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
var SvgAsteriskCircle20Filled = function SvgAsteriskCircle20Filled(_a, ref) {
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
    d: "M18 10a8 8 0 1 0-16 0 8 8 0 0 0 16 0m-7.5-3.5v2.293l1.622-1.622a.5.5 0 0 1 .637-.058l.07.058a.5.5 0 0 1 .057.638l-.057.07-1.621 1.62H13.5a.5.5 0 0 1 .492.41L14 10a.5.5 0 0 1-.41.492l-.09.008h-2.293l1.622 1.622a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.638.057l-.07-.058-1.621-1.621V13.5a.5.5 0 0 1-.41.492L10 14a.5.5 0 0 1-.492-.41L9.5 13.5v-2.292l-1.621 1.621a.5.5 0 0 1-.638.058l-.07-.058a.5.5 0 0 1-.057-.638l.058-.069L8.793 10.5H6.5a.5.5 0 0 1-.492-.41L6 10a.5.5 0 0 1 .41-.491L6.5 9.5h2.293L7.172 7.878a.5.5 0 0 1-.058-.637l.058-.07a.5.5 0 0 1 .638-.058l.069.058L9.5 8.792V6.5a.5.5 0 0 1 .41-.492L10 6a.5.5 0 0 1 .492.41z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgAsteriskCircle20Filled);

export { ForwardRef as default };
