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
var SvgDatabaseArrowForward24Regular = function SvgDatabaseArrowForward24Regular(_a, ref) {
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
    d: "M4 6c0-.69.315-1.293.774-1.78.455-.482 1.079-.883 1.793-1.202C7.996 2.377 9.917 2 12 2s4.004.377 5.433 1.018c.714.32 1.338.72 1.793 1.202.459.487.774 1.09.774 1.78v5.498a6.5 6.5 0 0 0-1.5-.422V8.392c-.32.22-.68.417-1.067.59C16.004 9.623 14.083 10 12 10s-4.004-.377-5.433-1.018a7 7 0 0 1-1.067-.59V18c0 .207.09.46.365.75.279.296.717.596 1.315.864 1.14.51 2.74.853 4.551.884a6.5 6.5 0 0 0 1.061 1.484Q12.402 22 12 22c-2.083 0-4.004-.377-5.433-1.017-.714-.32-1.338-.72-1.793-1.203C4.315 19.293 4 18.69 4 18zm1.5 0c0 .207.09.46.365.75.279.296.717.596 1.315.864 1.195.535 2.899.886 4.82.886s3.625-.35 4.82-.886c.598-.268 1.036-.568 1.315-.864.275-.29.365-.543.365-.75s-.09-.46-.365-.75c-.279-.296-.717-.596-1.315-.864-1.195-.535-2.9-.886-4.82-.886s-3.625.35-4.82.886c-.598.268-1.036.568-1.315.864-.275.29-.365.543-.365.75"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 17.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0m6.646-2.146a.5.5 0 0 1 .708-.708l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708-.708l.647-.646H17.25A2.25 2.25 0 0 0 15 19.25v.25a.5.5 0 0 1-1 0v-.25A3.25 3.25 0 0 1 17.25 16h2.043z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabaseArrowForward24Regular);

export { ForwardRef as default };
