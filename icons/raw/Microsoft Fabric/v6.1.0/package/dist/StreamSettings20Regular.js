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
var SvgStreamSettings20Regular = function SvgStreamSettings20Regular(_a, ref) {
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
    d: "M7 9a6 6 0 0 1 6-6h.5a.5.5 0 0 0 0-1H13a7 7 0 0 0-7 7v1a1 1 0 0 1-1 1H2.5a.5.5 0 0 0 0 1H5a2 2 0 0 0 2-2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 6A3.5 3.5 0 0 0 10 9.5v1q-.001.518-.112 1.002a5.5 5.5 0 0 0-.704 1.583A4.5 4.5 0 0 1 5.5 15h-3a.5.5 0 0 1 0-1h3A3.5 3.5 0 0 0 9 10.5v-1A4.5 4.5 0 0 1 13.5 5h4a.5.5 0 0 1 0 1zM9.225 16.06A5.97 5.97 0 0 1 6 17h-.5a.5.5 0 0 0 0 1H6c1.317 0 2.55-.364 3.602-.996q-.231-.45-.377-.943Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.045 9.577a5.5 5.5 0 0 1 1.595-.51A1 1 0 0 1 14 9h3.5a.5.5 0 0 0 0-1H14a2 2 0 0 0-1.955 1.577m.02 1.865a2 2 0 0 1-1.43 2.478l-.462.118a4.7 4.7 0 0 0 .01 1.016l.35.083a2 2 0 0 1 1.456 2.519l-.127.422q.387.307.835.518l.325-.344a2 2 0 0 1 2.91.002l.337.358q.44-.203.822-.498l-.156-.556a2 2 0 0 1 1.43-2.479l.46-.117a4.7 4.7 0 0 0-.01-1.017l-.348-.082a2 2 0 0 1-1.456-2.52l.126-.421a4.3 4.3 0 0 0-.835-.519l-.325.344a2 2 0 0 1-2.91-.001l-.337-.358a4.3 4.3 0 0 0-.821.497zm2.434 4.058a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgStreamSettings20Regular);

export { ForwardRef as default };
