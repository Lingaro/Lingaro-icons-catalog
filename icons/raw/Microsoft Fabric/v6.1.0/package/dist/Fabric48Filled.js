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
var SvgFabric48Filled = function SvgFabric48Filled(_a, ref) {
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
    d: "m13.16 18.74 26.94-3.98h.01c.64-.09 1.16-.56 1.32-1.17l2.51-7.57c.04-.14.06-.28.06-.43C44 4.71 43.28 4 42.4 4q-.051.001-.1.005l-.1.005-25.71 3.8c-2.79.44-5.227 2.48-5.957 5.17L8.41 20.74c.3-1.093 1.26-1.37 4.75-2m-.135 2.563c-3.229.67-4.436 1.749-5.142 3.327-.121.275-.23.572-.33.88l-1.855 6.56c.903-.506 2.004-.916 3.342-1.134l.02-.003 18.187-2.668c1.584-.26 1.88-1.37 2.184-2.502l.068-.254 1.91-6.94-17.844 2.638zm-3.583 12.1c-3.638.592-4.831 2.998-5.117 3.733A5 5 0 0 0 4 38.921a5.04 5.04 0 0 0 4.477 5.012c.707.105 1.509.096 2.416-.038l4.133-.573a2.62 2.62 0 0 0 2.168-1.909l2.596-9.527z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgFabric48Filled);

export { ForwardRef as default };
