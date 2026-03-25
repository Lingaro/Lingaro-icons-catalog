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
var SvgDataAreaLocation20Filled = function SvgDataAreaLocation20Filled(_a, ref) {
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
    d: "M3 2.49a.5.5 0 0 0-1 .01v15a.5.5 0 0 0 .5.5h10.313a9 9 0 0 1-.74-1H3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 5.5v3.528A5 5 0 0 0 15.501 9C12.851 9 11 11.163 11 13.682c0 .737.177 1.524.532 2.317H4V8.287l2.797-1.243a.5.5 0 0 1 .451.022l3.205 1.832 4.735-3.788A.5.5 0 0 1 16 5.5"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M15.501 10.002c2.034 0 3.499 1.648 3.499 3.68 0 1.525-.979 3.53-3.253 5.237a.41.41 0 0 1-.491 0C12.982 17.213 12 15.207 12 13.683c0-2.033 1.468-3.681 3.501-3.681M15.5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataAreaLocation20Filled);

export { ForwardRef as default };
