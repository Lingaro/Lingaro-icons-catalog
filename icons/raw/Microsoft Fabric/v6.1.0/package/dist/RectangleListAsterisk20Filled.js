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
var SvgRectangleListAsterisk20Filled = function SvgRectangleListAsterisk20Filled(_a, ref) {
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
    d: "M5.5 2A1.5 1.5 0 0 0 4 3.5v13A1.5 1.5 0 0 0 5.5 18h4.757a5.48 5.48 0 0 1-1.235-4H7.5a.5.5 0 0 1-.09-.992L7.5 13h1.707a5.5 5.5 0 0 1 1.518-2.5H7.5a.5.5 0 0 1-.09-.992L7.5 9.5h4.706A5.5 5.5 0 0 1 14.5 9a5.5 5.5 0 0 1 1.5.207V3.5A1.5 1.5 0 0 0 14.5 2zm7.09 4.992L12.5 7h-5a.5.5 0 0 1-.09-.992L7.5 6h5a.5.5 0 0 1 .09.992"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 10.758a4.5 4.5 0 1 1 5 7.484 4.5 4.5 0 0 1-5-7.484m4.917 5.425a.5.5 0 0 0 .003-.863l-1.42-.82 1.406-.832a.5.5 0 0 0-.506-.863l-1.4.822V12a.5.5 0 0 0-1 0v1.634l-1.411-.812a.5.5 0 0 0-.5.866l1.42.82-1.415.829a.5.5 0 1 0 .506.863l1.4-.827V17a.5.5 0 0 0 1 0v-1.634l1.417.817a.49.49 0 0 0 .5 0"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgRectangleListAsterisk20Filled);

export { ForwardRef as default };
