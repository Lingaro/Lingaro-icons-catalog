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
var SvgFolderOpenDataBar20Regular = function SvgFolderOpenDataBar20Regular(_a, ref) {
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
    d: "M16.996 7.073V7a2.5 2.5 0 0 0-2.5-2.5H9.664l-1.6-1.2a1.5 1.5 0 0 0-.9-.3H4.5A2.5 2.5 0 0 0 2 5.5l.001 8.998a2.5 2.5 0 0 0 2.201 2.482 1.6 1.6 0 0 0 .26.022H10v-1H4.463a.5.5 0 0 1-.49-.595l1.36-7a.5.5 0 0 1 .491-.405h10.713a.5.5 0 0 1 .491.595l-.278 1.434c.16.287.25.617.25.969v.268q.264-.155.572-.222l.438-2.258a1.5 1.5 0 0 0-1.014-1.715M4.5 4h2.664a.5.5 0 0 1 .3.1l1.734 1.3a.5.5 0 0 0 .3.1h4.998a1.5 1.5 0 0 1 1.5 1.5v.002H5.824a1.5 1.5 0 0 0-1.472 1.214l-1.298 6.676A1.5 1.5 0 0 1 3 14.498V5.5A1.5 1.5 0 0 1 4.5 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 11a1 1 0 1 1 2 0v7a1 1 0 1 1-2 0zm-3 4a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0zm7-3a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-5a1 1 0 0 0-1-1"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgFolderOpenDataBar20Regular);

export { ForwardRef as default };
