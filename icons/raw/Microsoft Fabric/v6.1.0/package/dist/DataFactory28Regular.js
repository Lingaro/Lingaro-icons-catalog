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
var SvgDataFactory28Regular = function SvgDataFactory28Regular(_a, ref) {
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
    fillRule: "evenodd",
    d: "M23.996 8.504c1.104 0 1.998.894 1.998 1.998v.023l.006-.029v7.002a1.997 1.997 0 0 1-1.997 1.998h-.828a7 7 0 0 0-6.689 4.944l-.263.852c-.132.42-.516.708-.954.708H8.946a.82.82 0 0 1-.81-.936 14.67 14.67 0 0 1 3.084-7.062H3.002C2.45 18.002 2 17.552 2 17v-6c0-.552.45-1.002 1.002-1.002h8.143a14.9 14.9 0 0 1-3.008-7.05A.832.832 0 0 1 8.958 2h6.305c.438 0 .821.288.953.708l.264.852a7 7 0 0 0 6.689 4.944zM12.49 11.498H3.5v5.004h16.999v-.953a14.93 14.93 0 0 1-8.01-4.051Zm12.005-.996v3.76a3 3 0 0 0-.324-.016H22.93A13.445 13.445 0 0 1 9.755 3.5h5.136l.156.502v.001a8.5 8.5 0 0 0 8.122 6.001h.827c.275 0 .498.222.498.498Z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataFactory28Regular);

export { ForwardRef as default };
