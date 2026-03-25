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
var SvgDocumentMultipleDax16Regular = function SvgDocumentMultipleDax16Regular(_a, ref) {
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
    d: "M14 5.502v4.89h-.005A1.5 1.5 0 0 0 13 9.089V6.063h-.002V5.002h-1.5a1.5 1.5 0 0 1-1.5-1.5v-1.5h-3a1 1 0 0 0-1 1V8.84a1.5 1.5 0 0 0-.912.915l-.088.25V3.001a2 2 0 0 1 2-2h3.586a1.5 1.5 0 0 1 1.06.44l1.915 1.914a1.5 1.5 0 0 1 .439 1.06v1.086H14Zm-2.502-1.5h1.293l-1.793-1.793v1.293a.5.5 0 0 0 .5.5m3.502 1a1 1 0 0 1 1 1v5.21a3.79 3.79 0 0 1-2 3.342 1.5 1.5 0 0 0-.3-.952l-.064-.085A3 3 0 0 0 15 11.002z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 9.752a.5.5 0 0 1 .472.334l1.5 4.25a.5.5 0 1 1-.943.332l-.236-.666H5.707l-.235.666a.5.5 0 1 1-.943-.332l1.5-4.25a.5.5 0 0 1 .471-.334m0 2-.44 1.25h.881zm-6-1.75a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h1a2.5 2.5 0 1 0 0-5zm.5 4v-3h.5a1.5 1.5 0 1 1 0 3zm11.9-3.2-1.276 1.7 1.276 1.7a.5.5 0 1 1-.8.6L11 13.336l-1.1 1.466a.5.5 0 0 1-.8-.6l1.274-1.7-1.274-1.7a.5.5 0 0 1 .8-.6l1.1 1.467 1.1-1.467a.5.5 0 1 1 .8.6"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDocumentMultipleDax16Regular);

export { ForwardRef as default };
