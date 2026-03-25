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
var SvgGaugeKql32Regular = function SvgGaugeKql32Regular(_a, ref) {
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
    d: "M16 28c.957 0 1.888-.112 2.78-.324q.072.058.145.11l-.029.03a3 3 0 0 0-.878 2.04q-.989.142-2.018.144C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14q0 1.018-.141 1.996h-2.024q.163-.975.165-1.996c0-6.627-5.373-12-12-12S4 9.373 4 16s5.373 12 12 12"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25.995 16.28a10 10 0 0 1-.198 1.716h-2.05a8 8 0 0 0-.861-6.07 1 1 0 0 1 1.72-1.022 10 10 0 0 1 1.389 5.375ZM8.068 21.916a1 1 0 0 0 1.298-1.443A7.96 7.96 0 0 1 8 16a8.008 8.008 0 0 1 9.56-7.848 1 1 0 1 0 .389-1.962A10 10 0 0 0 7.708 21.592a1 1 0 0 0 .36.324"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21.517 7.876a.82.82 0 0 0-.525.177l-1.056.842c-.638.507-1.494 1.192-2.368 1.9s-1.77 1.437-2.485 2.037c-.357.3-.673.568-.92.786a7 7 0 0 0-.563.538 2.463 2.463 0 0 0 3.745 3.2 7 7 0 0 0 .443-.64c.176-.278.393-.632.632-1.032.48-.8 1.061-1.798 1.623-2.773s1.108-1.927 1.508-2.636l.484-.853.182-.322a.82.82 0 0 0-.7-1.224M22.125 20h8.054a.806.806 0 0 1 .806.805v8.054a.806.806 0 0 1-1.375.57l-8.053-8.053A.807.807 0 0 1 22.126 20Zm-.754 6.048.707-.707a1 1 0 0 0-1.414-1.414l-.707.707a1 1 0 1 0 1.414 1.414m3.182.353a1 1 0 0 1 0 1.415l-2.829 2.828a1 1 0 1 1-1.414-1.414l2.83-2.83a1 1 0 0 1 1.414 0Zm2.474 2.475a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.415l.707-.707a1 1 0 0 0 0-1.415"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgGaugeKql32Regular);

export { ForwardRef as default };
