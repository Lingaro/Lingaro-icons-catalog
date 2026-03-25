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
var SvgNotebookCode32Regular = function SvgNotebookCode32Regular(_a, ref) {
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
    d: "M17.169 8.03a1 1 0 0 1 .727 1.213l-2.25 9a1 1 0 0 1-1.94-.485l2.25-9a1 1 0 0 1 1.213-.728m1.624 7.263a1 1 0 0 0 1.415 1.414l2.429-2.43a1.1 1.1 0 0 0 0-1.555l-2.43-2.43a1 1 0 1 0-1.414 1.415l1.793 1.793zm-6.586-3.586a1 1 0 0 0-1.415-1.414l-2.429 2.43a1.1 1.1 0 0 0 0 1.555l2.43 2.43a1 1 0 0 0 1.414-1.415L10.414 13.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.25 2A3.25 3.25 0 0 0 4 5.25v21.5A3.25 3.25 0 0 0 7.25 30h16.5A3.25 3.25 0 0 0 27 26.75V5.25A3.25 3.25 0 0 0 23.75 2zM6 5.25C6 4.56 6.56 4 7.25 4h16.5c.69 0 1.25.56 1.25 1.25v21.5c0 .69-.56 1.25-1.25 1.25H7.25C6.56 28 6 27.44 6 26.75zM28 8h1.25a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-.75.75H28zm1.25 6H28v4h1.25a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-.75-.75M28 20h1.25a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-.75.75H28z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgNotebookCode32Regular);

export { ForwardRef as default };
