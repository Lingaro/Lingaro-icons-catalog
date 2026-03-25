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
var SvgDatabases32Filled = function SvgDatabases32Filled(_a, ref) {
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
    d: "M3.75 2.001h15.045c5.82 0 9.205 2.488 9.205 5.665 0 1.761-.937 3.308-2.667 4.34v-1.97c0-2.108-1.866-3.37-4.168-3.37H10.151a1.75 1.75 0 0 0-1.669 2.279l3.761 11.72H8.616a1.75 1.75 0 0 1-1.663-1.203C5.635 15.355 3.348 8.206 2.44 5.369l-.386-1.207A1.4 1.4 0 0 1 2 3.751c0-.967.784-1.75 1.75-1.75"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.635 15.314v.019s4.302 13.422 4.48 13.961c.18.539.788.812 1.215.669 2.315-.773 4.67-2.541 4.67-4.632V7.667c0 3.714-3.22 7.451-10.365 7.647"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.294 13.333h.398c1.371 0 2.587-.172 3.642-.477v-2.819c0-1.332-1.946-1.37-2.168-1.37H10.494l4.961 15.461a1.75 1.75 0 0 0 1.663 1.203h3.627L17.63 15.62a1.75 1.75 0 0 1 1.665-2.287Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabases32Filled);

export { ForwardRef as default };
