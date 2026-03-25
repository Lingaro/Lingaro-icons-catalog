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
var SvgDatabases28Regular = function SvgDatabases28Regular(_a, ref) {
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
    d: "M17.693 2H3.5A1.5 1.5 0 0 0 2 3.5c0 .122.011.241.046.353.065.204 2.78 8.691 4.199 13.116a1.5 1.5 0 0 0 1.425 1.032h3.109l.949 2.959a1.5 1.5 0 0 0 1.429 1.041h3.107l.946 2.949c.191.609.76 1.051 1.432 1.051h.357c3.866 0 7-1.791 7-4V6.747C25.999 4.125 22.592 2 17.693 2M3.509 3.5h14.184c4.205 0 6.807 1.685 6.807 3.247 0 .942-.895 1.894-2.5 2.519v-.285c0-1.804-1.599-2.98-3.572-2.98H8.987a1.5 1.5 0 0 0-1.43 1.953l2.743 8.548-2.625.008C6.332 12.326 3.831 4.509 3.509 3.5m9.649 17.001-.949-2.959-.178-.554L8.987 7.5h9.44c.998 0 2.072.463 2.072 1.48v.725a14 14 0 0 1-2.815.272h-3.221a1.5 1.5 0 0 0-1.428 1.961l2.747 8.563h-2.625zM19 24.5l-.36-.009-4.176-13.014h3.221c3.019 0 5.389-.754 6.815-1.917v12.441c0 1.019-2.143 2.499-5.5 2.499"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabases28Regular);

export { ForwardRef as default };
