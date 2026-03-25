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
var SvgBeakerFlash32Regular = function SvgBeakerFlash32Regular(_a, ref) {
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
    d: "M20 5v8.438q0 .397.077.784a2.5 2.5 0 0 0-1.187 1.12l-.329.63A6 6 0 0 1 18 13.438V5h-4v8.438a6 6 0 0 1-1.067 3.415L12.139 18h5.363l-1.044 2H11q-.118 0-.228-.026l-3.55 5.127A1.21 1.21 0 0 0 8.218 27h10.498l-.696 2H8.218c-2.59 0-4.114-2.908-2.64-5.037l5.71-8.248A4 4 0 0 0 12 13.438V5h-1a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21.12 15h8.38a.5.5 0 0 1 .428.76L26.748 21h2.491a.75.75 0 0 1 .52 1.29l-8.747 8.427c-.757.73-1.984-.055-1.638-1.05L21 25h-4.251a.75.75 0 0 1-.672-1.083l4.147-8.361A1 1 0 0 1 21.12 15"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBeakerFlash32Regular);

export { ForwardRef as default };
