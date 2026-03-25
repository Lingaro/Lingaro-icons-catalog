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
var SvgVehicleShip12Regular = function SvgVehicleShip12Regular(_a, ref) {
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
    d: "M4 1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 .5.5v2.993l.678.259a.5.5 0 0 1 .28.666l-1.453 3.336a.5.5 0 0 1-.458.3H2.873a.5.5 0 0 1-.463-.31L1.038 7.41a.5.5 0 0 1 .284-.657l.7-.268A.5.5 0 0 1 2 6.34V3.5a.5.5 0 0 1 .5-.5H4zM3 6.11l2.465-.94a1.5 1.5 0 0 1 1.07 0L9 6.11V4H3zM5 2v.688h2V2zm.822 4.103-3.664 1.4 1.05 2.55h5.511L9.832 7.5 6.178 6.103a.5.5 0 0 0-.356 0"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgVehicleShip12Regular);

export { ForwardRef as default };
