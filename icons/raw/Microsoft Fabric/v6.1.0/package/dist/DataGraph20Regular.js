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
var SvgDataGraph20Regular = function SvgDataGraph20Regular(_a, ref) {
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
    d: "M3 2.5a.5.5 0 0 0-1 0v15a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 0-1H3v-4.175l3.931-1.747 3.014 2.319a.5.5 0 0 0 .253.1l4.75.5a.5.5 0 0 0 .25-.037l2.532-1.094a.5.5 0 1 0-.397-.918l-2.41 1.041-4.48-.471-3.138-2.414a.5.5 0 0 0-.508-.06L3 11.73V8.985a.5.5 0 0 0 .093-.035l3.888-1.885 6.771 3.87a.5.5 0 0 0 .624-.105l3.5-4a.5.5 0 0 0-.752-.659l-3.23 3.692-6.646-3.797a.5.5 0 0 0-.466-.015L3 7.884z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataGraph20Regular);

export { ForwardRef as default };
