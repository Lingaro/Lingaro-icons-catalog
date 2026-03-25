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
var SvgDiagramBranchSync24Regular = function SvgDiagramBranchSync24Regular(_a, ref) {
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
    d: "M17.5 23a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m2.5-8.5v.55A3.5 3.5 0 0 0 17.5 14a3.5 3.5 0 0 0-2.837 1.45.5.5 0 0 0 .81.586A2.5 2.5 0 0 1 17.5 15c.817 0 1.544.392 2 1h-1a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0m-5 6v-.55A3.5 3.5 0 0 0 17.5 21a3.5 3.5 0 0 0 2.675-1.243.5.5 0 1 0-.764-.645A2.5 2.5 0 0 1 17.5 20a2.5 2.5 0 0 1-2-1h1a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.75 3A1.75 1.75 0 0 0 6 4.75v3.5C6 9.216 6.784 10 7.75 10h1.614l-3.571 5H4.75A1.75 1.75 0 0 0 3 16.75v2.55c0 .966.784 1.75 1.75 1.75h3.5A1.75 1.75 0 0 0 10 19.3v-2.55A1.75 1.75 0 0 0 8.25 15h-.614l3.571-5h1.586l1.371 1.92a6.5 6.5 0 0 1 1.396-.626L14.636 10h1.614A1.75 1.75 0 0 0 18 8.25v-3.5A1.75 1.75 0 0 0 16.25 3zM7.5 4.75a.25.25 0 0 1 .25-.25h8.5a.25.25 0 0 1 .25.25v3.5a.25.25 0 0 1-.25.25h-8.5a.25.25 0 0 1-.25-.25zm-3 12a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v2.55a.25.25 0 0 1-.25.25h-3.5a.25.25 0 0 1-.25-.25z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDiagramBranchSync24Regular);

export { ForwardRef as default };
