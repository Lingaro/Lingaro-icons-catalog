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
var SvgDocumentPeople20Regular = function SvgDocumentPeople20Regular(_a, ref) {
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
    d: "M6 2.001a2 2 0 0 0-2 2v6.011c.357.032.695.133 1 .289V4a1 1 0 0 1 1-1h4v3.5A1.5 1.5 0 0 0 11.5 8H15v8a1 1 0 0 1-1 1h-3.025a2.7 2.7 0 0 1-.344 1H14a2 2 0 0 0 2-2V7.415a1.5 1.5 0 0 0-.44-1.06L11.647 2.44a1.5 1.5 0 0 0-1.06-.439zm8.793 5H11.5a.5.5 0 0 1-.5-.5V3.208zM5 11.526a1.75 1.75 0 0 0-1.25-.525 1.75 1.75 0 1 0 1.25.525m.714 3.975c.71 0 1.286.588 1.286 1.313a1.92 1.92 0 0 1-.397 1.188C6.161 18.579 5.327 19 4 19c-2.143 0-3-1.094-3-2.188 0-.724.576-1.312 1.286-1.312z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.313 18.001c-.403.303-.996.5-1.813.5h-.023a2.9 2.9 0 0 0 .518-1.5Q8 16.907 8 16.813c0-.483-.148-.937-.404-1.312H8.93c.592 0 1.071.504 1.071 1.125a1.68 1.68 0 0 1-.688 1.375M9 13.251a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDocumentPeople20Regular);

export { ForwardRef as default };
