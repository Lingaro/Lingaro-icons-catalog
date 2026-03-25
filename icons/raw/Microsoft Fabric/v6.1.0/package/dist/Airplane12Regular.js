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
var SvgAirplane12Regular = function SvgAirplane12Regular(_a, ref) {
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
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#i79df9d-a)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 1.25a.25.25 0 0 0-.236.333l.015.042.602 3.717-2.323.21-1.455-2.01c-.02-.027-.037-.035-.05-.038a.1.1 0 0 0-.062.002.1.1 0 0 0-.052.035c-.008.01-.017.026-.017.06V5.7l-.79.071-.077-.016a.25.25 0 1 0 .036.477l.11-.044.72.068v2.143c0 .034.01.05.018.06a.1.1 0 0 0 .052.035.1.1 0 0 0 .063.002c.012-.003.029-.011.049-.039l1.482-2.046 2.301.215-.607 3.75-.015.041a.25.25 0 1 0 .472.165l.01-.027 1.818-3.773.933.087.08.037a1 1 0 1 0 .048-1.833l-.07.028-1.004.09-1.805-3.747-.01-.026A.25.25 0 0 0 6 1.25m-1.25.25a1.25 1.25 0 0 1 2.42-.442l1.48 3.075.172-.015a2 2 0 1 1-.085 3.731l-.075-.007-1.493 3.1a1.25 1.25 0 0 1-2.365-.809l.423-2.611-.668-.062-1.147 1.584c-.626.864-1.991.421-1.991-.645V7.246a1.25 1.25 0 0 1 0-2.495V3.6c0-1.066 1.365-1.509 1.99-.645l1.123 1.55.687-.063-.417-2.576A1.3 1.3 0 0 1 4.75 1.5"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "i79df9d-a"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0h12v12H0z"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgAirplane12Regular);

export { ForwardRef as default };
