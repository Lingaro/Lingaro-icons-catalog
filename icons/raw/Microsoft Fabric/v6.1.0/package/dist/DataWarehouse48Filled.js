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
var SvgDataWarehouse48Filled = function SvgDataWarehouse48Filled(_a, ref) {
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
    d: "m24.86 5.508 5.5 3.395 2.154 1.329.008.005.77.476c3.859 2.38 7.77 4.793 9.928 6.128.47.29.78.809.78 1.408v20.603l.002.01v.027a3.83 3.83 0 0 1-3.604 3.822h-.45a3.83 3.83 0 0 1-3.604-3.822v-.026h-.003V25.918a4.15 4.15 0 0 0-2.013-3.565l-13.122-8.041a4.15 4.15 0 0 0-2.206-.63c-.798 0-1.549.226-2.189.62L4.01 22.204v-3.946a1.67 1.67 0 0 1 .79-1.418c3.94-2.426 13.67-8.427 18.32-11.303.26-.16.56-.26.89-.26.31 0 .6.08.85.23ZM4.01 25.896v4.135l7.801-4.816a4.18 4.18 0 0 1 4.395.01l.756.468a9494 9494 0 0 0 7.541 4.65 4.16 4.16 0 0 1 1.997 3.552v6.324a2.5 2.5 0 0 0 2.474 2.492h5.63a4.96 4.96 0 0 1-.764-2.652v-14.14c0-.61-.32-1.139-.81-1.428L19.88 16.43a1.67 1.67 0 0 0-1.76 0L4.81 24.65c-.432.26-.742.715-.8 1.247Zm0 7.829v4.004c0 1.351.538 2.578 1.412 3.477A5 5 0 0 0 9 42.71h15.667A4.96 4.96 0 0 1 24 40.22v-6.324c0-.599-.32-1.128-.8-1.418-3.78-2.326-8.32-5.132-8.32-5.132a1.67 1.67 0 0 0-1.76 0l-8.33 5.142a1.69 1.69 0 0 0-.78 1.238Z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataWarehouse48Filled);

export { ForwardRef as default };
