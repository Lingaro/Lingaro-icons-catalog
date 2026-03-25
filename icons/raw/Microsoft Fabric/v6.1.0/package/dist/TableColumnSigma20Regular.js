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
var SvgTableColumnSigma20Regular = function SvgTableColumnSigma20Regular(_a, ref) {
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
    fillRule: "evenodd",
    d: "M14.5 3A2.5 2.5 0 0 1 17 5.5V8h-4.502a1.5 1.5 0 0 0-.498.086V8H8v4h4v-.842L13.731 13H13v1.778l-1 1.064V13H8v3h3.851l-.444.473-.001.001a1.5 1.5 0 0 0-.32.526H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3zM12 4H8v3h4zm2.5 0H13v3h3V5.5a1.5 1.5 0 0 0-1.355-1.493zm-9 12H7V4H5.5a1.5 1.5 0 0 0-1.493 1.356L4 5.5v9a1.5 1.5 0 0 0 1.356 1.493z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 18h6a.5.5 0 0 0 0-1h-4.845l2.968-3.158a.5.5 0 0 0 0-.684L13.655 10H18.5a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.364.842l3.438 3.658-3.438 3.658A.5.5 0 0 0 12.5 18"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTableColumnSigma20Regular);

export { ForwardRef as default };
