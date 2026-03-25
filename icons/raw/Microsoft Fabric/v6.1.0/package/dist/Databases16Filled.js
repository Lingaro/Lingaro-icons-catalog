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
var SvgDatabases16Filled = function SvgDatabases16Filled(_a, ref) {
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
    d: "M9.397 1H1.875a.875.875 0 0 0-.848 1.081c.027.085 1.622 5.07 2.45 7.651a.88.88 0 0 0 .831.602h1.815L4.241 4.473a.875.875 0 0 1 .834-1.139h5.507c1.151 0 2.084.62 2.084 1.582v1.029c.865-.515 1.333-1.259 1.333-2.111 0-1.589-1.693-2.833-4.603-2.833z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9.808 7.667 2.242 6.96a.525.525 0 0 0 .641.355c1.603-.417 2.31-1.276 2.31-2.315V3.833c0 1.861-1.605 3.743-5.193 3.834"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.667 6.378a7.3 7.3 0 0 1-2.024.289.874.874 0 0 0-.832 1.144l.577 1.797.983 3.059H8.558a.88.88 0 0 1-.83-.602c-.11-.335-2.488-7.731-2.488-7.731h5.342c.533 0 1.084.218 1.084.582z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabases16Filled);

export { ForwardRef as default };
