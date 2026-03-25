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
var SvgVehicleShip12Filled = function SvgVehicleShip12Filled(_a, ref) {
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
    d: "M4.5 1a.5.5 0 0 0-.5.5V3H2.5a.5.5 0 0 0-.5.5v2.84a.5.5 0 0 0 .021.144l-.7.268a.5.5 0 0 0-.283.657l1.372 3.335a.5.5 0 0 0 .463.31h6.174a.5.5 0 0 0 .458-.3l1.453-3.336a.5.5 0 0 0-.28-.666L10 6.492V3.5a.5.5 0 0 0-.5-.5H8V1.5a.5.5 0 0 0-.5-.5zM9 6.11l-2.465-.94a1.5 1.5 0 0 0-1.07 0L3 6.11V4h6zM5 2.688V2h2v.688z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgVehicleShip12Filled);

export { ForwardRef as default };
