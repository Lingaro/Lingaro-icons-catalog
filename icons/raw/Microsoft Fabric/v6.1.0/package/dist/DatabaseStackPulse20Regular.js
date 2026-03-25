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
var SvgDatabaseStackPulse20Regular = function SvgDatabaseStackPulse20Regular(_a, ref) {
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
    d: "M5.904 2.777C4.875 3.245 4 3.993 4 5v10c0 1.007.875 1.755 1.904 2.223C6.978 17.71 8.427 18 10 18q.127 0 .255-.003a5.5 5.5 0 0 1-.659-1.004c-1.299-.045-2.447-.302-3.278-.68C5.356 15.875 5 15.373 5 15v-3.302c.271.202.58.378.904.525.892.406 2.044.674 3.31.753q.15-.515.39-.983c-1.303-.044-2.453-.302-3.286-.68C5.356 10.875 5 10.373 5 10V6.698c.271.202.58.378.904.525C6.978 7.711 8.427 8 10 8s3.022-.289 4.096-.777A5 5 0 0 0 15 6.698v2.324a5.5 5.5 0 0 1 1 .185V5c0-1.007-.875-1.755-1.904-2.223C13.022 2.289 11.573 2 10 2s-3.022.289-4.096.777m.414 3.536C5.356 5.875 5 5.373 5 5c0-.374.356-.875 1.318-1.313C7.234 3.271 8.536 3 10 3s2.766.27 3.682.687C14.644 4.125 15 4.627 15 5c0 .374-.356.875-1.318 1.313C12.766 6.729 11.464 7 10 7s-2.766-.27-3.682-.687"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-5.556-2a.5.5 0 0 0-.475.303l-.584 1.364H12a.5.5 0 1 0 0 1h.714a.5.5 0 0 0 .46-.303l.212-.496.643 1.8a.5.5 0 0 0 .935.018l.672-1.673.209.39a.5.5 0 0 0 .44.264H17a.5.5 0 0 0 0-1h-.415l-.573-1.07a.5.5 0 0 0-.905.05l-.58 1.443-.628-1.758a.5.5 0 0 0-.455-.332"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabaseStackPulse20Regular);

export { ForwardRef as default };
