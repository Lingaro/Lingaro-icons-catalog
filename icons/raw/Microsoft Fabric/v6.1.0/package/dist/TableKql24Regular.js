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
var SvgTableKql24Regular = function SvgTableKql24Regular(_a, ref) {
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
    d: "M17.97 20.97a.75.75 0 0 1 1.06 1.06l-.75.75a.75.75 0 0 1-1.06-1.06zm-2-2a.75.75 0 0 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06-1.06zM21.5 14a.5.5 0 0 1 .5.5v6.293a.5.5 0 0 1-.854.354l-6.293-6.293a.5.5 0 0 1 .354-.854z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.75 3A3.25 3.25 0 0 1 21 6.25V13h-1.5v-3h-4v3h-.293c-.526 0-.946.252-1.207.612V10h-4v4h3.797c-.16.447-.116.965.203 1.39v.11h-4v4h2.526c.286.28.644.44 1.013.485l-.276.278c-.213.213-.36.467-.44.737H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3zM4.5 17.75c0 .966.784 1.75 1.75 1.75H8.5v-4h-4zm0-3.75h4v-4h-4zm1.75-9.5A1.75 1.75 0 0 0 4.5 6.25V8.5h4v-4zm3.75 4h4v-4h-4zm5.5 0h4V6.25a1.75 1.75 0 0 0-1.75-1.75H15.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.97 16.97a.75.75 0 0 1 1.06 1.06l-.75.75a.75.75 0 0 1-1.06-1.06z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTableKql24Regular);

export { ForwardRef as default };
