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
var SvgDatatypeByte20Regular = function SvgDatatypeByte20Regular(_a, ref) {
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
    d: "M5.5 8.76c.011.385-.102.762-.324 1.077.16.114.297.26.399.428.171.296.257.635.247.977a1.62 1.62 0 0 1-.8 1.488 2.2 2.2 0 0 1-1.069.27H2.5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h1.206c.35-.01.696.07 1.007.23.238.134.434.331.564.57.154.297.23.627.223.96m-1.1-.481a.44.44 0 0 0-.177-.178A1.1 1.1 0 0 0 3.7 8H3v1.5h.725c.174.003.347-.04.5-.122a.63.63 0 0 0 .275-.62 1 1 0 0 0-.1-.48ZM3.888 10.5H3V12h.953c.197 0 .39-.047.564-.14a.63.63 0 0 0 .3-.622.86.86 0 0 0-.1-.457.48.48 0 0 0-.2-.181 1.5 1.5 0 0 0-.629-.1",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.243 7.072a.5.5 0 0 1 .686.172l1.07 1.785 1.072-1.785a.5.5 0 1 1 .858.514l-1.43 2.381v2.362a.5.5 0 0 1-1 0V10.14L6.072 7.758a.5.5 0 0 1 .172-.686Zm4.727-.071a.5.5 0 0 0 0 1h1.016v4.5a.5.5 0 1 0 1 0V8h.929a.5.5 0 1 0 0-1H10.97Zm4.03.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H16v1.5h1a.5.5 0 0 1 0 1h-1v1.5h1.5a.5.5 0 1 1 0 1h-2a.5.5 0 0 1-.5-.5z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatatypeByte20Regular);

export { ForwardRef as default };
