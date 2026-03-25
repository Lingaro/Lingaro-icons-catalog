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
var SvgBuildingRetailMoreLink20Regular = function SvgBuildingRetailMoreLink20Regular(_a, ref) {
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
    d: "M15.998 10.5V8h-12v7a1 1 0 0 0 1 1h4.628c.281.404.646.745 1.069 1H4.998a2 2 0 0 1-2-2V8h-.786C1.134 8 .595 6.697 1.357 5.934l2.641-2.641A1 1 0 0 1 4.705 3h10.586a1 1 0 0 1 .707.293l2.642 2.641c.762.763.222 2.066-.856 2.066h-.786v2.535a3.5 3.5 0 0 0-.5-.035zm1.935-3.858L15.29 4H4.705L2.064 6.642A.21.21 0 0 0 2.212 7h15.572a.21.21 0 0 0 .149-.358"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.998 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2.495-.87a3.5 3.5 0 0 0-1.234 1.543 1 1 0 0 1 1.235-1.542Zm2.005.37a2.5 2.5 0 1 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 1 1 0-3h.5a.5.5 0 0 0 0-1zm3.5 0a.5.5 0 1 0 0 1h.5a1.5 1.5 0 0 1 0 3h-.5a.5.5 0 1 0 0 1h.5a2.5 2.5 0 0 0 0-5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.998 14a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBuildingRetailMoreLink20Regular);

export { ForwardRef as default };
