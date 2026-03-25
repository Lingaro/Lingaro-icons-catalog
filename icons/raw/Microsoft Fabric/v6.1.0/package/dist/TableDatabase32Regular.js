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
var SvgTableDatabase32Regular = function SvgTableDatabase32Regular(_a, ref) {
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
    d: "M4 9a5 5 0 0 1 5-5h14a5 5 0 0 1 5 5v2.578q-.724-.224-1.506-.362A14.3 14.3 0 0 0 23.999 11H26V9a3 3 0 0 0-3-3h-2v5h2.999c-2.205 0-4.3.49-5.916 1.38a8 8 0 0 0-.953.62H13v6h2v2h-2v5h2v.136c0 .687.16 1.309.429 1.864H9a5 5 0 0 1-5-5zm5-3a3 3 0 0 0-3 3v2h5V6zm4 0v5h6V6zm-2 13v-6H6v6zm-5 2v2a3 3 0 0 0 3 3h2v-5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M26.144 13.185c.624.11 1.21.268 1.743.465 1.876.694 3.111 1.874 3.111 3.214 0 2.134-3.134 3.864-6.999 3.864S17 18.998 17 16.864 20.134 13 23.999 13c.748 0 1.47.065 2.145.185"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23.999 22.273c2.146 0 4.166-.477 5.704-1.326a7 7 0 0 0 1.297-.91l-.002 6.1c0 2.133-3.134 3.863-6.999 3.863S17 28.27 17 26.136v-6.098c.396.354.84.658 1.295.909 1.538.85 3.558 1.326 5.704 1.326"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTableDatabase32Regular);

export { ForwardRef as default };
