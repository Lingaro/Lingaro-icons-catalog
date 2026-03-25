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
var SvgNotebookCode32Filled = function SvgNotebookCode32Filled(_a, ref) {
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
    d: "M4 5.25A3.25 3.25 0 0 1 7.25 2h16.5A3.25 3.25 0 0 1 27 5.25v21.5A3.25 3.25 0 0 1 23.75 30H7.25A3.25 3.25 0 0 1 4 26.75zm13.896 3.993a1 1 0 0 0-1.94-.485l-2.25 9a1 1 0 1 0 1.94.485zm.897 7.464a1 1 0 0 0 1.415 0l2.429-2.43a1.1 1.1 0 0 0 0-1.555l-2.43-2.43a1 1 0 1 0-1.414 1.415l1.793 1.793-1.793 1.793a1 1 0 0 0 0 1.414m-6.586-5a1 1 0 0 0-1.415-1.414l-2.429 2.43a1.1 1.1 0 0 0 0 1.555l2.43 2.43a1 1 0 0 0 1.414-1.415L10.414 13.5zM29.25 8H28v4h1.25a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-.75-.75M28 14h1.25a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-.75.75H28zm1.25 6H28v4h1.25a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-.75-.75"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgNotebookCode32Filled);

export { ForwardRef as default };
