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
var SvgDataFactory32Filled = function SvgDataFactory32Filled(_a, ref) {
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
    d: "M10.118 2.004a.97.97 0 0 0-.959 1.106 17.435 17.435 0 0 0 17.258 14.93h3.576v-6.117a2.33 2.33 0 0 0-2.33-2.331h-.966a8.17 8.17 0 0 1-7.803-5.768l-.308-.994a1.17 1.17 0 0 0-1.113-.826zm1.252 20.669a17.1 17.1 0 0 0-2.21 6.239.956.956 0 0 0 .944 1.092h7.376a1.17 1.17 0 0 0 1.113-.826l.308-.994a8.17 8.17 0 0 1 7.803-5.768h.966A2.33 2.33 0 0 0 30 20.085v-.051l-.007.007h-3.576q-1.36-.002-2.676-.183c-.155 1.343-1.179 2.815-2.969 2.815zM2.99 11.335h7.216a19.46 19.46 0 0 0 11.556 8.143v.026c0 .644-.444 1.169-.99 1.169H2.99c-.545 0-.99-.525-.99-1.17v-7c0-.643.445-1.168.99-1.168",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataFactory32Filled);

export { ForwardRef as default };
