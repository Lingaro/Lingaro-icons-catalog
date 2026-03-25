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
var SvgBookOpenDataCloud20Regular = function SvgBookOpenDataCloud20Regular(_a, ref) {
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
    fillRule: "evenodd",
    d: "M9.5 17.5c0-.363-.144-.737-.454-1.046A1.48 1.48 0 0 0 8 16H4c-1.076 0-2-.924-2-2V5c0-1.076.924-2 2-2h4a2.5 2.5 0 0 1 2 1.004A2.5 2.5 0 0 1 12 3h4c1.076 0 2 .924 2 2v9c0 1.076-.924 2-2 2h-4c-.363 0-.737.144-1.046.454-.31.309-.454.683-.454 1.046a.5.5 0 0 1-1 0M3 5c0-.524.476-1 1-1h4c.824 0 1.5.676 1.5 1.5v10.023A2.44 2.44 0 0 0 8 15H4c-.524 0-1-.476-1-1zm7.5 10.523A2.44 2.44 0 0 1 12 15h4c.524 0 1-.476 1-1V5c0-.524-.476-1-1-1h-4c-.824 0-1.5.676-1.5 1.5z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBookOpenDataCloud20Regular);

export { ForwardRef as default };
