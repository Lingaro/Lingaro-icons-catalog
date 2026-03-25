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
var SvgDatabases48Regular = function SvgDatabases48Regular(_a, ref) {
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
    d: "M30.146 4H6.5A2.5 2.5 0 0 0 4 6.5c0 .203.018.402.077.588.078.244 4.633 14.485 6.999 21.86a2.5 2.5 0 0 0 2.375 1.719h5.182l1.582 4.932a2.5 2.5 0 0 0 2.382 1.735h5.178l1.577 4.915a2.5 2.5 0 0 0 2.386 1.752h.595c6.443 0 11.667-2.985 11.667-6.667V11.917C44 7.545 37.797 4 30.146 4M6.514 6.5h23.632c6.498 0 11.354 2.86 11.354 5.417 0 1.462-1.592 3.021-4.167 4.09v-.838c0-2.646-2.666-4.501-5.954-4.501H15.645a2.5 2.5 0 0 0-2.384 3.256l4.571 14.247-4.375.014C11.226 21.229 7.048 8.169 6.514 6.5m16.082 28.335s-6.632-20.673-6.95-21.668h15.733c1.905 0 3.454.898 3.454 2.001v1.635a20.5 20.5 0 0 1-4.688.531h-5.359a2.5 2.5 0 0 0-2.38 3.268l4.567 14.232zm9.737 6.665-.601-.016-.561-1.749-6.385-19.902h5.359c4.702 0 8.85-1.342 11.354-3.388v20.888c0 1.699-3.57 4.167-9.166 4.167"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabases48Regular);

export { ForwardRef as default };
