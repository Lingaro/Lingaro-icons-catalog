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
var SvgShoppingBagDataBarVertical20Regular = function SvgShoppingBagDataBarVertical20Regular(_a, ref) {
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
    d: "M4.586 16.414A2 2 0 0 0 6 17h3v1H6a3 3 0 0 1-3-3V7a1 1 0 0 1 1-1h1V4.5a2.5 2.5 0 0 1 4-2 2.5 2.5 0 0 1 4 2V6h1a1 1 0 0 1 1 1v4.268A2 2 0 0 0 14 11V7h-3v6a2 2 0 0 0-1 .278V7H4v8a2 2 0 0 0 .586 1.414M11.56 3.44a1.5 1.5 0 0 0-1.894-.187c.219.38.334.81.333 1.248V6h2V4.5a1.5 1.5 0 0 0-.44-1.06Zm-5.122 0A1.5 1.5 0 0 0 6 4.5V6h3V4.5a1.5 1.5 0 0 0-2.56-1.06Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.293 10.293A1 1 0 0 0 16 11v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1.707-.707m-6 4A1 1 0 0 0 10 15v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1.707-.707m3-2A1 1 0 0 0 13 13v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1.707-.707"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgShoppingBagDataBarVertical20Regular);

export { ForwardRef as default };
