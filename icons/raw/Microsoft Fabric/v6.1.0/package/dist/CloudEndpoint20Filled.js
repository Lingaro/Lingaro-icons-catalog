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
var SvgCloudEndpoint20Filled = function SvgCloudEndpoint20Filled(_a, ref) {
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
    d: "M10 4c2.817 0 4.415 1.923 4.647 4.246h.07c1.814 0 3.283 1.512 3.283 3.377 0 1.405-.835 2.61-2.022 3.119A1.502 1.502 0 0 0 14.498 13h-1.206a5.496 5.496 0 0 0-5.293-4 5.5 5.5 0 0 0-2.057.407 1.5 1.5 0 0 0-.822.803 1.5 1.5 0 0 0-.014 1.146c.211.53.695.886 1.254.937A2.75 2.75 0 0 0 5.295 15h-.013C3.469 15 2 13.488 2 11.623s1.47-3.377 3.282-3.377h.071C5.587 5.908 7.183 4 10 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 11q-.646-.002-1.314.264a.5.5 0 1 1-.372-.928A4.5 4.5 0 0 1 8 10a4.514 4.514 0 0 1 4.472 4H14.5a.5.5 0 1 1 0 1h-2.027A4.514 4.514 0 0 1 8 19a4.5 4.5 0 0 1-1.686-.336.5.5 0 1 1 .372-.928Q7.353 18.001 8 18c1.924 0 3.5-1.576 3.5-3.5S9.924 11 8 11"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 16.25a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgCloudEndpoint20Filled);

export { ForwardRef as default };
