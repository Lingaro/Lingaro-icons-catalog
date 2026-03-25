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
var SvgTableKql32Regular = function SvgTableKql32Regular(_a, ref) {
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
    d: "M25.339 27.583a1.001 1.001 0 0 1 .706 1.708l-.707.709a1 1 0 1 1-1.414-1.415l.707-.709c.188-.188.443-.293.708-.293m-2.476-2.476a1 1 0 0 1 .707 1.708l-2.829 2.829a1 1 0 0 1-1.413-1.414l2.828-2.83c.188-.187.442-.292.707-.293"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M24.5 3h-17A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h10.55l-.003-.058a2 2 0 0 1 .561-1.407l.392-.392V27h-6v-6h6v1.196a2 2 0 0 1 1.395-.55l.038.002-.566-.565a1.81 1.81 0 0 1-.392-1.966l.055-.122c.14-.277.349-.515.608-.69l.113-.069c.23-.13.485-.209.749-.23V13h6v5h2V7.5A4.5 4.5 0 0 0 24.5 3M5 24.5A2.5 2.5 0 0 0 7.5 27H11v-6H5zM5 19h6v-6H5zm8 0h6v-6h-6zM7.5 5A2.5 2.5 0 0 0 5 7.5V11h6V5zm5.5 6h6V5h-6zm8 0h6V7.5A2.5 2.5 0 0 0 24.5 5H21z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M29.201 19.005a.8.8 0 0 1 .8.8v8.054a.8.8 0 0 1-1.374.57l-8.053-8.053A.807.807 0 0 1 21.143 19h8.053zm-8.815 3.641a1 1 0 0 1 .71 1.695l-.706.707a1 1 0 0 1-1.099.23.998.998 0 0 1-.315-1.644l.707-.707a1 1 0 0 1 .703-.28Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTableKql32Regular);

export { ForwardRef as default };
