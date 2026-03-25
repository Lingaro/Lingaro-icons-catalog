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
var SvgArrowSyncSettings16Regular = function SvgArrowSyncSettings16Regular(_a, ref) {
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
    d: "M11.55 1.558a.5.5 0 0 0-.966.26l.238.887a6 6 0 0 0-8.425 7.443.5.5 0 1 0 .934-.358 5 5 0 0 1 6.983-6.222l-.877.235a.5.5 0 1 0 .26.966l2.048-.55a.5.5 0 0 0 .354-.612l-.55-2.049Zm2.053 4.295a.5.5 0 0 0-.934.357 5 5 0 0 1-6.983 6.222l.876-.235a.5.5 0 1 0-.258-.966l-2.05.55a.5.5 0 0 0-.353.612l.549 2.049a.5.5 0 1 0 .966-.26l-.238-.887a6 6 0 0 0 8.425-7.442"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M5.691 5.795a.46.46 0 0 0-.526.152q-.21.292-.36.623a.46.46 0 0 0 .13.532l.64.555a.455.455 0 0 1 0 .686l-.64.555a.46.46 0 0 0-.13.532q.15.331.36.623a.46.46 0 0 0 .526.152l.8-.276a.455.455 0 0 1 .594.343l.16.83c.04.2.194.36.396.38a3.6 3.6 0 0 0 .719 0 .46.46 0 0 0 .395-.38l.16-.83a.455.455 0 0 1 .595-.343l.8.276a.46.46 0 0 0 .526-.152 3.5 3.5 0 0 0 .36-.623.46.46 0 0 0-.13-.532l-.64-.555a.455.455 0 0 1 0-.686l.64-.555a.46.46 0 0 0 .13-.532 3.6 3.6 0 0 0-.36-.623.46.46 0 0 0-.526-.152l-.8.276a.455.455 0 0 1-.594-.343l-.16-.83a.46.46 0 0 0-.396-.38 3.5 3.5 0 0 0-.719 0 .46.46 0 0 0-.395.38l-.161.83a.455.455 0 0 1-.595.343zM8.001 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgArrowSyncSettings16Regular);

export { ForwardRef as default };
