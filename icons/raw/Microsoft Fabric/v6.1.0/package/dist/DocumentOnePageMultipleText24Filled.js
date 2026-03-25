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
var SvgDocumentOnePageMultipleText24Filled = function SvgDocumentOnePageMultipleText24Filled(_a, ref) {
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
    d: "M4 4.251a2.25 2.25 0 0 1 2.25-2.25h9a2.25 2.25 0 0 1 2.25 2.25v13a2.25 2.25 0 0 1-2.25 2.25h-9A2.25 2.25 0 0 1 4 17.251zm3 2v1.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75m4.75.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zM7 11.251c0 .414.336.75.75.75h6a.75.75 0 0 0 0-1.5h-6a.75.75 0 0 0-.75.75m.75 2.781a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.629 20.501a2.25 2.25 0 0 0 2.122 1.5h6.5a4.75 4.75 0 0 0 4.75-4.75V11.37a2.25 2.25 0 0 0-.66-1.591l-.84-.841v8.313a3.25 3.25 0 0 1-3.25 3.25z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDocumentOnePageMultipleText24Filled);

export { ForwardRef as default };
