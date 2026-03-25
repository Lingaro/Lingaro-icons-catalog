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
var SvgDataEngineering32Filled = function SvgDataEngineering32Filled(_a, ref) {
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
    d: "M9.606 2.45c.383-.293.848-.45 1.334-.45h10.91c.85 0 1.4.87 1 1.65l-.004.008c-1.69 3.271-4.16 5.89-6.946 8.182-.946.733-1.752 1.387-2.484 1.914a98 98 0 0 1-3.186 2.206q-.256.172-.514.343-.514.34-1.022.69c-.79.544-1.556 1.117-2.244 1.787-1.416 1.376-2.454 3.328-2.41 5.341L2.47 22.37a2.43 2.43 0 0 1-.466-1.439v-9.75a2.4 2.4 0 0 1 .151-.76 2.5 2.5 0 0 1 .559-.88l6.892-7.09ZM6.48 26.13a7 7 0 0 1-.233-.599c-.349-1.05-.399-2.16.163-3.251.47-.91.81-1.43 1.13-1.8.31-.37.67-.68 1.27-1.11q.465-.33 1.14-.78c.838-.56 2.615-1.786 4.516-3.173l.664 1.053.149.231a18.2 18.2 0 0 0 2.038 2.84c2.226 2.572 5.35 4.91 8.44 5.426a8 8 0 0 0 1.27.106L23.612 29.1c-.443.518-1.013.825-1.61.878l-.122.012h-11.4c-.61 0-1.2-.25-1.63-.71-.057-.074-1.437-1.568-1.51-1.67-.26-.37-.59-.88-.86-1.48m19.852-3.074c.425.1.829.148 1.204.136.64-.022 1.196-.22 1.624-.637.492-.606.799-1.469.838-2.332v-7.242c0-1.283-.626-2.338-1.452-2.784a1.74 1.74 0 0 0-1.396-.133c-.284.093-.55.264-.787.503a30.4 30.4 0 0 1-7.263 7.739c2.14 2.215 4.976 4.217 7.232 4.75",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataEngineering32Filled);

export { ForwardRef as default };
