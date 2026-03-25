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
var SvgRealTimeIntelligence28Regular = function SvgRealTimeIntelligence28Regular(_a, ref) {
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
    d: "m14.787 3.5-.903 7.008a3.5 3.5 0 0 1-3.351 2.489h-4.87zm.513 7.505a5 5 0 0 1-4.768 3.492H4.628v.009a1.252 1.252 0 0 0 0 2.49v.002h11.439a3.49 3.49 0 0 1 2.662 1.229l5.63-6.392a.5.5 0 0 0 .137-.264v-.068a.497.497 0 0 0-.498-.498zM4.627 18.498v.002a2.751 2.751 0 0 1-1.82-4.695L13.684 2.48c.276-.294.666-.48 1.104-.48a1.5 1.5 0 0 1 1.446 1.896l-.711 5.61h8.474a1.99 1.99 0 0 1 1.993 1.854c.003.043.01.105.01.149-.002.52-.203.988-.533 1.344L14.302 25.524c-.276.294-.666.48-1.104.48a1.5 1.5 0 0 1-1.5-1.5c0-.138.029-.258.054-.396l.711-5.61zm9.349 0-.777 6.006 4.521-5.128-.002-.003a2 2 0 0 0-1.652-.875z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgRealTimeIntelligence28Regular);

export { ForwardRef as default };
