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
var SvgTextLambda32Regular = function SvgTextLambda32Regular(_a, ref) {
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
    d: "M7.36 5.324c.132-.051.574-.138 1.168-.213A13 13 0 0 1 9.859 5a4.6 4.6 0 0 1 1.505.238c.495.171.912.523 1.301 1.053.397.54.72 1.2 1.055 1.922l1.183 2.55-7.81 16.816a1 1 0 0 0 1.814.843l7.098-15.283 7.088 15.282a1 1 0 1 0 1.814-.842L15.535 7.372c-.332-.714-.729-1.545-1.259-2.266-.538-.732-1.257-1.412-2.258-1.758A6.6 6.6 0 0 0 9.859 3c-.363 0-.994.053-1.581.127-.553.07-1.24.177-1.637.33a1 1 0 0 0 .719 1.867"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTextLambda32Regular);

export { ForwardRef as default };
