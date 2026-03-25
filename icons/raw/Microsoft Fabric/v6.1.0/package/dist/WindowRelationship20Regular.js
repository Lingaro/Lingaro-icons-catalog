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
var SvgWindowRelationship20Regular = function SvgWindowRelationship20Regular(_a, ref) {
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
    d: "M12.5 2A1.5 1.5 0 0 0 11 3.5v5a1.5 1.5 0 0 0 1.5 1.5h2v4a.5.5 0 0 1-.5.5h-4v-3A1.5 1.5 0 0 0 8.5 10h-5A1.5 1.5 0 0 0 2 11.5v5A1.5 1.5 0 0 0 3.5 18h5a1.5 1.5 0 0 0 1.5-1.5v-1h4a1.5 1.5 0 0 0 1.5-1.5v-4h2A1.5 1.5 0 0 0 19 8.5v-5A1.5 1.5 0 0 0 17.5 2zM18 8.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5V5h6zm-6-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V4h-6zm-3 13a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5V13h6zm-6-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v.5H3z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgWindowRelationship20Regular);

export { ForwardRef as default };
