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
var SvgDatabases32Regular = function SvgDatabases32Regular(_a, ref) {
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
    d: "M30 7.667C30 4.537 26.007 2 20.083 2H3.75A1.75 1.75 0 0 0 2 3.75c0 .142.013.281.054.411.055.171 3.243 10.139 4.899 15.302a1.75 1.75 0 0 0 1.663 1.204h3.627l1.107 3.452a1.75 1.75 0 0 0 1.667 1.214h3.625l1.104 3.44a1.75 1.75 0 0 0 1.67 1.226h.416c4.51 0 8.167-2.089 8.167-4.667zM4.102 4h15.981C24.973 4 28 5.903 28 7.667c0 1.019-.948 2.057-2.667 2.768v-.397c0-2.109-1.866-3.371-4.168-3.371H10.151a1.75 1.75 0 0 0-1.669 2.279l3.119 9.721H8.798C7.327 14.079 4.738 5.987 4.102 4m6.391 4.667h10.672c.222 0 2.168.038 2.168 1.371v.99c-.956.193-2.043.306-3.25.306h-3.532a1.75 1.75 0 0 0-1.666 2.288l3.116 9.712h-2.802zM21.833 28h-.234l-4.706-14.667h3.19c3.488 0 6.212-.822 7.917-2.105v14.105C28 26.395 25.541 28 21.833 28"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabases32Regular);

export { ForwardRef as default };
