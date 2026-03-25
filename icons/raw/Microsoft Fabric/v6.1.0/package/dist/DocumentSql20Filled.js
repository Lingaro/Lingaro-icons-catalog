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
var SvgDocumentSql20Filled = function SvgDocumentSql20Filled(_a, ref) {
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
    d: "M10 2.001v4.5a1.5 1.5 0 0 0 1.5 1.5H16v8.5a1.5 1.5 0 0 1-1.065 1.436A1.5 1.5 0 0 0 13.5 16H13v-2.5a1.5 1.5 0 0 0-2.87-.612l-.009-.01a3 3 0 0 0-4.142-.095q-.076-.078-.163-.145A3.15 3.15 0 0 0 4 11.986V3.5A1.5 1.5 0 0 1 5.5 2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 2.251v4.25a.5.5 0 0 0 .5.5h4.25zM5.206 13.437A2.14 2.14 0 0 0 3.696 13a1.583 1.583 0 0 0-1.695 1.468L2 14.485v.017c0 .578.365.935.692 1.135.307.187.659.286.85.34l.022.006.062.018c.201.056.388.108.54.201.14.085.192.166.192.3 0 .255-.084.341-.152.387-.1.069-.272.113-.506.113h-.021l-.022.002a1.17 1.17 0 0 1-.84-.26.5.5 0 0 0-.633.774c.431.353.982.526 1.537.484.32-.002.717-.06 1.05-.287.371-.254.587-.668.587-1.213 0-.582-.33-.945-.671-1.153-.28-.171-.606-.26-.792-.312l-.06-.016c-.206-.058-.44-.126-.622-.238-.164-.1-.208-.182-.213-.265a.58.58 0 0 1 .644-.519l.058.007.058-.007a1.14 1.14 0 0 1 .834.229.5.5 0 1 0 .612-.791M8 13.001a2 2 0 0 0-2 2v1a2 2 0 0 0 3.25 1.562l.45.338a.5.5 0 1 0 .6-.8l-.45-.338A2 2 0 0 0 10 16v-1a2 2 0 0 0-2-2Zm.3 2.6a.5.5 0 1 0-.6.8l.693.52A1 1 0 0 1 7 16v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-.007.12L8.3 15.6Zm3.7-2.1a.5.5 0 1 0-1 0v4a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 0-1H12z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDocumentSql20Filled);

export { ForwardRef as default };
