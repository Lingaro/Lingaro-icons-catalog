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
var SvgDiagramBranchSync32Regular = function SvgDiagramBranchSync32Regular(_a, ref) {
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
    d: "M22.5 30a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15m1.75-7.5a.75.75 0 0 1 0-1.5h.849a3 3 0 0 0-4.4-.899c-.23.172-.534.231-.79.104-.493-.247-.636-.89-.204-1.232a4.5 4.5 0 0 1 6.795 1.463V19.25a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-.75.75zm.772 3.727a4.5 4.5 0 0 1-6.522-1.664v1.187a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-.849a3 3 0 0 0 4.22 1.024c.3-.192.704-.2.955.052.335.335.338.886-.054 1.151"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 3A2.5 2.5 0 0 0 8 5.5v4a2.5 2.5 0 0 0 2.5 2.5h1.734l-4.8 8H5.5A2.5 2.5 0 0 0 3 22.5v4A2.5 2.5 0 0 0 5.5 29h5a2.5 2.5 0 0 0 2.5-2.5v-4a2.5 2.5 0 0 0-2.5-2.5h-.734l4.8-8h2.868l1.374 2.29a9 9 0 0 1 1.958-.623l-1-1.667H21.5A2.5 2.5 0 0 0 24 9.5v-4A2.5 2.5 0 0 0 21.5 3zM10 5.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5zm-5 17a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDiagramBranchSync32Regular);

export { ForwardRef as default };
