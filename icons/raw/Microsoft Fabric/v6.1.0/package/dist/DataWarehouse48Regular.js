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
var SvgDataWarehouse48Regular = function SvgDataWarehouse48Regular(_a, ref) {
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
    d: "M37.67 42.712v.01H9.01a5 5 0 0 1-3.566-1.494A4.97 4.97 0 0 1 4 37.719l.01-19.46c0-.6.32-1.129.79-1.418 3.94-2.427 13.67-8.427 18.32-11.303.26-.16.56-.26.89-.26.31 0 .6.08.85.23 1.924 1.189 4.733 2.922 7.643 4.717l.017.01.002.002c4.1 2.53 8.396 5.18 10.698 6.604.47.29.78.809.78 1.408V36.61h-.004a6.33 6.33 0 0 1-6.325 6.1Zm-5.031-2.49a6.3 6.3 0 0 1-1.293-3.597h-.009V26.544L19 18.826 6.51 26.538v4.887l6.61-4.08a1.67 1.67 0 0 1 1.76 0s4.54 2.806 8.32 5.132c.48.29.8.819.8 1.418v3.824c0 .908.243 1.759.667 2.492l7.972.01Zm1.198-3.84V26.078c0-.61-.32-1.139-.81-1.428L19.88 16.43a1.67 1.67 0 0 0-1.76 0L6.51 23.6v-4.875a17159 17159 0 0 0 17.504-10.8L41.5 18.717v17.666a3.829 3.829 0 0 1-7.658 0zM9 40.213h12.925a7.5 7.5 0 0 1-.425-2.493v-3.353a5443 5443 0 0 1-7.165-4.42L14 29.74l-7.49 4.624v3.365A2.48 2.48 0 0 0 9 40.212Z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataWarehouse48Regular);

export { ForwardRef as default };
