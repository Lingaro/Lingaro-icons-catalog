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
var SvgDatatypeDouble20Filled = function SvgDatatypeDouble20Filled(_a, ref) {
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
    d: "M10.7 8.75a.75.75 0 0 0 .8-.702 1 1 0 0 1 .148-.388c.109-.168.338-.409.952-.409.58 0 .862.186 1.004.38.158.216.266.61.157 1.243a.78.78 0 0 1-.403.597c-.204.126-.423.206-.719.314q-.19.069-.43.162c-.474.185-1.057.456-1.505.997-.46.558-.704 1.308-.704 2.307a.75.75 0 0 0 .75.75h3.75a.75.75 0 0 0 0-1.5h-2.922c.069-.285.175-.47.282-.6.196-.238.48-.395.895-.557q.121-.047.271-.101c.343-.125.776-.282 1.122-.497a2.27 2.27 0 0 0 1.091-1.618c.15-.867.057-1.723-.424-2.382-.497-.68-1.295-.995-2.215-.995-1.136 0-1.832.51-2.21 1.091a2.5 2.5 0 0 0-.387 1.09v.011l-.001.004v.002c0 .003-.024.353 0 .002a.75.75 0 0 0 .698.798ZM9 13.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M6.457 6.03A.75.75 0 0 1 7 6.75v6.5a.75.75 0 0 1-1.5 0V8.806c-.241.19-.524.384-.864.588a.75.75 0 0 1-.772-1.286c.58-.349.903-.621 1.128-.868.216-.237.361-.47.575-.812l.048-.075a.75.75 0 0 1 .842-.323"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatatypeDouble20Filled);

export { ForwardRef as default };
