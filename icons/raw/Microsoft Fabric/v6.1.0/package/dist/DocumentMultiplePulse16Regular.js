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
var SvgDocumentMultiplePulse16Regular = function SvgDocumentMultiplePulse16Regular(_a, ref) {
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
    d: "M3.998 3a2 2 0 0 1 2-2h3.586a1.5 1.5 0 0 1 1.06.44l1.915 1.914a1.5 1.5 0 0 1 .439 1.06V5.5H13V11a2 2 0 0 1-2 2H5.997a2 2 0 0 1-2-2V9.508l.617 1.544a1.5 1.5 0 0 0 1.181.928q.099.02.202.02H11a1 1 0 0 0 1-1V6.061h-.001V5h-1.5a1.5 1.5 0 0 1-1.5-1.5V2h-3a1 1 0 0 0-1 1v1.37a1.5 1.5 0 0 0-1-.371V3Zm6.5 1h1.293L9.998 2.207V3.5a.5.5 0 0 0 .5.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 5a1 1 0 0 1 1 1v5.21A3.79 3.79 0 0 1 11.21 15H7a1 1 0 0 1-1-1h5a3 3 0 0 0 3-3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.96 6.717 2.957 8.72a.5.5 0 0 1-.446.276H.499a.5.5 0 0 1 0-1h1.704l1.36-2.721a.5.5 0 0 1 .91.038l1.585 3.963 1.5-3.002a.5.5 0 0 1 .894 0l.86 1.723h1.189a.5.5 0 0 1 0 .999H9.004a.5.5 0 0 1-.447-.276l-.552-1.105-1.551 3.103a.5.5 0 0 1-.91-.037z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDocumentMultiplePulse16Regular);

export { ForwardRef as default };
