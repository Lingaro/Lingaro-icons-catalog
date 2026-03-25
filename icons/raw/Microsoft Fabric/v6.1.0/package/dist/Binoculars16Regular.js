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
var SvgBinoculars16Regular = function SvgBinoculars16Regular(_a, ref) {
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
    d: "m1.203 9.872.008-.038L2.86 3.56a2.11 2.11 0 0 1 4.139.493H7v1.915h1.984V4.053h.002a2.11 2.11 0 0 1 4.138-.492l1.649 6.273.008.038A3.008 3.008 0 1 1 8.985 11V7.969H7V11a3.008 3.008 0 1 1-5.797-1.128m2.504-5.6-.039.142L2.646 8.31a3 3 0 0 1 1.346-.318c.772 0 1.476.29 2.008.768V4.133a1.11 1.11 0 0 0-1.11-1.108c-.549 0-.945.388-1.097.92l-.019.07-.022.084zM6 11a2.008 2.008 0 1 0-4.016 0A2.008 2.008 0 0 0 6 11m6.233-6.9-.023-.084-.018-.071c-.153-.532-.549-.92-1.098-.92a1.11 1.11 0 0 0-1.11 1.108V8.76a3 3 0 0 1 2.008-.768c.484 0 .941.114 1.346.318l-1.022-3.896-.038-.142zm-.24 4.892a2.008 2.008 0 1 0 0 4.016 2.008 2.008 0 0 0 0-4.016"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBinoculars16Regular);

export { ForwardRef as default };
