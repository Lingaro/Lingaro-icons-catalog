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
var SvgDocumentRdl20Filled = function SvgDocumentRdl20Filled(_a, ref) {
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
    d: "M9.786 14a1.5 1.5 0 0 1 1.5 1.5c0 .5-.245.94-.621 1.213.143.204.246.42.318.604.106.269.186.562.236.717q.015.049.028.083a.497.497 0 0 1-.318.883.58.58 0 0 1-.389-.153.7.7 0 0 1-.147-.194 2 2 0 0 1-.126-.312c-.071-.22-.124-.427-.215-.658-.186-.474-.39-.683-.695-.683H9v1.5a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5zM9 16h.786a.5.5 0 0 0 0-1H9zm4.75-2a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5H12.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5zM13 18h.75a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H13zm3.5-4a.5.5 0 0 1 .5.5V18h1.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 6.5A1.5 1.5 0 0 0 11.5 8H16v5.085a1.5 1.5 0 0 0-.67.48A2.5 2.5 0 0 0 13.75 13H12.5c-.466 0-.883.213-1.158.547A2.5 2.5 0 0 0 9.786 13H8.5A1.5 1.5 0 0 0 7 14.5V18H5.5A1.5 1.5 0 0 1 4 16.5v-13A1.5 1.5 0 0 1 5.5 2H10z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.75 7H11.5a.5.5 0 0 1-.5-.5V2.25z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDocumentRdl20Filled);

export { ForwardRef as default };
