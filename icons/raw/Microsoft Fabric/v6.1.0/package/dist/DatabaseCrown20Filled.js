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
var SvgDatabaseCrown20Filled = function SvgDatabaseCrown20Filled(_a, ref) {
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
    d: "M10 8c3.314 0 6-1.343 6-3 0-1.656-2.686-3-6-3S4 3.344 4 5c0 1.657 2.686 3 6 3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.69 8.016A5.5 5.5 0 0 0 16 7.121v2.996a1.52 1.52 0 0 0-1.879.796l-.345.8a1.5 1.5 0 0 0-2.776.788v5.458q-.489.04-1 .041c-3.314 0-6-1.343-6-3V7.12c.383.363.84.662 1.31.896 1.252.626 2.912.985 4.69.985s3.438-.359 4.69-.985"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.146 18.854A.5.5 0 0 0 12.5 19h6a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.923-.257l-1 1.662-1.114-2.6a.522.522 0 0 0-.92 0l-1.114 2.6-1-1.662a.5.5 0 0 0-.929.258v6a.5.5 0 0 0 .146.353M18 14.306V18h-5v-3.694l.571.953a.48.48 0 0 0 .463.242.5.5 0 0 0 .426-.3l1.04-2.43 1.04 2.426a.5.5 0 0 0 .889.06z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabaseCrown20Filled);

export { ForwardRef as default };
