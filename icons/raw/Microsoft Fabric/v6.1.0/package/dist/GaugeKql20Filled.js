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
var SvgGaugeKql20Filled = function SvgGaugeKql20Filled(_a, ref) {
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
    d: "M10 18q.523 0 1.029-.066.105-.192.27-.359l.4-.4c-.2-.1-.3-.2-.4-.3-.6-.6-.6-1.5 0-2.1l.7-.7c.05-.05.126-.1.2-.15.076-.05.15-.1.2-.15l-.1-.1c-.2-.2-.354-.44-.4-.8-.045-.357 0-.6.1-.9s.3-.5.6-.7.5-.3.8-.3h1.506a5 5 0 0 0-.246-2.793.5.5 0 0 1 .932-.364 6 6 0 0 1 .33 3.157h2.02A8 8 0 1 0 10 18m1.819-12.66a5.002 5.002 0 0 0-5.355 8.196.5.5 0 0 1-.707.707 6 6 0 0 1 6.425-9.834.5.5 0 0 1-.364.932Zm2.266.48a.5.5 0 0 1 .111.625l-.11.196-.686 1.206-.23.402-.298.518-.422.727c-.2.345-.395.675-.567.963a30 30 0 0 1-.492.793l-.074.108a1.5 1.5 0 1 1-2.371-1.83c.072-.085.203-.205.343-.329.15-.132.343-.296.56-.479.436-.364.982-.81 1.514-1.24.533-.432 1.055-.85 1.443-1.16l.275-.219.369-.293a.5.5 0 0 1 .635.011Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.484 12.004h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.853.354l-5-5a.5.5 0 0 1 .353-.854m.056 2.653a.5.5 0 0 1 0 .707l-.706.707a.5.5 0 1 1-.708-.707l.708-.707a.5.5 0 0 1 .707 0Zm2.83 2.829a.5.5 0 0 1 0 .707l-.708.707a.5.5 0 1 1-.707-.707l.707-.707a.5.5 0 0 1 .707 0Zm-1.415-1.414a.5.5 0 0 1 0 .707l-2.121 2.12a.5.5 0 1 1-.708-.706l2.122-2.122a.5.5 0 0 1 .707 0Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgGaugeKql20Filled);

export { ForwardRef as default };
