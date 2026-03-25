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
var SvgDatabases24Filled = function SvgDatabases24Filled(_a, ref) {
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
    d: "M3.25 2C2.56 2 2 2.56 2 3.25c0 .102.009.201.039.294.039.122 2.316 7.242 3.5 10.93.164.499.634.86 1.188.86h2.591L7.564 9.866l-.002-.004-.93-2.9a1.25 1.25 0 0 1 1.192-1.628h7.867c1.644 0 2.977 1.08 2.977 2.607v1.13c1.189-.742 1.833-1.792 1.833-2.988 0-2.29-2.439-4.083-6.633-4.083z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m14.793 11.667 3.075 9.576c.183.571.803.887 1.269.706 1.799-.697 2.862-1.837 2.862-3.282V6.083c0 2.651-2.234 5.343-7.207 5.583z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.167 9.748c-.78.238-1.682.39-2.716.419l.001.001a1.25 1.25 0 0 0-1.19 1.634l2.203 6.866h-2.591a1.25 1.25 0 0 1-1.188-.86L8.165 6.834h7.525c.734 0 1.477.38 1.477 1.107z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabases24Filled);

export { ForwardRef as default };
