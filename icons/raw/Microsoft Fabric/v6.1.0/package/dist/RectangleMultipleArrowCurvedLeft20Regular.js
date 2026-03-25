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
var SvgRectangleMultipleArrowCurvedLeft20Regular = function SvgRectangleMultipleArrowCurvedLeft20Regular(_a, ref) {
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
    d: "M9.763 3.565a2.626 2.626 0 0 1 4.253 2.06.5.5 0 0 0 1 0A3.626 3.626 0 0 0 8 4.338V2.515a.5.5 0 0 0-1 0v3a.5.5 0 0 0 .5.5h3.029a.5.5 0 0 0 0-1H8.836a2.63 2.63 0 0 1 .927-1.45M4.5 8A2.506 2.506 0 0 0 2 10.5v6C2 17.876 3.124 19 4.5 19h2C7.876 19 9 17.876 9 16.5v-6C9 9.124 7.876 8 6.5 8zM3 10.5C3 9.676 3.676 9 4.5 9h2c.824 0 1.5.676 1.5 1.5v6c0 .824-.676 1.5-1.5 1.5h-2c-.824 0-1.5-.676-1.5-1.5zm11.6-.5h.9c1.4 0 2.5 1.1 2.5 2.5v2c0 1.4-1.1 2.5-2.5 2.5h-.9c.1-.3.2-.6.3-1h.6c.8 0 1.5-.7 1.5-1.5v-2c0-.8-.7-1.5-1.5-1.5h-.6c-.1-.4-.2-.7-.3-1m-3.1-1h-1c-.15 0-.276.025-.4.05-.126.025-.25.05-.4.05.1.3.2.6.2 1 .2-.1.4-.1.6-.1h1c.8 0 1.5.7 1.5 1.5v4c0 .8-.7 1.5-1.5 1.5h-1c-.2 0-.4 0-.5-.1 0 .3-.1.7-.2 1 .09 0 .179.02.278.042.121.028.256.058.421.058h1c1.4 0 2.5-1.1 2.5-2.5v-4c0-1.4-1.1-2.5-2.5-2.5Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgRectangleMultipleArrowCurvedLeft20Regular);

export { ForwardRef as default };
