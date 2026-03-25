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
var SvgHomeKql16Regular = function SvgHomeKql16Regular(_a, ref) {
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
    d: "M9.038 1.303a1.496 1.496 0 0 0-2.076 0l-4.5 4.317A1.5 1.5 0 0 0 2 6.702V12.5A1.5 1.5 0 0 0 3.5 14h3.595l.013-.032c.076-.182.186-.348.325-.487l.418-.417A2 2 0 0 1 7.73 13H3.5a.5.5 0 0 1-.5-.5V6.702a.5.5 0 0 1 .154-.36l4.5-4.317a.5.5 0 0 1 .692 0l4.5 4.317a.5.5 0 0 1 .154.36V7h1v-.298a1.5 1.5 0 0 0-.462-1.082z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 8h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.853.354l-5-5A.5.5 0 0 1 9.5 8m.062 2.657a.5.5 0 0 1 0 .707l-.707.708a.5.5 0 0 1-.708-.708l.708-.707a.5.5 0 0 1 .707 0m2.827 2.829a.5.5 0 0 1 0 .707l-.707.707a.5.5 0 1 1-.707-.707l.707-.707a.5.5 0 0 1 .707 0m-1.414-1.414a.5.5 0 0 1 0 .707l-2.12 2.12a.5.5 0 1 1-.709-.706l2.122-2.121a.5.5 0 0 1 .707 0"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgHomeKql16Regular);

export { ForwardRef as default };
