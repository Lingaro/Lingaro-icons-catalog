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
var SvgRealTimeIntelligence24Filled = function SvgRealTimeIntelligence24Filled(_a, ref) {
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
    d: "M9.678 12.165c-.46.17-.931.22-1.402.24l-.01.01H2.901L11.75 2.4c.23-.25.56-.4.92-.4.691 0 1.252.56 1.252 1.25 0 .12-.02.23-.05.33L12.31 9.345c-.26.94-.88 1.79-1.681 2.34-.3.2-.621.359-.951.479ZM22 9.926c0-.39-.15-.79-.41-1.08-.543-.62-1.34-.601-2.093-.585l-5.345.006-.4 1.49a5.656 5.656 0 0 1-5.476 4.167H2.911c-.5 0-.911.41-.911.91s.41.91.91.92h12.814c.48 0 .91.199 1.22.529l4.075-4.618s.73-.72.9-1.25c.051-.16.081-.319.081-.489m-6.266 7.326h-4.745l-.86 3.169c-.031.11-.051.22-.051.33 0 .69.56 1.249 1.251 1.249.36 0 .691-.15.921-.4l3.604-4.088s.04-.06.04-.1c0-.09-.07-.16-.16-.16",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgRealTimeIntelligence24Filled);

export { ForwardRef as default };
