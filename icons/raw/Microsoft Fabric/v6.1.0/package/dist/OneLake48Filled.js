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
var SvgOneLake48Filled = function SvgOneLake48Filled(_a, ref) {
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
    d: "M31.346 7.062c6.863 1.631 12.507 7.096 14.01 14.463.435 2.13.488 4.25.208 6.29-3.473-5.428-11.803-6.323-16.527-1.536-1.167 1.182-2.322 2.262-3.418 3.163a37.4 37.4 0 0 1-4.856-6.658 47 47 0 0 1-1.988-3.84c-1.761-3.856-2.298-6.734-2.167-8.878.134-2.184.96-3.607 1.89-4.525 3.424-2.968 8.688-2.753 12.035.593q.443.443.813.928M18.594 24.027a40 40 0 0 0 5.003 6.907c-.924.59-1.644.903-2.148 1.002-3.078.604-5.599.473-7.656-.113-3.136-6.659-2.708-13.648.482-18.805.457 2.984 1.79 6.597 4.319 11.01Zm-8.176 6.083a11.2 11.2 0 0 1-2.02-1.6c-4.23-4.23-4.328-10.992-.218-15.104 1.314-1.315 2.9-2.2 4.586-2.657-3.729 5.291-4.669 12.437-2.348 19.361m33.807.548a18.8 18.8 0 0 1-3.96 7.74 21.7 21.7 0 0 1-2.396 2.345l-.06.05v.001a21.55 21.55 0 0 1-9.5 4.55c-11.713 2.39-23.146-5.168-25.536-16.881a21.6 21.6 0 0 1-.053-8.419c-.162 5.957 5.003 17.095 19.202 14.307 2.456-.482 5.722-3.157 8.866-6.343 4.097-4.15 11.578-2.662 13.437 2.65",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgOneLake48Filled);

export { ForwardRef as default };
