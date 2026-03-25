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
var SvgMyLocationDatabase20Filled = function SvgMyLocationDatabase20Filled(_a, ref) {
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
    d: "M10 14.5q.517-.002 1-.111v1.528a6 6 0 0 1-.25.037v1.296a.75.75 0 0 1-1.5 0v-1.296a6 6 0 0 1-5.204-5.204H2.75a.75.75 0 0 1 0-1.5h1.296A6 6 0 0 1 9.25 4.046V2.75a.75.75 0 0 1 1.5 0v1.296A6 6 0 0 1 15.917 9c-.514.005-1.02.05-1.5.135A4.502 4.502 0 0 0 5.5 10a4.5 4.5 0 0 0 4.5 4.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 13c.35 0 .687-.06 1-.17v-.991l.006.004c.046-.643.37-1.144.705-1.481.357-.36.799-.617 1.226-.8l.03-.012A3 3 0 1 0 10 13m6-3c-1.014 0-1.959.177-2.669.481-.354.152-.672.345-.91.585-.24.241-.421.557-.421.934s.182.693.421.934c.238.24.556.433.91.585.71.304 1.655.481 2.669.481s1.959-.177 2.669-.481c.354-.152.672-.345.91-.585.24-.241.421-.557.421-.934s-.182-.693-.421-.934c-.238-.24-.556-.433-.91-.585C17.959 10.177 17.014 10 16 10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 13.895V18q.001.21.07.394c.075.208.201.389.352.54.236.24.555.433.91.585.709.304 1.654.481 2.668.481s1.959-.177 2.668-.481c.355-.152.674-.345.91-.585a1.46 1.46 0 0 0 .383-.632q.038-.143.039-.302v-4.105c-.293.23-.62.407-.938.543-.86.369-1.945.562-3.062.562a9 9 0 0 1-1.24-.081 7 7 0 0 1-1.822-.48 4.2 4.2 0 0 1-.938-.544"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgMyLocationDatabase20Filled);

export { ForwardRef as default };
