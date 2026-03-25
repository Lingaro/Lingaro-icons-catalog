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
var SvgHomeKql20Regular = function SvgHomeKql20Regular(_a, ref) {
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
    d: "M9.057 1.869a1.5 1.5 0 0 1 1.886 0l5.5 4.442A1.5 1.5 0 0 1 17 7.478V10h-1V7.478a.5.5 0 0 0-.186-.389l-5.5-4.442a.5.5 0 0 0-.628 0l-5.5 4.442A.5.5 0 0 0 4 7.478V15.5a.5.5 0 0 0 .5.5h6.23q.06.035.121.064l-.418.417a1.5 1.5 0 0 0-.338.52H4.5A1.5 1.5 0 0 1 3 15.5V7.477a1.5 1.5 0 0 1 .557-1.167z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 11h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.853.354l-5-5A.5.5 0 0 1 12.5 11m.062 2.657a.5.5 0 0 1 0 .707l-.707.708a.5.5 0 0 1-.708-.708l.708-.707a.5.5 0 0 1 .707 0m2.827 2.829a.5.5 0 0 1 0 .707l-.707.707a.5.5 0 1 1-.707-.707l.707-.707a.5.5 0 0 1 .707 0m-1.414-1.414a.5.5 0 0 1 0 .707l-2.12 2.12a.5.5 0 0 1-.709-.706l2.122-2.121a.5.5 0 0 1 .707 0"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgHomeKql20Regular);

export { ForwardRef as default };
