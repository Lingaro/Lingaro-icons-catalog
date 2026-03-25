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
var SvgShapesSettings20Filled = function SvgShapesSettings20Filled(_a, ref) {
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
    d: "M13 3a5 5 0 0 0-4.274 2.405 2.17 2.17 0 0 1 1.153.96l1.928 3.338A5.5 5.5 0 0 1 14.5 9c1.15 0 2.22.353 3.102.958A5 5 0 0 0 13 3M9.013 6.864l1.968 3.409A5.49 5.49 0 0 0 9 14.5c0 .895.214 1.74.593 2.486H3.17a1.17 1.17 0 0 1-1.014-1.755l4.83-8.367a1.17 1.17 0 0 1 2.027 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.065 11.442a2 2 0 0 1-1.43 2.478l-.461.118a4.7 4.7 0 0 0 .01 1.016l.35.083a2 2 0 0 1 1.455 2.519l-.126.423q.387.306.835.517l.325-.344a2 2 0 0 1 2.909.002l.337.358q.44-.203.822-.498l-.156-.556a2 2 0 0 1 1.43-2.478l.461-.118a4.7 4.7 0 0 0-.01-1.017l-.349-.082a2 2 0 0 1-1.456-2.52l.126-.421a4.3 4.3 0 0 0-.835-.519l-.324.344a2 2 0 0 1-2.91-.001l-.337-.358a4.3 4.3 0 0 0-.822.497zM14.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgShapesSettings20Filled);

export { ForwardRef as default };
