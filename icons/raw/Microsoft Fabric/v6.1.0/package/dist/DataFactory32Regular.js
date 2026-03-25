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
var SvgDataFactory32Regular = function SvgDataFactory32Regular(_a, ref) {
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
    d: "M27.662 9.588a2.33 2.33 0 0 1 2.33 2.33v.028l.008-.034v8.169a2.33 2.33 0 0 1-2.33 2.331h-.966A8.17 8.17 0 0 0 18.9 28.18l-.308.994A1.17 1.17 0 0 1 17.48 30h-7.376a.956.956 0 0 1-.945-1.092 17.1 17.1 0 0 1 3.598-8.24H3.169A1.17 1.17 0 0 1 2 19.5v-7a1.17 1.17 0 0 1 1.169-1.17h9.5a17.4 17.4 0 0 1-3.51-8.224A.97.97 0 0 1 10.118 2h7.355c.51 0 .959.336 1.113.826l.308.994a8.17 8.17 0 0 0 7.803 5.768zM14.5 13.331H4v5.338h19.332v-.905a17.4 17.4 0 0 1-8.833-4.433Zm13.494-1.412v4.12l-.128-.002h-1.448A15.436 15.436 0 0 1 11.357 4h5.499l.126.409v.001a10.17 10.17 0 0 0 9.715 7.178h.965a.33.33 0 0 1 .33.33Z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataFactory32Regular);

export { ForwardRef as default };
