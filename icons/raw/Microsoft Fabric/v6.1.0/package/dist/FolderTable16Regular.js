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
var SvgFolderTable16Regular = function SvgFolderTable16Regular(_a, ref) {
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
    d: "M1 4.5V6h3.535a4 4 0 0 0-.409 1H1v4.5A1.5 1.5 0 0 0 2.5 13H4q.001.519.126 1H2.5A2.5 2.5 0 0 1 0 11.5v-7A2.5 2.5 0 0 1 2.5 2h2.086a1.5 1.5 0 0 1 1.06.44L7.207 4H8c-.642 0-1.249.151-1.787.42L4.94 3.146A.5.5 0 0 0 4.586 3H2.5A1.5 1.5 0 0 0 1 4.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 8a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3zm3-2a2 2 0 0 0-2 2h2zm4 0H9v2h3zm3 2a2 2 0 0 0-2-2v2zm-3 1H9v3h3zm3 0h-2v3h2zm-3 4H9v2h3zm1 2a2 2 0 0 0 2-2h-2zM8 9H6v3h2zm0 4H6a2 2 0 0 0 2 2z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgFolderTable16Regular);

export { ForwardRef as default };
