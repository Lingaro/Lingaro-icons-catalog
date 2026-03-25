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
var SvgFabric32Filled = function SvgFabric32Filled(_a, ref) {
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
    d: "m8.681 11.925 18.686-2.661h.006a1.08 1.08 0 0 0 .892-.79l1.694-5.111a1.078 1.078 0 0 0-1.107-1.36q-.033.002-.067.003L10.805 4.51a4.84 4.84 0 0 0-3.903 3.504l-1.428 5.26c.25-.834.722-.916 2.45-1.217q.344-.059.757-.133Zm-.363 2.186c-2.26.47-3.138 1.198-3.633 2.303-.084.192-.161.4-.23.615l-1.266 4.619a7.1 7.1 0 0 1 2.339-.794l.014-.002 12.731-1.868c1.108-.182 1.317-.959 1.529-1.751.015-.06-.017.059 0 0l1.385-5.036zm-2.65 8.746c-2.452.4-3.256 2.02-3.45 2.516A3.4 3.4 0 0 0 2 26.576a3.395 3.395 0 0 0 3.018 3.378c.476.07 1.016.064 1.627-.026l2.786-.386a1.77 1.77 0 0 0 1.46-1.287l1.75-6.42-6.974 1.022Z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgFabric32Filled);

export { ForwardRef as default };
