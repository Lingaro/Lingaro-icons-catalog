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
var SvgDatabaseCrown20Regular = function SvgDatabaseCrown20Regular(_a, ref) {
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
    d: "M4 5.002c0-1.007.875-1.755 1.9-2.223a10.2 10.2 0 0 1 4.1-.777 10.2 10.2 0 0 1 4.1.777c1.025.468 1.9 1.216 1.9 2.223v5.117a1.52 1.52 0 0 0-1 0V6.701q-.421.31-.9.525a10.2 10.2 0 0 1-4.1.775 10.2 10.2 0 0 1-4.1-.777 5 5 0 0 1-.9-.523v8.3c0 .374.356.875 1.318 1.313a9.2 9.2 0 0 0 3.682.687q.502.01 1-.034v1.004q-.498.039-1 .03a10.2 10.2 0 0 1-4.1-.777C4.875 16.757 4 16.009 4 15.002zm1 0c0 .374.356.875 1.318 1.313A9.2 9.2 0 0 0 10 7.002a9.2 9.2 0 0 0 3.682-.687C14.644 5.877 15 5.375 15 5.002c0-.374-.356-.875-1.318-1.313A9.2 9.2 0 0 0 10 3.002a9.2 9.2 0 0 0-3.682.687C5.356 4.127 5 4.628 5 5.002"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.146 18.855a.5.5 0 0 0 .354.147h6a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.923-.257l-1 1.66-1.114-2.6a.522.522 0 0 0-.92 0l-1.114 2.6-1-1.66a.5.5 0 0 0-.929.257v6a.5.5 0 0 0 .146.353M18 14.307v3.695h-5v-3.695l.571.953a.48.48 0 0 0 .463.242.5.5 0 0 0 .426-.3l1.04-2.43 1.04 2.427a.5.5 0 0 0 .889.06z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabaseCrown20Regular);

export { ForwardRef as default };
