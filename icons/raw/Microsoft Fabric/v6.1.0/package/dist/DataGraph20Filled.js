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
var SvgDataGraph20Filled = function SvgDataGraph20Filled(_a, ref) {
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
    d: "M3 2.5a.5.5 0 0 0-1 0v15a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 0-1H3v-3.94a.8.8 0 0 0 .243-.062l3.654-1.63 2.896 2.227c.11.084.24.137.379.151l4.75.5a.75.75 0 0 0 .376-.057l2.53-1.094a.75.75 0 1 0-.594-1.377l-2.35 1.016-4.345-.457-3.082-2.371a.75.75 0 0 0-.762-.09L3 11.464V9.24a.8.8 0 0 0 .202-.065l3.77-1.827 6.656 3.804a.75.75 0 0 0 .937-.158l3.5-4a.75.75 0 1 0-1.13-.987L13.84 9.545 7.372 5.849a.75.75 0 0 0-.699-.023L3 7.606z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataGraph20Filled);

export { ForwardRef as default };
