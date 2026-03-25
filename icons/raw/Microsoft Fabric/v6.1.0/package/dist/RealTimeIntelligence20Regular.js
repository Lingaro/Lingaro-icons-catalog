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
var SvgRealTimeIntelligence20Regular = function SvgRealTimeIntelligence20Regular(_a, ref) {
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
    d: "m10.52 3.004-.71 4.653a2.33 2.33 0 0 1-2.238 1.671H4.44zM2.472 9.933a1.834 1.834 0 0 0 1.362 3.06l5.226.002-.556 3.738a1 1 0 0 0 1.7.944l7.441-8.446c.22-.238.354-.561.356-.908 0 0-.001-.059-.003-.088A1.33 1.33 0 0 0 16.667 7h-5.745l.57-3.737a1 1 0 0 0-1.7-.944zm7.6 3.062-.603 4.002 3.013-3.421a1.33 1.33 0 0 0-1.102-.583zm1.308-1.002H3.833a.835.835 0 0 1-.052-1.665h3.79a3.33 3.33 0 0 0 3.18-2.33L16.669 8a.33.33 0 0 1 .331.331v.046a.34.34 0 0 1-.09.176l-3.755 4.259a2.33 2.33 0 0 0-1.775-.819",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgRealTimeIntelligence20Regular);

export { ForwardRef as default };
