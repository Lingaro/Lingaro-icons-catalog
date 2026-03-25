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
var SvgHomeTreeLine20Regular = function SvgHomeTreeLine20Regular(_a, ref) {
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
    d: "M4 13V8.953a2.4 2.4 0 0 1-.813-.328 2.6 2.6 0 0 1-.632-.563 2.4 2.4 0 0 1-.407-.75A2.9 2.9 0 0 1 2 6.446q0-.507.203-.953t.547-.773q.344-.328.797-.524a2.47 2.47 0 0 1 1.906-.008q.453.188.797.524t.547.781Q7 5.939 7 6.446q0 .453-.14.867a2.4 2.4 0 0 1-.407.743 2.8 2.8 0 0 1-.633.57 2.2 2.2 0 0 1-.82.328V13h3V8.5q0-.234.172-.383l3.5-3A.5.5 0 0 1 12 5q.187 0 .328.117l3.5 3A.48.48 0 0 1 16 8.5V13h1.5a.48.48 0 0 1 .352.148.48.48 0 0 1 .148.352.48.48 0 0 1-.148.352.48.48 0 0 1-.352.148h-15a.48.48 0 0 1-.352-.148A.48.48 0 0 1 2 13.5a.48.48 0 0 1 .148-.352A.48.48 0 0 1 2.5 13zm.5-5a1.51 1.51 0 0 0 1.383-.922q.125-.28.117-.578a1.51 1.51 0 0 0-.922-1.383A1.3 1.3 0 0 0 4.5 5a1.51 1.51 0 0 0-1.383.922q-.125.28-.117.578a1.51 1.51 0 0 0 .922 1.383q.28.125.578.117M12 6.156l-3 2.57V13h6V8.727l-3-2.57ZM17.5 15a.48.48 0 0 1 .352.148.48.48 0 0 1 .148.352.48.48 0 0 1-.148.352.48.48 0 0 1-.352.148h-15a.48.48 0 0 1-.352-.148A.48.48 0 0 1 2 15.5a.48.48 0 0 1 .148-.352A.48.48 0 0 1 2.5 15z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgHomeTreeLine20Regular);

export { ForwardRef as default };
