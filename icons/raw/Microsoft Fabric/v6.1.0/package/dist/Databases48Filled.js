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
var SvgDatabases48Filled = function SvgDatabases48Filled(_a, ref) {
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
    d: "M13.145 13.157a2.5 2.5 0 0 1 2.5-2.5h15.734c3.288 0 5.954 1.855 5.954 4.501v2.999c2.729-1.542 4.167-3.932 4.167-6.242C41.5 8.024 37.158 4 29.892 4H6.49A2.5 2.5 0 0 0 4 6.499c0 .203.018.402.077.588.078.244 4.633 14.484 6.999 21.858a2.5 2.5 0 0 0 2.375 1.719h5.184l-5.377-16.759a2.5 2.5 0 0 1-.114-.748z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25.715 22.33a2.5 2.5 0 0 1 2.5-2.5h2.037c1.718 0 3.243-.232 4.581-.627v-4.045c0-1.103-1.55-2.001-3.454-2.001H15.646l7.203 22.453a2.5 2.5 0 0 0 2.375 1.719h5.178l-4.567-14.231q-.119-.364-.12-.768"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M28.215 22.33h2.036c8.93 0 13.748-5.366 13.748-10.415v25.414c0 3.077-3.355 5.955-7.097 6.648-.714.132-1.844-.316-2.15-1.268a23816 23816 0 0 0-6.537-20.379"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabases48Filled);

export { ForwardRef as default };
