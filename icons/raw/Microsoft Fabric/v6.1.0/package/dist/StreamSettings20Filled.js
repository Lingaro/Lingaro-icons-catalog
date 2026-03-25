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
var SvgStreamSettings20Filled = function SvgStreamSettings20Filled(_a, ref) {
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
    d: "M7.5 9.25a5.75 5.75 0 0 1 5.75-5.75h.5a.75.75 0 0 0 0-1.5h-.5A7.25 7.25 0 0 0 6 9.25v1a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 0 0 1.5h2.5a2.25 2.25 0 0 0 2.25-2.25z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.75 6.25A3.25 3.25 0 0 0 10.5 9.5v1q0 .116-.005.23a5.48 5.48 0 0 0-1.467 3.207A4.73 4.73 0 0 1 5.75 15.25h-3a.75.75 0 0 1 0-1.5h3A3.25 3.25 0 0 0 9 10.5v-1a4.75 4.75 0 0 1 4.75-4.75h3.5a.75.75 0 0 1 0 1.5zm-4.613 9.474a5.7 5.7 0 0 1-2.887.776h-.5a.75.75 0 0 0 0 1.5h.5c1.239 0 2.405-.31 3.425-.858a5.5 5.5 0 0 1-.538-1.418"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.005 9.597a5.5 5.5 0 0 1 2.1-.583A1 1 0 0 1 14.25 9h3a.75.75 0 0 0 0-1.5h-3a2.25 2.25 0 0 0-2.245 2.097m.06 1.845a2 2 0 0 1-1.43 2.478l-.462.118a4.7 4.7 0 0 0 .01 1.016l.35.083a2 2 0 0 1 1.456 2.519l-.127.422q.387.307.835.518l.325-.344a2 2 0 0 1 2.91.002l.337.358q.44-.203.822-.498l-.156-.556a2 2 0 0 1 1.43-2.479l.46-.117a4.7 4.7 0 0 0-.01-1.017l-.348-.082a2 2 0 0 1-1.456-2.52l.126-.421a4.3 4.3 0 0 0-.835-.519l-.325.344a2 2 0 0 1-2.91-.001l-.337-.358a4.3 4.3 0 0 0-.821.497zm2.434 4.058a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgStreamSettings20Filled);

export { ForwardRef as default };
