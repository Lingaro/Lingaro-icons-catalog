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
var SvgStackKey20Regular = function SvgStackKey20Regular(_a, ref) {
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
    d: "M16 9a3 3 0 1 1-1 5.83v.67a.5.5 0 0 1-.5.5H14v.5a.5.5 0 0 1-.5.5H13v.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.086a1 1 0 0 1 .293-.707l2.836-2.836A3 3 0 0 1 16 9m.75 1.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5M9.045 16a2 2 0 0 0-.045.414V17H8a2 2 0 0 1-1.732-1zm.541-1H6a2 2 0 0 1-1.732-1h6.318z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 3a2 2 0 0 1 2 2v3.536a4 4 0 0 0-1 .82V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8q0 .28.037.549l-.451.451H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm3 2.268A2 2 0 0 1 16 7v1q-.519.002-1 .126z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgStackKey20Regular);

export { ForwardRef as default };
