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
var SvgRealTimeIntelligence16Filled = function SvgRealTimeIntelligence16Filled(_a, ref) {
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
    d: "M5.893 8.245c-.16.03-.32.04-.49.04H1.65l6.185-7.004a.872.872 0 0 1 1.481.822l-1.1 4.038a2.92 2.92 0 0 1-2.278 2.094.2.2 0 0 1-.045.01M15 6.532c0-.13-.02-.25-.06-.371-.19-.531-.7-.792-1.24-.792H9.465l-.28 1.032a3.915 3.915 0 0 1-3.783 2.887H1.67a.671.671 0 0 0 0 1.342h8.887c.09 0 .17 0 .26.03.07.02.14.04.2.07.01 0 .02 0 .03.01q.225.105.39.301l2.883-3.277s.41-.39.54-.661c.09-.17.14-.38.14-.571m-4.463 5.08-3.222.01-.62 2.276a.872.872 0 0 0 1.481.822l2.5-2.847s.03-.05.03-.09c0-.09-.07-.17-.17-.17Z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgRealTimeIntelligence16Filled);

export { ForwardRef as default };
