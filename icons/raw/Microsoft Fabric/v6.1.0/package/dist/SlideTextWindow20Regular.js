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
var SvgSlideTextWindow20Regular = function SvgSlideTextWindow20Regular(_a, ref) {
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
    d: "M4.5 15H9v1H4.5A2.5 2.5 0 0 1 2 13.5v-7A2.5 2.5 0 0 1 4.5 4h11A2.5 2.5 0 0 1 18 6.5v2.55a2.5 2.5 0 0 0-.5-.05H17V6.5A1.5 1.5 0 0 0 15.5 5h-11A1.5 1.5 0 0 0 3 6.5v7A1.5 1.5 0 0 0 4.5 15"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h3.708c.174-.398.449-.742.792-1zM9 12H5.5a.5.5 0 0 0 0 1H9zm2.5-2a1.5 1.5 0 0 0-1.5 1.5v.5h9v-.5a1.5 1.5 0 0 0-1.5-1.5zm7.5 3h-9v4.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSlideTextWindow20Regular);

export { ForwardRef as default };
