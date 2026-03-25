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
var SvgTrophyDataBarVertical20Filled = function SvgTrophyDataBarVertical20Filled(_a, ref) {
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
    d: "M5.505 3.998a2 2 0 0 1 2-1.998h5a2 2 0 0 1 2 1.998h.995a1.5 1.5 0 0 1 1.5 1.5v1.505a2.996 2.996 0 0 1-2.601 2.97 4.5 4.5 0 0 1-.362 1.025h-.033a2 2 0 0 0-2 2v.033q-.122.06-.248.114a2 2 0 0 0-2.251.53v-.204A4.5 4.5 0 0 1 5.61 9.97 3.006 3.006 0 0 1 3 6.996V5.498a1.5 1.5 0 0 1 1.5-1.5zm9 4.937A1.996 1.996 0 0 0 16 7.003V5.498a.5.5 0 0 0-.5-.5h-.995zm-9-3.937H4.5a.5.5 0 0 0-.5.5v1.498c0 .93.64 1.713 1.505 1.936z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.004 14.998v2.968H6.008a.5.5 0 0 1-.5-.5v-.5a2 2 0 0 1 2-2h1.496zm7.293-4.708a1 1 0 0 0-.293.708v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1.707-.707Zm-6 4a1 1 0 0 0-.293.708v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1.707-.707Zm3-2a1 1 0 0 0-.293.708v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1.707-.707Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTrophyDataBarVertical20Filled);

export { ForwardRef as default };
