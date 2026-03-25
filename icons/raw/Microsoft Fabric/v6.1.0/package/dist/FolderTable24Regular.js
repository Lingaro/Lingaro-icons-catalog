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
var SvgFolderTable24Regular = function SvgFolderTable24Regular(_a, ref) {
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
    d: "M2 6.25A3.25 3.25 0 0 1 5.25 3h2.879a2.25 2.25 0 0 1 1.59.659L11.562 5.5h7.189A3.25 3.25 0 0 1 22 8.666a4.8 4.8 0 0 0-1.25-.166h-.268A1.75 1.75 0 0 0 18.75 7h-7.19L9.72 8.841a2.25 2.25 0 0 1-1.591.659H3.5v8.25c0 .966.784 1.75 1.75 1.75H9.5v.25q.002.651.166 1.25H5.25A3.25 3.25 0 0 1 2 17.75zm1.5 0V8h4.629a.75.75 0 0 0 .53-.22l1.53-1.53-1.53-1.53a.75.75 0 0 0-.53-.22H5.25A1.75 1.75 0 0 0 3.5 6.25"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 13.25A3.25 3.25 0 0 1 14.25 10h6.5A3.25 3.25 0 0 1 24 13.25v6.5A3.25 3.25 0 0 1 20.75 23h-6.5A3.25 3.25 0 0 1 11 19.75zm3.25-1.75a1.75 1.75 0 0 0-1.75 1.75V14H15v-2.5zM15 18v-2.5h-2.5V18zm1.5-2.5V18h2v-2.5zm3.5 0V18h2.5v-2.5zm-1.5 4h-2v2h2zm4 0H20v2h.75a1.75 1.75 0 0 0 1.75-1.75zm-1.75-8H20V14h2.5v-.75a1.75 1.75 0 0 0-1.75-1.75M16.5 14h2v-2.5h-2zM15 21.5v-2h-2.5v.25c0 .966.784 1.75 1.75 1.75z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgFolderTable24Regular);

export { ForwardRef as default };
