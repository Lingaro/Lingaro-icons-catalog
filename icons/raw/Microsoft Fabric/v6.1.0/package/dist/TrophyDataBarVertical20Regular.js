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
var SvgTrophyDataBarVertical20Regular = function SvgTrophyDataBarVertical20Regular(_a, ref) {
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
    d: "M5.508 16.968H9v1H5.01a.5.5 0 0 1-.5-.5v-.5a2 2 0 0 1 2-2h2v-1.746a4.5 4.5 0 0 1-3.9-3.5A3.01 3.01 0 0 1 2 6.748V5.5A1.5 1.5 0 0 1 3.505 4h1a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2h.995A1.5 1.5 0 0 1 16 5.5v1.255a3 3 0 0 1-2.601 2.967 4.5 4.5 0 0 1-3.894 3.5v.464A1.98 1.98 0 0 0 9 15v.968H6.508a1 1 0 0 0-1 1M14.5 5h-.995v3.687A2 2 0 0 0 15 6.755V5.5a.5.5 0 0 0-.5-.5M3.422 7.973c.273.35.653.6 1.083.711L4.5 5h-1a.5.5 0 0 0-.5.5v1.248c.001.444.15.874.422 1.225M5.505 4v4.906a3.5 3.5 0 1 0 7-.156V4a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1m10.788 6.293A1 1 0 0 0 16 11v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1.707-.707"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.293 14.293A1 1 0 0 0 10 15v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1.707-.707m3-2A1 1 0 0 0 13 13v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1.707-.707"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTrophyDataBarVertical20Regular);

export { ForwardRef as default };
