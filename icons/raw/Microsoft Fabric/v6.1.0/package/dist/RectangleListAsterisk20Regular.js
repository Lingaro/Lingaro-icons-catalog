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
var SvgRectangleListAsterisk20Regular = function SvgRectangleListAsterisk20Regular(_a, ref) {
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
    d: "M6 2h8a2 2 0 0 1 2 2v5.207a5.5 5.5 0 0 0-1-.185V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h3.6q.276.538.657 1H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.5 9.5h4.706a5.5 5.5 0 0 0-1.48 1H7.5a.5.5 0 0 1-.09-.992zM9.207 13H7.5l-.09.008A.5.5 0 0 0 7.5 14h1.522a5.5 5.5 0 0 1 .185-1M13 6.5a.5.5 0 0 1-.41.492L12.5 7h-5a.5.5 0 0 1-.09-.992L7.5 6h5a.5.5 0 0 1 .5.5m-1 4.258a4.5 4.5 0 1 1 5 7.484 4.5 4.5 0 0 1-5-7.484m4.917 5.425a.5.5 0 0 0 .003-.863l-1.42-.82 1.406-.832a.5.5 0 0 0-.506-.863l-1.4.822V12a.5.5 0 0 0-1 0v1.634l-1.411-.812a.5.5 0 0 0-.5.866l1.42.82-1.415.829a.5.5 0 1 0 .506.863l1.4-.827V17a.5.5 0 0 0 1 0v-1.634l1.417.817a.49.49 0 0 0 .5 0"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgRectangleListAsterisk20Regular);

export { ForwardRef as default };
