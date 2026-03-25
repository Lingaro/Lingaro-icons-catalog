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
var SvgDataFactory20Regular = function SvgDataFactory20Regular(_a, ref) {
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
    d: "M16.663 6.336c.736 0 1.332.596 1.332 1.332v.015l.004-.02v4.668c0 .736-.596 1.332-1.332 1.332h-.552a4.67 4.67 0 0 0-4.458 3.296l-.176.568a.67.67 0 0 1-.636.472H6.63a.546.546 0 0 1-.54-.624 9.8 9.8 0 0 1 2.056-4.708H2.668A.67.67 0 0 1 2 12V8c0-.367.3-.667.668-.667h5.428a9.93 9.93 0 0 1-2.006-4.7A.555.555 0 0 1 6.638 2h4.203c.292 0 .548.192.636.472l.176.568a4.67 4.67 0 0 0 4.458 3.296zm-7.67 1.996H3v3.335h11.332v-.635a9.95 9.95 0 0 1-5.34-2.7Zm8.002-.664v2.506a2 2 0 0 0-.216-.01h-.828A8.96 8.96 0 0 1 7.17 3h3.424l.104.335a5.67 5.67 0 0 0 5.414 4h.552c.183 0 .332.149.332.333Z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataFactory20Regular);

export { ForwardRef as default };
