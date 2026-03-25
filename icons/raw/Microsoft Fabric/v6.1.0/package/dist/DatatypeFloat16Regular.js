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
var SvgDatatypeFloat16Regular = function SvgDatatypeFloat16Regular(_a, ref) {
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
    d: "M12.146 4.147a.5.5 0 0 0-.146.354v6a.5.5 0 0 0 1 0v-2.5h1.5a.5.5 0 0 0 0-1H13v-2h2.5a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.354.146m-9.41-.087A.5.5 0 0 1 3 4.501v6a.5.5 0 0 1-1 0V5.435l-.723.482a.5.5 0 1 1-.554-.832l1.5-1a.5.5 0 0 1 .513-.025M5 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m3.25-6.499A2.25 2.25 0 0 0 6 6.251a.5.5 0 0 0 1 0 1.25 1.25 0 1 1 2.5.031l.002.03a1.44 1.44 0 0 1-.512.899l-1.584.915A2.59 2.59 0 0 0 6 10.518a.5.5 0 0 0 .5.483H10a.5.5 0 1 0 0-1H7.057a1.6 1.6 0 0 1 .839-1.002l1.627-.941a1 1 0 0 0 .057-.039 2.44 2.44 0 0 0 .92-1.627.5.5 0 0 0 .003-.092l-.004-.066a2.25 2.25 0 0 0-2.25-2.233Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatatypeFloat16Regular);

export { ForwardRef as default };
