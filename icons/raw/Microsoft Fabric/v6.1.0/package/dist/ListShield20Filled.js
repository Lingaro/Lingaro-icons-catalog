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
var SvgListShield20Filled = function SvgListShield20Filled(_a, ref) {
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
    d: "M14.12 10.16a.535.535 0 0 1 .76 0c.508.532 1.484 1.378 2.684 1.552a.5.5 0 0 1 .436.482v2.323c0 3.122-2.784 4.255-3.386 4.463a.34.34 0 0 1-.227 0C13.785 18.773 11 17.64 11 14.517v-2.323a.5.5 0 0 1 .437-.482c1.199-.174 2.174-1.02 2.682-1.553ZM10 14.517q.002.52.082.983H2.75a.75.75 0 0 1 0-1.5H10zm4.344-5.51c-.35.035-.689.19-.948.462-.334.35-.823.77-1.383 1.031H2.75a.75.75 0 0 1 0-1.5h11.594zM13.25 4a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgListShield20Filled);

export { ForwardRef as default };
