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
var SvgScriptKqlAdd20Regular = function SvgScriptKqlAdd20Regular(_a, ref) {
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
    d: "M10 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V5H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H6zm8.5-.5h-4.1a5.5 5.5 0 0 0-.657-1h6.82A2.5 2.5 0 0 1 19 4.5V6a1 1 0 0 1-1 1h-3v4h-1V4.375h.003A2.5 2.5 0 0 1 14.5 3M18 4.5A1.5 1.5 0 0 0 16.501 3H16.5A1.5 1.5 0 0 0 15 4.5V6h3zM4 10.793a5.5 5.5 0 0 0 1 .185V13h4.087a1.5 1.5 0 0 0 .353.56l.1.105a1.5 1.5 0 0 0-.4.281L9.086 14H2v1.688C2 16.424 2.593 17 3.375 17h5.354q.06.034.122.064l-.418.417a1.5 1.5 0 0 0-.338.519h-4.72C2.085 18 1 17.021 1 15.687V14a1 1 0 0 1 1-1h2zM10.5 12h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.853.354l-5-5A.5.5 0 0 1 10.5 12"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.562 14.657a.5.5 0 0 1 0 .707l-.707.708a.5.5 0 0 1-.708-.708l.708-.707a.5.5 0 0 1 .707 0m2.827 2.829a.5.5 0 0 1 0 .707l-.707.707a.5.5 0 1 1-.707-.707l.707-.707a.5.5 0 0 1 .707 0m-1.414-1.414a.5.5 0 0 1 0 .707l-2.12 2.12a.5.5 0 1 1-.709-.706l2.122-2.121a.5.5 0 0 1 .707 0"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgScriptKqlAdd20Regular);

export { ForwardRef as default };
