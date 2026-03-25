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
var SvgPulseSquarePerson24Filled = function SvgPulseSquarePerson24Filled(_a, ref) {
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
    d: "M17.766 3a2.25 2.25 0 0 1 2.25 2.25v6.836A3.5 3.5 0 0 0 17.482 11c-.66 0-1.276.183-1.803.5h-1.411a.75.75 0 0 0-.671.414l-1.003 2.004-2.381-5.947a.75.75 0 0 0-1.384-.022l-1.556 3.55H5.768a.75.75 0 0 0 0 1.5h1.995a.75.75 0 0 0 .687-.448l1.035-2.362 2.336 5.835a.75.75 0 0 0 1.367.057l.794-1.586v.005c0 .98.403 1.865 1.05 2.5h-.277a2.77 2.77 0 0 0-2.773 2.772v.103c0 .38.057.76.173 1.127H4.268a2.25 2.25 0 0 1-2.25-2.25V5.25A2.25 2.25 0 0 1 4.268 3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.982 14.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m2 5.375c0 1.556-1.285 3.125-4.5 3.125s-4.5-1.563-4.5-3.125v-.103c0-.98.794-1.772 1.773-1.772h5.455c.979 0 1.772.793 1.772 1.772z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgPulseSquarePerson24Filled);

export { ForwardRef as default };
